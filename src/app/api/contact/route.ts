import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const { name, email, phone, company, service, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    //  SEND EMAIL VIA NODEMAILER ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // The sender MUST be your authenticated email
      to: process.env.EMAIL_USER,   // Send it directly to yourself
      replyTo: email,               // When you click "Reply" in Gmail, it goes to the client
      subject: `[Code Warriors] New Lead: ${service || "General Inquiry"}`,
      text: `You have received a new message from your website.\n\nFrom: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nCompany: ${company || "Not provided"}\nService Interest: ${service || "Not provided"}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server Error", details: String(error) }, { status: 500 });
  }
}