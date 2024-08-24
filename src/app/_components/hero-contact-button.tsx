'use client'

import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

import ContactForm from '@/components/contact-form'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useState } from 'react'

export default function ContactButton() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Drawer noBodyStyles open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-background"
        >
          <span className="font-bold flex items-center gap-1 hover:gap-3 text-sm transition-all text-secondary-foreground duration-200 ease-out px-4 md:px-6 py-2.5 rounded-[inherit] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-foreground md:text-lg font-bricolage">
            Contact me
          </span>
        </HoverBorderGradient>
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
  )
}
