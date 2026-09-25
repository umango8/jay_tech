import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmails } from "@/lib/mail/mailer";
import { QuoteFormData } from "@/lib/mail/types";

// Maximum upload file size: 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const requirement = String(formData.get("requirement") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Basic validation
    if (!name || !phone || !email || !requirement) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Phone, Email, Requirement)." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Handle file attachment if provided
    let fileData: QuoteFormData["file"] | undefined = undefined;
    const uploadedFile = formData.get("file");

    if (uploadedFile && typeof uploadedFile === "object" && "arrayBuffer" in uploadedFile) {
      const file = uploadedFile as File;
      if (file.size > 0) {
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: "Uploaded file exceeds the maximum limit of 10MB." },
            { status: 400 }
          );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        fileData = {
          filename: file.name,
          content: buffer,
          contentType: file.type || "application/octet-stream",
          size: file.size,
        };
      }
    }

    const payload: QuoteFormData = {
      name,
      company: company || undefined,
      phone,
      email,
      requirement,
      message: message || undefined,
      file: fileData,
    };

    const mailResult = await sendQuoteEmails(payload);

    if (!mailResult.success) {
      return NextResponse.json(
        { error: mailResult.error || "Failed to deliver enquiry. Please contact us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully. Confirmation email sent.",
      adminSent: mailResult.adminSent,
      clientSent: mailResult.clientSent,
    });
  } catch (error: any) {
    console.error("[API /api/quote] Error handling quote request:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
