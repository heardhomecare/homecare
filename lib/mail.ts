import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL || 'team@heardhome.com';

const BASE_URL = process.env.NEXTAUTH_URL || 'https://www.heardhome.com';

const EMAIL_STYLE = `
  <style>
    .body { background-color: #f3f4f6; padding: 40px 20px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .card { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .header { background-color: #332885; padding: 40px; text-align: left; }
    .header-text { color: #ffffff; margin: 0; font-size: 14px; font-weight: bold; letter-spacing: 0.2em; text-transform: uppercase; }
    .content { padding: 40px; }
    .heading { color: #332885; font-size: 28px; font-weight: 800; line-height: 1.2; margin-bottom: 24px; }
    .text { color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px; }
    .field-label { color: #9ca3af; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; display: block; }
    .field-value { color: #1f2937; font-size: 16px; margin-bottom: 20px; border-left: 4px solid #332885; padding-left: 12px; }
    .button-container { margin: 32px 0; }
    .button { background-color: #332885; color: #ffffff !important; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; }
    .footer { max-width: 600px; margin: 32px auto 0; text-align: left; color: #9ca3af; font-size: 12px; line-height: 1.5; padding: 0 20px; }
  </style>
`;

export async function sendContactEmail(data: any) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set. Email not sent.');
    return;
  }

  try {
    await resend.emails.send({
      from: `HEARD Home Care <${SENDER_EMAIL}>`,
      to: CONTACT_RECIPIENT,
      subject: `New Contact Form Submission: ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          ${EMAIL_STYLE}
        </head>
        <body>
          <div class="body">
            <div class="card">
              <div class="header">
                <p class="header-text">New Inquiry</p>
              </div>
              <div class="content">
                <h1 class="heading">A new contact form was submitted.</h1>
                
                <div>
                  <span class="field-label">Name</span>
                  <p class="field-value">${data.name}</p>
                </div>
                <div>
                  <span class="field-label">Email</span>
                  <p class="field-value">${data.email}</p>
                </div>
                <div>
                  <span class="field-label">Phone</span>
                  <p class="field-value">${data.phone}</p>
                </div>
                <div>
                  <span class="field-label">City</span>
                  <p class="field-value">${data.city || 'Not provided'}</p>
                </div>
                <div>
                  <span class="field-label">Source</span>
                  <p class="field-value">${data.source || 'Not provided'}</p>
                </div>
                <div>
                  <span class="field-label">Message</span>
                  <p class="field-value">${data.message}</p>
                </div>
                
                <div class="button-container">
                  <a href="${BASE_URL}/admin/dashboard" class="button">View in Dashboard</a>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} HEARD Home Care Admin System</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
  }
}

export async function sendJobApplicationEmail(data: any) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set. Email not sent.');
    return;
  }

  try {
    await resend.emails.send({
      from: `HEARD Home Care <${SENDER_EMAIL}>`,
      to: CONTACT_RECIPIENT,
      subject: `New Job Application: ${data.name} - ${data.jobTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          ${EMAIL_STYLE}
        </head>
        <body>
          <div class="body">
            <div class="card">
              <div class="header">
                <p class="header-text">New Application</p>
              </div>
              <div class="content">
                <h1 class="heading">A new job application was received.</h1>
                
                <div>
                  <span class="field-label">Applicant Name</span>
                  <p class="field-value">${data.name}</p>
                </div>
                <div>
                  <span class="field-label">Position</span>
                  <p class="field-value">${data.jobTitle}</p>
                </div>
                <div>
                  <span class="field-label">Email</span>
                  <p class="field-value">${data.email}</p>
                </div>
                <div>
                  <span class="field-label">Phone</span>
                  <p class="field-value">${data.phone}</p>
                </div>
                <div>
                  <span class="field-label">Experience</span>
                  <p class="field-value">${data.experience} years</p>
                </div>
                <div>
                  <span class="field-label">Cover Letter / Message</span>
                  <p class="field-value">${data.message}</p>
                </div>
                
                <div class="button-container">
                  <a href="${BASE_URL}/admin/careers" class="button">Manage Applications</a>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} HEARD Home Care Admin System</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });
  } catch (error) {
    console.error('Error sending job application email:', error);
  }
}

