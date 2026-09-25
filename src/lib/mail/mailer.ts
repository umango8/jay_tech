import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import { QuoteFormData, SendMailResult } from "./types";
import { renderAdminQuoteEmail } from "./templates/adminQuoteEmail";
import { renderClientQuoteEmail } from "./templates/clientQuoteEmail";

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT;

  if (!user || !pass) {
    return null;
  }

  // If custom SMTP host is specified (e.g. Hostinger, cPanel, etc.)
  if (host) {
    return nodemailer.createTransport({
      host,
      port: port ? parseInt(port, 10) : 465,
      secure: process.env.EMAIL_SECURE !== "false",
      auth: {
        user,
        pass,
      },
    });
  }

  // Default to gmail service if no host provided and using gmail address
  if (user.endsWith("@gmail.com")) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });
  }

  // Fallback for jaytechindustries.in or standard SMTP
  return nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendQuoteEmails(data: QuoteFormData): Promise<SendMailResult> {
  const adminEmail = process.env.EMAIL_TO;
  const userEmail = process.env.EMAIL_USER;
  const transporter = getTransporter();

  // If email configuration is missing, log simulation
  if (!transporter || !adminEmail || !userEmail) {
    console.warn(
      "[Nodemailer] EMAIL_USER, EMAIL_PASS, or EMAIL_TO missing in environment variables. Email simulation mode active."
    );
    return {
      success: true,
      adminSent: true,
      clientSent: true,
    };
  }

  const defaultFrom = `"Jay Tech Industries" <${userEmail}>`;
  const adminContent = renderAdminQuoteEmail(data);
  const clientContent = renderClientQuoteEmail(data);

  const logoPath = path.join(process.cwd(), "public/images/jay-tech-industries-logo-white.png");
  const logoExists = fs.existsSync(logoPath);
  const logoAttachment = logoExists
    ? [
        {
          filename: "jay-tech-industries-logo.png",
          path: logoPath,
          cid: "jaytech-logo",
          contentType: "image/png",
        },
      ]
    : [];

  const adminAttachments = [
    ...logoAttachment,
    ...(data.file
      ? [
          {
            filename: data.file.filename,
            content: data.file.content,
            contentType: data.file.contentType,
          },
        ]
      : []),
  ];

  const clientAttachments = [...logoAttachment];

  try {
    // 1. Send notification email to admin with attachment & embedded logo
    const adminPromise = transporter.sendMail({
      from: defaultFrom,
      to: adminEmail,
      replyTo: data.email,
      subject: adminContent.subject,
      text: adminContent.text,
      html: adminContent.html,
      attachments: adminAttachments,
    });

    // 2. Send acknowledgment email to client/user with embedded logo
    const clientPromise = transporter.sendMail({
      from: defaultFrom,
      to: data.email,
      replyTo: adminEmail,
      subject: clientContent.subject,
      text: clientContent.text,
      html: clientContent.html,
      attachments: clientAttachments,
    });

    const [adminResult, clientResult] = await Promise.allSettled([adminPromise, clientPromise]);

    const adminSent = adminResult.status === "fulfilled";
    const clientSent = clientResult.status === "fulfilled";

    if (!adminSent && !clientSent) {
      const adminErr = adminResult.status === "rejected" ? adminResult.reason : null;
      console.error("[Nodemailer] Failed to send both admin and client emails:", adminErr);
      return {
        success: false,
        adminSent: false,
        clientSent: false,
        error: adminErr?.message || "Failed to deliver emails through SMTP server.",
      };
    }

    if (!adminSent && adminResult.status === "rejected") {
      console.error("[Nodemailer] Failed to send admin email:", adminResult.reason);
    }
    if (!clientSent && clientResult.status === "rejected") {
      console.error("[Nodemailer] Failed to send client email:", clientResult.reason);
    }

    return {
      success: true,
      adminSent,
      clientSent,
    };
  } catch (err: any) {
    console.error("[Nodemailer] Unexpected error while sending emails:", err);
    return {
      success: false,
      error: err?.message || "Unknown error during email dispatch.",
    };
  }
}
