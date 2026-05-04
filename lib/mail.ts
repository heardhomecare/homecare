import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendContactEmail(data: any) {
  if (!process.env.EMAIL_SERVER_USER) {
    console.warn('Email credentials not set. Email not sent.');
    return;
  }

  try {
    await transporter.sendMail({
      from: `"HEARD Home Care" <${process.env.EMAIL_SERVER_USER}>`,
      to: 'team@heardhome.com',
      subject: `New Contact Form Submission: ${data.name}`,
      html: `
        <div style="font-family: serif; color: #332885; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 20px;">
          <h1 style="border-bottom: 2px solid #332885; padding-bottom: 10px;">New Inquiry</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>City:</strong> ${data.city}</p>
          <p><strong>Source:</strong> ${data.source}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; font-style: italic;">
            ${data.message}
          </div>
          <p style="font-size: 10px; color: #999; margin-top: 20px;">
            Text Opt-in: ${data.textOptIn ? 'Yes' : 'No'}
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
  }
}

export async function sendJobApplicationEmail(data: any) {
  if (!process.env.EMAIL_SERVER_USER) {
    console.warn('Email credentials not set. Email not sent.');
    return;
  }

  try {
    await transporter.sendMail({
      from: `"HEARD Home Care" <${process.env.EMAIL_SERVER_USER}>`,
      to: 'team@heardhome.com',
      subject: `New Job Application: ${data.name} - ${data.jobTitle}`,
      html: `
        <div style="font-family: serif; color: #332885; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 20px;">
          <h1 style="border-bottom: 2px solid #332885; padding-bottom: 10px;">New Application</h1>
          <p><strong>Applicant Name:</strong> ${data.name}</p>
          <p><strong>Position:</strong> ${data.jobTitle}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Experience:</strong> ${data.experience} years</p>
          <p><strong>Cover Letter / Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px;">
            ${data.message}
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending job application email:', error);
  }
}