export async function sendAutoReplyEmail(data: any) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set. Auto-reply not sent.');
    return;
  }

  try {
    const firstName = data.name.split(' ')[0];
    
    await resend.emails.send({
      from: `HEARD Home Care <${SENDER_EMAIL}>`,
      to: data.email,
      subject: `We've received your message, ${firstName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            .body { background-color: #f3f4f6; padding: 40px 20px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
            .card { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .header { background-color: #332885; padding: 40px; text-align: left; }
            .header-text { color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.05em; }
            .content { padding: 40px; }
            .heading { color: #332885; font-size: 28px; font-weight: 800; line-height: 1.2; margin-bottom: 24px; }
            .text { color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px; }
            .button-container { margin: 32px 0; }
            .button { background-color: #332885; color: #ffffff !important; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; }
            .disclaimer { color: #9ca3af; font-size: 14px; margin-top: 32px; border-top: 1px solid #e5e7eb; padding-top: 24px; }
            .footer { max-width: 600px; margin: 32px auto 0; text-align: left; color: #9ca3af; font-size: 12px; line-height: 1.5; padding: 0 20px; }
          </style>
        </head>
        <body>
          <div class="body">
            <div class="card">
              <div class="header">
                <p class="header-text">HEARD</p>
              </div>
              <div class="content">
                <h1 class="heading">We've received your message.</h1>
                <p class="text">Hello ${firstName},</p>
                <p class="text">
                  Thank you for reaching out to HEARD Home Care. We've received your inquiry and our team is already reviewing the details you shared.
                </p>
                <p class="text">
                  One of our care coordinators will contact you shortly to discuss how we can best serve your family's needs.
                </p>
                
                <div class="button-container">
                  <a href="${BASE_URL}" class="button">Visit our website</a>
                </div>
                
                <p class="disclaimer">
                  If you didn't request this or believe this was sent in error, you can safely ignore and delete this email.
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p>
                Flash is a webtool that is a free open source JavaScript framework that can be accessed from a browser or mobile device in a Web browser.
              </p>
              <p>
                <strong>HEARD Home Care</strong><br />
                150 North Wiget Lane STE 100, Walnut Creek, CA 94598<br />
                &copy; ${new Date().getFullYear()} HEARD Home Care. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });
  } catch (error) {
    console.error('Error sending auto-reply email:', error);
  }
}

export async function sendJobAutoReplyEmail(data: any) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set. Auto-reply not sent.');
    return;
  }

  try {
    const firstName = data.name.split(' ')[0];
    
    await resend.emails.send({
      from: `HEARD Home Care <${SENDER_EMAIL}>`,
      to: data.email,
      subject: `Application Received: ${data.jobTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            .body { background-color: #f3f4f6; padding: 40px 20px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
            .card { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .header { background-color: #332885; padding: 40px; text-align: left; }
            .header-text { color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.05em; }
            .content { padding: 40px; }
            .heading { color: #332885; font-size: 28px; font-weight: 800; line-height: 1.2; margin-bottom: 24px; }
            .text { color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px; }
            .button-container { margin: 32px 0; }
            .button { background-color: #332885; color: #ffffff !important; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; }
            .footer { max-width: 600px; margin: 32px auto 0; text-align: left; color: #9ca3af; font-size: 12px; line-height: 1.5; padding: 0 20px; }
          </style>
        </head>
        <body>
          <div class="body">
            <div class="card">
              <div class="header">
                <p class="header-text">HEARD Careers</p>
              </div>
              <div class="content">
                <h1 class="heading">Thanks for applying!</h1>
                <p class="text">Hello ${firstName},</p>
                <p class="text">
                  We've successfully received your application for the <strong>${data.jobTitle}</strong> position. Our hiring team is currently reviewing your background and experience.
                </p>
                <p class="text">
                  If your qualifications match our current needs, we will reach out to you shortly to discuss the next steps in our selection process.
                </p>
                
                <div class="button-container">
                  <a href="${BASE_URL}/careers" class="button">View all openings</a>
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p>
                <strong>HEARD Home Care</strong><br />
                150 North Wiget Lane STE 100, Walnut Creek, CA 94598<br />
                &copy; ${new Date().getFullYear()} HEARD Home Care. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });
  } catch (error) {
    console.error('Error sending job auto-reply email:', error);
  }
}
