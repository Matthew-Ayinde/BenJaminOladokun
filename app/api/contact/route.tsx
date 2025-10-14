import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email templates
const getUserEmailTemplate = (name: string, subject: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Reaching Out</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #ffffff;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%); border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(16, 185, 129, 0.15);">
          
          <!-- Header with gradient -->
          <tr>
            <td style="padding: 0;">
              <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 48px 40px; text-align: center; position: relative;">
                <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 300; letter-spacing: -0.5px; position: relative; z-index: 1;">Thank You!</h1>
                <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px; font-weight: 300; position: relative; z-index: 1;">I've received your message</p>
              </div>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 48px 40px;">
              <p style="margin: 0 0 24px 0; color: rgba(255, 255, 255, 0.9); font-size: 18px; line-height: 1.6; font-weight: 300;">
                Hi <strong style="color: #10b981; font-weight: 500;">${name}</strong>,
              </p>
              
              <p style="margin: 0 0 24px 0; color: rgba(255, 255, 255, 0.8); font-size: 16px; line-height: 1.7; font-weight: 300;">
                Thank you for reaching out regarding <strong style="color: #10b981;">"${subject}"</strong>. I appreciate you taking the time to connect with me.
              </p>

              <p style="margin: 0 0 32px 0; color: rgba(255, 255, 255, 0.8); font-size: 16px; line-height: 1.7; font-weight: 300;">
                I've received your message and will review it carefully. I typically respond within 24-48 hours. If your inquiry is urgent, feel free to reach out directly at <a href="mailto:iambenoladokun@gmail.com" style="color: #10b981; text-decoration: none; font-weight: 500;">iambenoladokun@gmail.com</a>.
              </p>

              <!-- Decorative divider -->
              <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent); margin: 32px 0;"></div>

              <p style="margin: 0 0 24px 0; color: rgba(255, 255, 255, 0.7); font-size: 15px; line-height: 1.7; font-style: italic; padding-left: 20px; border-left: 3px solid #10b981;">
                "I'm always excited to connect with fellow entrepreneurs, innovators, and those passionate about building impactful ventures."
              </p>

              <p style="margin: 32px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px; font-weight: 300;">
                Best regards,<br>
                <strong style="color: #10b981; font-weight: 500; font-size: 18px;">Benjamen Oladokun</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px; background-color: rgba(16, 185, 129, 0.05); border-top: 1px solid rgba(16, 185, 129, 0.1);">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="text-align: center; padding-bottom: 16px;">
                    <p style="margin: 0 0 16px 0; color: rgba(255, 255, 255, 0.6); font-size: 14px; font-weight: 300;">Connect with me</p>
                    <div style="display: inline-block;">
                      <a href="#" style="display: inline-block; margin: 0 8px; width: 40px; height: 40px; border-radius: 50%; background-color: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); text-decoration: none; line-height: 40px; text-align: center; transition: all 0.3s;">
                        <span style="color: #10b981; font-size: 18px;">in</span>
                      </a>
                      <a href="#" style="display: inline-block; margin: 0 8px; width: 40px; height: 40px; border-radius: 50%; background-color: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); text-decoration: none; line-height: 40px; text-align: center; transition: all 0.3s;">
                        <span style="color: #10b981; font-size: 18px;">𝕏</span>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(16, 185, 129, 0.1);">
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.5); font-size: 13px; font-weight: 300;">
                      This is an automated confirmation email. Please do not reply directly to this message.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

const getAdminEmailTemplate = (name: string, email: string, subject: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #ffffff;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%); border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(16, 185, 129, 0.15);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 0;">
              <div style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 48px 40px; text-align: center; position: relative;">
                <div style="display: inline-block; width: 64px; height: 64px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; margin-bottom: 16px; line-height: 64px; position: relative; z-index: 1;">
                  <span style="font-size: 32px;">📬</span>
                </div>
                <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 300; letter-spacing: -0.5px; position: relative; z-index: 1;">New Contact Submission</h1>
                <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px; font-weight: 300; position: relative; z-index: 1;">Someone wants to connect with you</p>
              </div>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 48px 40px;">
              
              <!-- Contact Details Card -->
              <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
                <h2 style="margin: 0 0 24px 0; color: #10b981; font-size: 20px; font-weight: 500; letter-spacing: -0.3px;">Contact Information</h2>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.1);">
                      <p style="margin: 0; color: rgba(255, 255, 255, 0.6); font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                      <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px; font-weight: 400;">${name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.1);">
                      <p style="margin: 0; color: rgba(255, 255, 255, 0.6); font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                      <p style="margin: 8px 0 0 0;">
                        <a href="mailto:${email}" style="color: #10b981; font-size: 16px; font-weight: 400; text-decoration: none;">${email}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0;">
                      <p style="margin: 0; color: rgba(255, 255, 255, 0.6); font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                      <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px; font-weight: 400;">${subject}</p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Message Card -->
              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 32px;">
                <h2 style="margin: 0 0 20px 0; color: rgba(255, 255, 255, 0.9); font-size: 18px; font-weight: 500; letter-spacing: -0.3px;">Message</h2>
                <div style="color: rgba(255, 255, 255, 0.8); font-size: 15px; line-height: 1.8; white-space: pre-wrap; font-weight: 300;">${message}</div>
              </div>

              <!-- Quick Action Button -->
              <div style="text-align: center; margin-top: 40px;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 15px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);">
                  Reply to ${name}
                </a>
              </div>

              <!-- Timestamp -->
              <p style="margin: 32px 0 0 0; text-align: center; color: rgba(255, 255, 255, 0.4); font-size: 13px; font-weight: 300;">
                Received on ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px; background-color: rgba(16, 185, 129, 0.05); border-top: 1px solid rgba(16, 185, 129, 0.1); text-align: center;">
              <p style="margin: 0; color: rgba(255, 255, 255, 0.5); font-size: 13px; font-weight: 300;">
                This notification was sent from your portfolio contact form
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Benjamen Oladokun" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out - ${subject}`,
      html: getUserEmailTemplate(name, subject),
    })

    // Send notification email to admin
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: getAdminEmailTemplate(name, email, subject, message),
      replyTo: email,
    })

    return NextResponse.json({ success: true, message: "Emails sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
