'use server'

import { contactSchema, type zContactSchema } from '@/types/contact-schema'
import { Resend } from 'resend'
import { createSafeActionClient } from 'next-safe-action'

const resend = new Resend(process.env.RESEND_API_KEY)
const action = createSafeActionClient()

export const sendEmail = action
  .schema(contactSchema)
  .action(async ({ parsedInput }) => {
    await sendEnquiryToEmail(parsedInput)
    return { success: parsedInput }
  })

async function sendEnquiryToEmail(values: zContactSchema) {
  const { name, email, message } = values

  const { data, error } = await resend.emails.send({
    from: 'Portfolio <onboarding@bsi-usa.com>',
    replyTo: email,
    to: 'melwinafs@gmail.com',
    subject: `Enquiry from ${name}`,
    text: message,
  })

  if (error) {
    console.log(error)
  }

  return data
}
