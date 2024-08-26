import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="flex min-h-[98dvh] items-center justify-center gap-y-6 px-6">
      <div className="w-1/2">
        <ContactForm />
      </div>
    </div>
  );
}
