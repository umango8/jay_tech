import { NextRequest, NextResponse } from "next/server";
import { renderAdminQuoteEmail } from "@/lib/mail/templates/adminQuoteEmail";
import { renderClientQuoteEmail } from "@/lib/mail/templates/clientQuoteEmail";
import { QuoteFormData } from "@/lib/mail/types";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const template = searchParams.get("template") || "client";

  const sampleData: QuoteFormData = {
    name: "Rajesh Sharma",
    company: "Apex Precision Engineering Ltd.",
    phone: "+91 98765 43210",
    email: "rajesh.sharma@apexprecision.com",
    requirement: "High-Precision VMC Machined Aluminium Housings (Batch of 500 pcs)",
    message:
      "Looking for precision CNC milling with anodized finish. Tolerances strictly +/- 0.015mm. Please check attached STEP file for feasibility and submit a quote with lead time.",
    file: {
      filename: "housing_drawing_rev3.step",
      content: Buffer.from("sample file buffer content"),
      contentType: "application/step",
      size: 4.2 * 1024 * 1024,
    },
  };

  const options = { logoSrc: "/images/jay-tech-industries-logo-white.webp" };
  const rendered =
    template === "admin"
      ? renderAdminQuoteEmail(sampleData, options)
      : renderClientQuoteEmail(sampleData, options);

  // Return raw HTML so the browser renders the email template exactly as an email client would
  return new NextResponse(rendered.html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
