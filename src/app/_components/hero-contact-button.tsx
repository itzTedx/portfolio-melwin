'use client'

import { useState } from 'react'

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function ContactButton() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [open, setOpen] = useState<boolean>(false)

  if (isDesktop)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-background"
          >
            <span className="font-bold flex items-center gap-1 hover:gap-3 text-sm transition-all text-secondary-foreground duration-200 ease-out px-4 md:px-6 py-2.5 rounded-[inherit] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-foreground md:text-lg font-bricolage">
              Contact me
            </span>
          </HoverBorderGradient>
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
    )

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
