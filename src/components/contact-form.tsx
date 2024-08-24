'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import AnimatedBorderTrail from '@/components/ui/animated-trail-border'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { contactSchema, zContactSchema } from '@/types/contact-schema'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface ContactFormProps {
  setOpen?: (open: boolean) => void | ''
}

export default function ContactForm({ setOpen }: ContactFormProps) {
  // 1. Define your form.
  const form = useForm<zContactSchema>({
    mode: 'onBlur',
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: zContactSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    if (setOpen) setOpen(false)

    toast.success(`Thanks for contacting me ${values.name}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-3 pb-4 w-full">
        <AnimatedBorderTrail
          trailSize="sm"
          trailColor="#8b5cf6"
          className="w-full"
        >
          <div className="space-y-5 p-4 pb-6 rounded-lg text-foreground lg:p-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@mail.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-32"
                      {...field}
                      placeholder="Type something here"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex">
              <Button
                disabled={!form.formState.isValid || !form.formState.isDirty}
                type="submit"
                className="w-full"
              >
                Send Message
              </Button>
            </div>
          </div>
        </AnimatedBorderTrail>
      </form>
    </Form>
  )
}
