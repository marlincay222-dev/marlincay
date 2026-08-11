import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, enquiryType, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide all required fields.' },
        { status: 400 }
      );
    }

    // Check if environment variables are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Missing EMAIL_USER or EMAIL_APP_PASSWORD environment variables');
      return NextResponse.json(
        { error: 'Server email configuration is missing.' },
        { status: 500 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Format the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'marlincay222@gmail.com',
      replyTo: email,
      subject: `New Contact Enquiry: ${enquiryType} from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #1a1a1a; border-bottom: 1px solid #eaeaea; padding-bottom: 15px;">Marlin Cay - New Enquiry</h2>
          <p style="color: #4a4a4a; font-size: 16px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p style="color: #4a4a4a; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #d4af37;">${email}</a></p>
          <p style="color: #4a4a4a; font-size: 16px;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p style="color: #4a4a4a; font-size: 16px;"><strong>Enquiry Type:</strong> ${enquiryType}</p>
          <h3 style="color: #1a1a1a; margin-top: 30px; font-size: 18px;">Message:</h3>
          <div style="background-color: #fcfcfc; padding: 20px; border-radius: 6px; color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap; border: 1px solid #f0f0f0;">
            ${message}
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
