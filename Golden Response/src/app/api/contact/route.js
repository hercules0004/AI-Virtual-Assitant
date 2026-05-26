import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ipRequestLogMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 3;

export async function POST(req) {
  const clientIp = req.headers.get("x-forwarded-for") || "anonymous";
  const now = Date.now();

  if (!ipRequestLogMap.has(clientIp)) {
    ipRequestLogMap.set(clientIp, []);
  }

  const userTimestamps = ipRequestLogMap.get(clientIp).filter(time => now - time < RATE_LIMIT_WINDOW_MS);
  userTimestamps.push(now);
  ipRequestLogMap.set(clientIp, userTimestamps);

  if (userTimestamps.length > MAX_REQUESTS_PER_WINDOW) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please wait before resubmitting." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ success: false, error: "Required fields are missing." }, { status: 400 });
    }

    const sanitize = (text) => (text || "").replace(/[<>]/g, "");
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanPhone = sanitize(phone);
    const cleanMessage = sanitize(message);

    const submissionTimestamp = new Date().toISOString();

    console.log(`
============================================================
NEW CONTACT FORM SUBMISSION
Timestamp: ${submissionTimestamp}
IP: ${clientIp}
Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone}
Message: ${cleanMessage || "None"}
============================================================
    `);

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"AI Showcase" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
        subject: `New inquiry from ${cleanName}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
            <h2 style="margin-top: 0; color: #111827;">New Contact Submission</h2>
            <p style="color: #4b5563; font-size: 14px;">Via Harshit Kumar's AI Models Showcase.</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb;" />
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr><th style="padding: 6px 0; color: #374151; text-align:left;">Name:</th><td style="color: #6b7280;">${cleanName}</td></tr>
              <tr><th style="padding: 6px 0; color: #374151; text-align:left;">Email:</th><td style="color: #6b7280;">${cleanEmail}</td></tr>
              <tr><th style="padding: 6px 0; color: #374151; text-align:left;">Phone:</th><td style="color: #6b7280;">${cleanPhone}</td></tr>
              <tr><th style="padding: 6px 0; color: #374151; text-align:left;">Time:</th><td style="color: #6b7280;">${submissionTimestamp}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #4f46e5;">
              <strong style="font-size: 13px; color: #374151; display: block; margin-bottom: 4px;">Message:</strong>
              <p style="margin: 0; color: #4b5563; font-size: 14px;">${cleanMessage || "<em>No message provided.</em>"}</p>
            </div>
          </div>
        `,
      });
    } else {
      console.warn("⚠️ SMTP credentials not configured. Email skipped.");
    }

    return NextResponse.json({ success: true, message: "Submission successful" }, { status: 200 });

  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json({ success: false, error: "Server error. Please try again." }, { status: 500 });
  }
}
