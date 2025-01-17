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
      description: `will get back to you soon `,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full px-3 pb-4 sm:max-w-screen-sm"
      >
        {/* <AnimatedBorderTrail
          trailSize="sm"
          trailColor="#8b5cf6"
          className="w-full"
        > */}
        <div className="space-y-5 rounded-lg p-4 text-foreground sm:p-6 lg:p-5">
          <header className="pb-4 lg:pb-9">
            <h1 className="mb-3 font-bricolage text-4xl font-bold">
              I&apos;d love to help
            </h1>
            <p className="text-muted-foreground">
              Reach out and I&apos;ll get in touch within 1 hour.
            </p>
          </header>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} autoFocus />
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
                    className="min-h-40"
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
        {/* </AnimatedBorderTrail> */}
      </form>
    </Form>
  );
}
