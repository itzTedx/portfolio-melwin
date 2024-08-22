'use client'

import { personalData } from '@/utils'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Content() {
  return (
    <>
      <footer className="grid w-full h-full px-4 py-4 bg-foreground lg:py-8 lg:px-9 md:grid-cols-2 lg:grid-cols-3 text-background gap-x-6 ">
        <ImageSection />
        <Connect />
        <div className="py-2 mt-auto">
          &copy; Portfolio of <span className="text-primary">Melwin Af</span>
        </div>
      </footer>
    </>
  )
}

const ImageSection = () => {
  return (
    <div className="aspect-[16/12] w-full sm:aspect-[5/4] lg:aspect-auto relative overflow-hidden rounded-lg group">
      <Image
        src={personalData.profile}
        fill
        alt="Melwin af"
        className="object-cover transition-all duration-700 cursor-pointer grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
    </div>
  )
}

const Connect = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className="flex flex-col justify-between lg:col-span-2">
      <div className="relative flex md:justify-between lg:justify-start lg:items-end">
        <div className="text-[calc(7.143vw_+_1.071rem)] leading-[calc(7.143vw_+_1.071rem)] w-[7ch]">
          {`LET'S CONNECT`}
        </div>
        <div className="absolute -top-1 md:top-0 right-3">
          <Button
            variant="shimmer"
            className="flex items-center font-bold uppercase transition-all font-monument bg-amber-600 text-amber-950 hover:scale-105"
          >
            <span className="mr-2 uppercase rounded-full bg-amber-900 size-2" />
            Get in touch
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2 lg:flex-row sm:gap-0 lg:gap-3">
        <Link
          href="/"
          className="transition-colors md:text-xl hover:text-muted-foreground"
        >
          Instagram
        </Link>
        <Link
          href="/"
          className="transition-colors md:text-xl hover:text-muted-foreground"
        >
          Linkedin
        </Link>
        <Link
          href="/"
          className="transition-colors md:text-xl hover:text-muted-foreground"
        >
          Behance
        </Link>
      </div>
    </div>
  )
}
