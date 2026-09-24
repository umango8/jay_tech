import { QuoteFormData } from "../types";

export function renderClientQuoteEmail(
  data: QuoteFormData,
  options?: { logoSrc?: string }
): { subject: string; html: string; text: string } {
  const subject = `Enquiry Received: We've got your manufacturing requirement | Jay Tech Industries`;
  const referenceId = `JT-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const currentYear = new Date().getFullYear();
  const logoSrc = options?.logoSrc || "cid:jaytech-logo";

  const formattedFileSize = data.file?.size
    ? data.file.size > 1024 * 1024
      ? `${(data.file.size / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.round(data.file.size / 1024)} KB`
    : "";

  const text = `
Dear ${data.name},

Thank you for contacting Jay Tech Industries. We have received your manufacturing quote enquiry (Ref: ${referenceId}).

Your Submitted Requirement:
- Name: ${data.name}
- Company: ${data.company || "N/A"}
- Phone: ${data.phone}
- Email: ${data.email}
- Requirement: ${data.requirement}
${data.file ? `- Attached Drawing/File: ${data.file.filename} (${formattedFileSize})` : ""}
${data.message ? `- Message/Notes: ${data.message}` : ""}

What happens next:
1. Technical Review: Our tooling and production engineers are reviewing your specifications and drawing.
2. Discussion & Feasibility: If required, we will reach out for tolerance or material clarifications.
3. Official Quotation: We aim to provide an engineering estimate and timeline within 24–48 business hours.

Need urgent assistance?
Call our direct engineering desk:
+91 97243 24427 / +91 99742 96091 / +91 97243 24426
Email: info@jaytechindustries.com
Address: A-54/1, Bileshwar Industrial Estate, Opp. GVMM, Odhav, Ahmedabad, Gujarat – 382418, India

Warm regards,
Jay Tech Industries Team
https://jaytechindustries.com
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
    img {
      -ms-interpolation-mode: bicubic;
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
    }
    @media only screen and (max-width: 620px) {
      .mobile-padding {
        padding: 24px 16px !important;
      }
      .col-stack {
        display: block !important;
        width: 100% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f6f8; width: 100%;">
    <tr>
      <td align="center" style="padding: 32px 12px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0f172a; padding: 32px 36px; text-align: left; border-bottom: 4px solid #FC5506;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <img
                      src="${logoSrc}"
                      alt="Jay Tech Industries"
                      width="190"
                      style="display: block; width: 190px; max-width: 100%; height: auto; border: 0;"
                    />
                    <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 6px; font-weight: 600;">
                      Precision Tooling & Mould Engineering • Est. 2007
                    </div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; background-color: rgba(252, 85, 6, 0.15); border: 1px solid #FC5506; color: #FC5506; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; letter-spacing: 0.5px;">
                      REF: ${referenceId}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td class="mobile-padding" style="padding: 36px 36px 28px 36px;">
              <h1 style="margin: 0 0 14px 0; font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.3;">
                Thank You, ${escapeHtml(data.name)}!
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.6; color: #475569;">
                We have successfully received your manufacturing quote enquiry. Our engineering and estimation team is currently reviewing your technical specifications.
              </p>

              <!-- Details Summary Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 28px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="background-color: #f1f5f9; padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #334155;">
                    Enquiry Summary
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; width: 34%; border-bottom: 1px solid #f1f5f9;">Name:</td>
                  <td style="padding: 12px 18px; font-size: 14px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${escapeHtml(data.name)}</td>
                </tr>
                ${data.company ? `
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Company:</td>
                  <td style="padding: 12px 18px; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${escapeHtml(data.company)}</td>
                </tr>` : ""}
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Phone:</td>
                  <td style="padding: 12px 18px; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${escapeHtml(data.phone)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Email:</td>
                  <td style="padding: 12px 18px; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${escapeHtml(data.email)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Requirement:</td>
                  <td style="padding: 12px 18px; font-size: 14px; font-weight: 600; color: #FC5506; border-bottom: 1px solid #f1f5f9;">${escapeHtml(data.requirement)}</td>
                </tr>
                ${data.file ? `
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Attached File:</td>
                  <td style="padding: 12px 18px; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">📎 ${escapeHtml(data.file.filename)} <span style="color: #94a3b8; font-size: 12px;">(${formattedFileSize})</span></td>
                </tr>` : ""}
                ${data.message ? `
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b; vertical-align: top;">Message / Scope:</td>
                  <td style="padding: 12px 18px; font-size: 14px; color: #334155; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
                </tr>` : ""}
              </table>

              <!-- What's Next Steps -->
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 700; color: #0f172a;">
                What to Expect Next
              </h2>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="width: 32px; vertical-align: top; padding-top: 2px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background-color: #FC5506; color: #ffffff; font-size: 12px; font-weight: 700; text-align: center; line-height: 24px;">1</div>
                  </td>
                  <td style="padding-left: 12px; padding-bottom: 16px;">
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Technical Feasibility & Tooling Study</div>
                    <div style="font-size: 13px; color: #64748b; margin-top: 2px; line-height: 1.4;">Our team evaluates material grades, machine routing, and tolerance specifications.</div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 32px; vertical-align: top; padding-top: 2px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background-color: #FC5506; color: #ffffff; font-size: 12px; font-weight: 700; text-align: center; line-height: 24px;">2</div>
                  </td>
                  <td style="padding-left: 12px; padding-bottom: 16px;">
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Engineering Quote & Delivery Schedule</div>
                    <div style="font-size: 13px; color: #64748b; margin-top: 2px; line-height: 1.4;">We provide a clear commercial proposal typically within 24 to 48 business hours.</div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 32px; vertical-align: top; padding-top: 2px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background-color: #FC5506; color: #ffffff; font-size: 12px; font-weight: 700; text-align: center; line-height: 24px;">3</div>
                  </td>
                  <td style="padding-left: 12px;">
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Production Kickoff & Precision Delivery</div>
                    <div style="font-size: 13px; color: #64748b; margin-top: 2px; line-height: 1.4;">Upon approval, machining begins with rigorous CMM quality inspection.</div>
                  </td>
                </tr>
              </table>

              <!-- Contact Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #fff7ed; border: 1px solid #ffedd5; border-radius: 8px; padding: 18px 20px;">
                <tr>
                  <td>
                    <div style="font-size: 13px; font-weight: 700; color: #9a3412; margin-bottom: 4px;">Need Immediate Assistance or Have Additional Drawings?</div>
                    <div style="font-size: 13px; color: #7c2d12; line-height: 1.5;">
                      Direct phone: <a href="tel:+919724324427" style="color: #FC5506; font-weight: 600; text-decoration: none;">+91 97243 24427</a> / <a href="tel:+919974296091" style="color: #FC5506; font-weight: 600; text-decoration: none;">+91 99742 96091</a><br>
                      Email: <a href="mailto:info@jaytechindustries.com" style="color: #FC5506; font-weight: 600; text-decoration: none;">info@jaytechindustries.com</a>
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 36px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                <strong style="color: #ffffff;">Jay Tech Industries</strong><br>
                A-54/1, Bileshwar Industrial Estate, Opp. GVMM, Odhav, Ahmedabad, Gujarat – 382418, India
              </p>
              <p style="margin: 0; font-size: 11px; color: #64748b;">
                © ${currentYear} Jay Tech Industries. All rights reserved.
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
