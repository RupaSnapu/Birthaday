// import nodemailer from "nodemailer";

// export async function POST(req) {
//   const { name, email, message = "" } = await req.json(); // optional message field

//   if (!name || !email) {
//     return new Response(JSON.stringify({ error: "Missing name or email" }), {
//       status: 400,
//     });
//   }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.NEXT_PUBLIC_EMAIL_USER,
//       pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
//     },
//   });

//   const logoUrl = "https://raw.githubusercontent.com/RupaSnapu/Birthaday/refs/heads/main/public/logo.png"; 

//   // 1. Confirmation Email to User
//   const confirmationMail = {
//     from: `"Snapu Photography" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
//     to: email,
//     subject: "Thank you for contacting Snapu 🎉",
//     text: `Hi ${name},\n\nThank you for considering Snapu Photography!\nWe will contact you within 24 hours.\n\nBest regards,\nSnapu Team`,
//     html: `
//       <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9; border-radius: 10px;">
//         <div style="text-align: center;">
//           <img src="${logoUrl}" alt="Snapu Logo" style="width: 120px;" />
//         </div>
//         <h2>Hi ${name},</h2>
//         <p>Thank you for reaching out to <strong>Snapu Photography</strong>! 🎉</p>
//         <p>We’ve received your message and will contact you within 24 hours.</p>
//         <p>Warm regards,<br/>The Snapu Team</p>
//       </div>
//     `,
//   };

//   // 2. Alert Email to Snapu Team
//  const alertMail = {
//   from: `"Snapu Bot" <no-reply@snapu.com>`,
//   to: "medicoplusin@gmail.com", // different from sending address
//   replyTo: email,
//   subject: "📥 New Snapu Form Submission",
//   text: `New form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message || 'No message provided'}`,
//   html: `
//     <div style="font-family: Arial; padding: 20px;">
//       <h2>📥 New Submission Received</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       ${message ? `<p><strong>Message:</strong><br/>${message}</p>` : "<p>No message provided</p>"}
//       <hr />
//       <small>This notification was sent from the Snapu contact form.</small>
//     </div>
//   `,
// };

//   try {
//     // Send both emails
//     await transporter.sendMail(confirmationMail);
//     await transporter.sendMail(alertMail);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (err) {
//     console.error("Error sending email:", err);
//     return new Response(
//       JSON.stringify({ error: "Failed to send email. Please try again later." }),
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ✅ Configure your SMTP details here
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.SMTP_USER, // e.g. your Gmail or SMTP username
    pass: process.env.SMTP_PASS, // SMTP password or App Password
  },
});

function generateConfirmationEmailHtml(name, logoUrl) {
  const year = new Date().getFullYear();
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0;">
      <div style="max-width:600px; margin:20px auto; background:#fff; padding:20px; border-radius:10px;">
        <div style="text-align:center; background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding:20px; color:#fff;">
          <img src="${logoUrl}" style="width:120px;" alt="Logo" />
          <h1>Thank You!</h1>
        </div>
        <p>Hi ${name},</p>
        <p>Thanks for contacting <strong>Snapu Photography</strong>! We will reach out to you within 24 hours.</p>
        <blockquote style="border-left:4px solid #667eea; padding-left:10px;">"Capturing your special moments is our passion."</blockquote>
        <p>– The Snapu Team</p>
        <footer style="text-align:center; font-size:12px; color:#888;">&copy; ${year} Snapu Photography</footer>
      </div>
    </body>
    </html>
  `;
}

function generateAlertEmailHtml({ name, email, message, userIp }) {
  const now = new Date().toLocaleString();
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0;">
      <div style="max-width:600px; margin:20px auto; background:#fff; padding:20px; border-radius:10px;">
        <div style="background:#dc3545; color:#fff; text-align:center; padding:20px;">
          <h2>📥 New Contact Submission</h2>
        </div>
        <div style="margin-top:20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong> ${message || 'No message provided'}</p>
          <p><strong>IP Address:</strong> ${userIp}</p>
          <p><strong>Submitted:</strong> ${now}</p>
        </div>
        <footer style="text-align:center; font-size:12px; color:#888; margin-top:20px;">Snapu Photography - Admin Notification</footer>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name || 'Guest';
    const email = body.email || 'no-reply@example.com';
    const message = body.message || '';
    const userIp = request.headers.get('x-forwarded-for') || 'Unknown';

    const confirmationHtml = generateConfirmationEmailHtml(name, 'https://yourdomain.com/logo.png');
    const alertHtml = generateAlertEmailHtml({ name, email, message, userIp });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: '"Snapu Photography" <${process.env.SMTP_USER}>',
      to: email,
      subject: 'Thank you for contacting Snapu!',
      html: confirmationHtml,
    });

    // Send alert email to admin
    await transporter.sendMail({
      from: '"Snapu Website" <${process.env.SMTP_USER}>',
      to: process.env.ADMIN_EMAIL, // <- Set this in .env (e.g., your email)
      subject: '📥 New Contact Submission',
      html: alertHtml,
    });

    return NextResponse.json({ success: true, message: 'Emails sent successfully.' });
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ success: false, error: 'Failed to send emails.' }, { status: 500 });
  }
}
