import nodemailer from "nodemailer";

const email = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;

// Updated for Gmail
export const transporter = nodemailer.createTransport({
  service: "gmail", 
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password, 
  },
});

export const mailOptions = {
  from: email,
  // Change this to the email address where you want to receive the messages:
  to: "codewarriorstech@gmail.com", 
};

export async function sendMessage(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}): Promise<string> {

  const { name, email, phone, company, service, message } = data;

  if (!name || !email || !message) {
    throw Error("Name, Email and Message fields are required");
  }

  const messageData = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone || 'Not provided'}
    Company: ${company || 'Not provided'}
    Service Interest: ${service || 'Not provided'}
   
    Message:
    ${message}
  `;

  console.log("Preparing to send via Gmail:", messageData);

  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      replyTo: email, // Adds a reply-to header so you can just hit "Reply" in Gmail!
      subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${service || 'Not provided'}</p>
          <br/>
          <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
      text: messageData,
    });

    return `Message sent: ${info.messageId}`;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to send message: ${error.message}`);
    } else {
      throw new Error("Failed to send message: Unknown error");
    }
  }
}