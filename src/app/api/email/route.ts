import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();
  if (!email || !email.length) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }
  if (!message || !message.length) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  try {
    await transporter.sendMail({
      from: `"My portfolio website form" <${process.env.EMAIL}>`,
      to: "kopanchuke@gmail.com",
      subject: "💼 Work | Landing Page",
      text: `From: ${email}\n\nMessage:\n${message}`,
    });
    return NextResponse.json(
      { error: "Email was delivered successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unsuccessful email sending" },
      { status: 400 }
    );
  }
}
