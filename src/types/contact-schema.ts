import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Please enter your name' })
    .max(50, { message: 'There is no fxcking way your name this long' }),
  email: z.string().email(),
  message: z.string().min(2, { message: 'Write something..' }).max(256),
})

export type zContactSchema = z.infer<typeof contactSchema>
