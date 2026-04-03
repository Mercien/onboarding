import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Post to GHL Webhook if exists
    if (process.env.GHL_WEBHOOK_URL) {
      try {
        await fetch(process.env.GHL_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            source_website: 'Brands Digitals Official',
            lead_type: 'Transformation Discovery Call',
          }),
        });
      } catch (ghlError) {
        console.error('GHL Webhook Error:', ghlError);
      }
    }

    // 2. Internal Notification Email
    await resend.emails.send({
      from: 'System <system@brandsdigitals.com.ng>',
      to: process.env.NOTIFICATION_EMAIL || 'hello@brandsdigitals.com.ng',
      subject: `New Discovery Call Lead: ${data.firstName} ${data.lastName} (${data.company})`,
      html: `
        <div style="font-family: sans-serif; color: #080C16;">
          <h2 style="color: #F28A02;">New Lead Received — Discovery Call</h2>
          <hr />
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${data.company} (${data.role})</p>
          <hr />
          <p><strong>Industry:</strong> ${data.industry}</p>
          <p><strong>Stage:</strong> ${data.businessStage}</p>
          <p><strong>Funding:</strong> ${data.fundingStatus}</p>
          <hr />
          <p><strong>Service:</strong> ${data.serviceInterest}</p>
          <p><strong>Budget:</strong> ${data.monthlyBudget}</p>
          <p><strong>Goals:</strong> ${data.primaryGoals.join(', ')}</p>
          <hr />
          <p><strong>Message:</strong><br />${data.message}</p>
          <p><strong>Referral:</strong> ${data.referralSource}</p>
          <p><strong>Preference:</strong> ${data.contactPreference}</p>
        </div>
      `,
    });

    // 3. Prospect Confirmation Email
    await resend.emails.send({
      from: 'Mercien @ Brands Digitals <hello@brandsdigitals.com.ng>',
      to: data.email,
      subject: `Discovery Call: Re: ${data.company} x Brands Digitals`,
      html: `
        <div style="font-family: sans-serif; color: #080C16; padding: 20px;">
          <h2 style="color: #F28A02;">Thanks for reaching out, ${data.firstName}!</h2>
          <p>We've received your transformation intake for <strong>${data.company}</strong>.</p>
          <p>Our team is currently reviewing your business stage (${data.businessStage}) and goals. We'll reach out via your preferred method (<strong>${data.contactPreference}</strong>) within 24 hours to confirm our Discovery Call time.</p>
          <p>In the meantime, feel free to check out our latest insights: <a href="https://brandsdigitals.com.ng/insights">brandsdigitals.com.ng/insights</a></p>
          <br />
          <p>Talk soon,</p>
          <p><strong>Mercien</strong><br />Founder, Brands Digitals Agency</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Lead Processing Error:', error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
