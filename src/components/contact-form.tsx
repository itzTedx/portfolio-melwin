"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import AnimatedBorderTrail from "@/components/ui/animated-trail-border";
import { Button } from "@/components/ui/button";

import { contactSchema, zContactSchema } from "@/types/contact-schema";

import { sendEmail } from "@/actions/send-email";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface ContactFormProps {
  setOpen?: (open: boolean) => void;
}

export default function ContactForm({ setOpen }: ContactFormProps) {
  const [loading, setLoading] = useState(false);

  const form = useForm<zContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { execute, status } = useAction(sendEmail, {
    onExecute: () => {
      setLoading(true);
    },
    onSuccess: ({ data }) => {
      if (data?.success) {
        toast.success("Email sent!", {
          description: `Thanks for reaching out, ${data.success.name}`,
        });
        setLoading(false);
      }
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
      setLoading(false);
    },
  });

  async function onSubmit(values: zContactSchema) {
    execute(values);

    if (setOpen) setOpen(false);
    toast.success(`Thanks ${values.name}!`, {
      description: `For reaching out me, `,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-3 pb-4">
        <AnimatedBorderTrail
          trailSize="sm"
          trailColor="#8b5cf6"
          className="w-full"
        >
          <div className="space-y-5 rounded-lg p-4 pb-6 text-foreground lg:p-5">
            <div className="mb-9">
              <h1 className="font-bricolage text-4xl font-bold">Contact Me</h1>
              <p>
                Write me a few words about your project. I&apos;ll get back to
                you within 1 hour
              </p>
            </div>
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
                disabled={!form.formState.isValid}
                type="submit"
                className="w-full rounded-full py-3"
              >
                {loading ? <Loader className="animate-spin" /> : "Send Message"}
              </Button>
            </div>
          </div>
        </AnimatedBorderTrail>
      </form>
    </Form>
  );
}
