'use server'

import { Resend } from 'resend'

// Use the API key directly from their example
const resend = new Resend('re_ST79oLeo_3HB8yo67BAnsntVX9F8KJf9f')

const CONTACT_EMAILS = {
  general: 'camden.wierengo@gmail.com',
  support: 'camden.wierengo@gmail.com'
}

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const subject = formData.get('subject')
  const message = formData.get('message')

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['info@quantadevelopment.com', 'support@quantadevelopment.com'],
      replyTo: email?.toString(),
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    console.log('Email result:', result)
    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error: 'Failed to send message' }
  }
} 