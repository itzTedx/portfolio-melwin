"use client";

import { useState } from "react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ContactForm from "@/components/contact-form";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function ContactButton() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [open, setOpen] = useState<boolean>(false);

  if (isDesktop)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span className="flex items-center gap-1 rounded-[inherit] px-4 py-2.5 font-bricolage text-sm font-bold text-secondary-foreground transition-all duration-200 ease-out hover:gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-foreground md:px-6 md:text-lg">
            Contact me
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Contact me</DialogTitle>
            <DialogDescription>
              {
                "Feel free to contact me with any questions or concerns. I'm open to opportunities that match my skills and interests."
              }
            </DialogDescription>
          </DialogHeader>
          <ContactForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer noBodyStyles open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <span className="flex items-center gap-1 rounded-[inherit] px-4 py-2.5 font-bricolage text-sm font-bold text-secondary-foreground transition-all duration-200 ease-out hover:gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-foreground md:px-6 md:text-lg">
          Contact me
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Contact me</DrawerTitle>
          <DrawerDescription className="text-balance">
            {
              "Feel free to contact me with any questions or concerns. I'm open to opportunities that match my skills and interests."
            }
          </DrawerDescription>
        </DrawerHeader>
        <ContactForm setOpen={setOpen} />
      </DrawerContent>
    </Drawer>
  );
}
