'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schemas'
// import ContactFormEmail from '@/components/contact-form-email'

// import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
// type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, subject, message } = result.data
    const { data, error } = await resend.emails.send({
        from: 'Yusuf <yusssuf0786@gmail.com>',
        to: ['yusssuf0786@gmail.com'], 
        replyTo: [email], 
        // cc: ['yusssuf0786@gmail.com'],
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        // react: await ContactFormEmail({ name, email, subject, message })
    });

    console.log('resend response', data, error);

    if (!data || error) {
      throw new Error(error?.message || 'Failed to send email')
    }

    return { success: true }
  } catch (error) {
    console.error('Email error', error);
    return { error }
  }
}