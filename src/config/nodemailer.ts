import nodemailer from "nodemailer";

const email = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email,
  to: "codewarriors02@gmail.com",
};

export async function sendMessage(data: {
  name: string;
  message: string;
  email: string;
  phone: string;
}): Promise<string> {

  const { name, message, email, phone } = data;

  if (!name || !email || !message) {
    throw Error("Name,Email and Message fields are required");
  }
  // Compose email message
  const messageData = `
    Name: ${name}
    Message: ${message}
    Email: ${email}
    Phone: ${phone}
   
  `;

  console.log(messageData);
  // Send email using transporter and mailOptions
  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      subject: "New Contact Form Submission",
      html: `<h1>New Contact Form Submission</h1><p>${messageData}</p>`,
      text: message,
    });

    return `Message sent: ${info.messageId}`;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to send message: ${error.message}`);
    } else {
      throw new Error(`Failed to send message: Unknown error occurred`);
    }
  }
}
