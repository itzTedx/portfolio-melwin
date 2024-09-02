import ContactForm from "@/components/contact-form";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative grid min-h-[98dvh] grid-cols-2 items-center justify-center gap-6">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-24 -z-10 md:-top-36"
      />
      <div className="relative h-full w-full">
        <Image src="/melwin.jpg" fill alt="" className="object-cover" />
      </div>
      <div className="container w-full">
        <ContactForm />
      </div>
    </div>
  );
}
