import { QuoteFormData } from "../types";

export function renderAdminQuoteEmail(
  data: QuoteFormData,
  options?: { logoSrc?: string }
): { subject: string; html: string; text: string } {
  const companyLabel = data.company ? ` [${data.company}]` : "";
  const subject = `🔔 New Quote Request: ${data.name}${companyLabel} - ${data.requirement}`;
  const now = new Date();
  const logoSrc = options?.logoSrc || "cid:jaytech-logo";
  const submissionTime = now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const formattedFileSize = data.file?.size
    ? data.file.size > 1024 * 1024
      ? `${(data.file.size / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.round(data.file.size / 1024)} KB`
    : "";

  const text = `
NEW QUOTE ENQUIRY RECEIVED
Submitted on: ${submissionTime} IST

CLIENT DETAILS:
- Name: ${data.name}
- Company: ${data.company || "Not provided"}
- Phone: ${data.phone}
- Email: ${data.email}
- Requirement: ${data.requirement}
${data.file ? `- Attached File: ${data.file.filename} (${formattedFileSize}) [Attached to this email]` : "- Attached File: None"}

CLIENT MESSAGE / SPECIFICATIONS:
${data.message ? data.message : "No additional message provided."}

QUICK ACTIONS:
- Reply to Email: mailto:${data.email}
- Call Customer: tel:${data.phone.replace(/[^0-9+]/g, "")}

Jay Tech Industries Web System
  `.trim();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    @media only screen and (max-width: 620px) {
      .mobile-padding {
        padding: 24px 16px !important;
      }
      .btn-stack {
        display: block !important;
        width: 100% !important;
        margin-bottom: 8px !important;
        text-align: center !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0b1120; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0b1120; width: 100%;">
    <tr>
      <td align="center" style="padding: 32px 12px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border: 1px solid #1e293b;">
          
          <!-- Top Alert Header -->
          <tr>
            <td style="background-color: #1e293b; padding: 26px 32px; border-bottom: 4px solid #FC5506;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="margin-bottom: 12px;">
                      <img
                        src="${logoSrc}"
                        alt="Jay Tech Industries"
                        width="170"
                        style="display: block; width: 170px; max-width: 100%; height: auto; border: 0;"
                      />
                    </div>
                    <span style="display: inline-block; background-color: #FC5506; color: #ffffff; font-size: 11px; font-weight: 800; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px;">
                      NEW RFQ SUBMISSION
                    </span>
                    <h1 style="margin: 8px 0 0 0; font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.3px;">
                      Quote Request Received
                    </h1>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <div style="font-size: 12px; color: #94a3b8; font-weight: 500;">
                      ${submissionTime} IST
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action Bar -->
          <tr>
            <td style="background-color: #f8fafc; padding: 16px 32px; border-bottom: 1px solid #e2e8f0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding-right: 12px;">
                    <a href="mailto:${encodeURIComponent(data.email)}?subject=Re:%20Manufacturing%20Quote%20Enquiry%20-%20Jay%20Tech%20Industries" class="btn-stack" style="display: inline-block; background-color: #FC5506; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 10px 18px; border-radius: 6px;">
                      ✉️ Reply to ${escapeHtml(data.name)}
                    </a>
                  </td>
                  <td>
                    <a href="tel:${escapeHtml(data.phone.replace(/[^0-9+]/g, ""))}" class="btn-stack" style="display: inline-block; background-color: #0f172a; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 10px 18px; border-radius: 6px;">
                      📞 Call ${escapeHtml(data.phone)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Dossier Body -->
          <tr>
            <td class="mobile-padding" style="padding: 28px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
                <tr>
                  <td colspan="2" style="background-color: #0f172a; padding: 12px 18px; color: #ffffff; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Customer Information
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; width: 32%; border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">Full Name:</td>
                  <td style="padding: 12px 18px; font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${escapeHtml(data.name)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">Company:</td>
                  <td style="padding: 12px 18px; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.company ? escapeHtml(data.company) : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">Phone:</td>
                  <td style="padding: 12px 18px; font-size: 14px; border-bottom: 1px solid #f1f5f9;">
                    <a href="tel:${escapeHtml(data.phone.replace(/[^0-9+]/g, ""))}" style="color: #FC5506; font-weight: 700; text-decoration: none;">${escapeHtml(data.phone)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">Email:</td>
                  <td style="padding: 12px 18px; font-size: 14px; border-bottom: 1px solid #f1f5f9;">
                    <a href="mailto:${encodeURIComponent(data.email)}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">Requirement:</td>
                  <td style="padding: 12px 18px; font-size: 15px; font-weight: 700; color: #FC5506; border-bottom: 1px solid #f1f5f9;">${escapeHtml(data.requirement)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; background-color: #f8fafc;">Attachment:</td>
                  <td style="padding: 12px 18px; font-size: 14px; color: #0f172a;">
                    ${data.file ? `
                      <span style="display: inline-block; background-color: #f1f5f9; border: 1px solid #cbd5e1; padding: 4px 8px; border-radius: 4px; font-weight: 600;">
                        📎 ${escapeHtml(data.file.filename)} (${formattedFileSize})
                      </span>
                      <div style="font-size: 12px; color: #16a34a; font-weight: 600; margin-top: 4px;">
                        ✓ File is attached directly to this email
                      </div>
                    ` : '<span style="color: #94a3b8; font-style: italic;">No file attached</span>'}
                  </td>
                </tr>
              </table>

              <!-- Customer Message Section -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px;">
                <div style="font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                  Message / Project Scope:
                </div>
                <div style="font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; word-break: break-word;">
                  ${data.message ? escapeHtml(data.message) : '<span style="color: #94a3b8; font-style: italic;">No additional notes provided.</span>'}
                </div>
              </div>

            </td>
          </tr>

          <!-- Admin Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 18px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Automated quote enquiry dispatcher • Jay Tech Industries Axis Engine
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  return { subject, html, text };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
