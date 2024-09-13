import ContactForm from "@/components/contact-form";
import OrbitingCircles from "@/components/orbiting-circles";
import Social from "@/components/social-icons";
import AnimatedBorderTrail from "@/components/ui/animated-trail-border";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/utils/siteConfig";
import { ArrowLeft, Instagram, Linkedin, Pin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export const metadata: Metadata = {
  title: "I'd love to help - Melwin Af",
  description: "Reach out and I'll get in touch within 1 hour",
  openGraph: {
    images: siteConfig.ogImage,
    type: "website",
    url: `/contact`,
    title: "I'd love to help - Melwin Af",
    description: "Reach out and I'll get in touch within 1 hour",
  },
  twitter: {
    card: "summary_large_image",
    title: "I'd love to help - Melwin Af",
    description: "Reach out and I'll get in touch within 1 hour",
    images: siteConfig.ogImage,
    creator: "@itzTedx_",
  },
  alternates: { canonical: `/contact` },
};

export default function ContactPage() {
  return (
    <div className="relative grid min-h-[92dvh] items-center gap-4 px-3 py-6 pb-20 sm:grid-cols-3 sm:justify-center sm:gap-6 sm:px-6 sm:pb-9 lg:grid-cols-4">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-24 -z-10 md:-top-36"
      />
      <AnimatedBorderTrail
        duration="10s"
        className="h-56 w-full sm:h-full"
        trailSize="sm"
        trailColor="#8b5cf6"
      >
        <section className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-md bg-muted/30 p-4 sm:p-6 lg:p-12">
          <div className="absolute flex h-full w-full flex-col items-center justify-center opacity-30 sm:left-1/2 sm:top-1/2 sm:-translate-x-9 sm:-translate-y-1/2 sm:opacity-100">
            <span className="pointer-events-none relative whitespace-pre-wrap bg-gradient-to-b from-muted-foreground to-muted to-90% bg-clip-text text-center font-monument text-5xl leading-none text-transparent sm:-z-50 sm:-rotate-90">
              Let&apos;s
              <br />
              Connect
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
              className="size-[35px] border-none bg-transparent opacity-80"
              duration={20}
              borderClassName="stroke-primary/60"
              delay={30}
              radius={80}
            >
              <BsWhatsapp />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[20px] border-none bg-transparent opacity-60"
              duration={20}
              borderClassName="stroke-primary/40"
              delay={10}
              radius={120}
              reverse
            >
              <Linkedin />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
              className="size-[20px] border-none bg-transparent opacity-40"
              radius={160}
              borderClassName="stroke-primary/20"
              duration={20}
            >
              <Instagram />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent opacity-25"
              radius={200}
              borderClassName="stroke-primary/5"
              duration={20}
              delay={20}
              reverse
            >
              <Pin className="size-4" />
            </OrbitingCircles>
          </div>
          <Button
            asChild
            variant="outline"
            className="relative z-50 w-fit rounded-full font-bricolage font-medium tracking-tight text-muted-foreground"
          >
            <Link href="/" aria-label="Back to Home page">
              <ArrowLeft className="mr-2 size-4" /> Back to Home
            </Link>
          </Button>
          <Social />
        </section>
      </AnimatedBorderTrail>
      <div className="relative h-full w-full rounded-lg border bg-muted/30 pt-4 backdrop-blur-md sm:col-span-2 lg:col-span-3 lg:pt-9">
        <ContactForm />
      </div>
    </div>
  );
}
