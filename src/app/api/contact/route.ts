import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // your Gmail
      pass: process.env.GMAIL_PASS, // App Password
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER, // your Gmail inbox
      subject: subject || "New Contact Form Message",
      text: message,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Subject:</b> ${subject}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Error sending email:", err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
