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
      <footer className="bg-foreground py-4 lg:py-8 px-4 lg:px-9 h-full w-full grid md:grid-cols-2 lg:grid-cols-3 text-background gap-x-6 ">
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
        className="transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 cursor-pointer object-cover"
      />
    </div>
  )
}

const Connect = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className="lg:col-span-2 flex flex-col justify-between">
      <div className="flex md:justify-between lg:justify-start lg:items-end relative">
        <div className="text-[calc(7.143vw_+_1.071rem)] leading-[calc(7.143vw_+_1.071rem)] w-[7ch]">
          LETS CONNECT
        </div>
        <div className="absolute xl:static -top-1 md:top-0 right-0">
          <Button
            variant="shimmer"
            size={'lg'}
            className="uppercase bg-background hover:scale-105 transition-all"
          >
            <span className="size-2 bg-white rounded-full mr-2 uppercase" />
            Get in touch
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row py-2 gap-2 sm:gap-0 lg:gap-3">
        <Link
          href="/"
          className="md:text-xl hover:text-muted-foreground transition-colors"
        >
          Instagram
        </Link>
        <Link
          href="/"
          className="md:text-xl hover:text-muted-foreground transition-colors"
        >
          Linkedin
        </Link>
        <Link
          href="/"
          className="md:text-xl hover:text-muted-foreground transition-colors"
        >
          Behance
        </Link>
      </div>
    </div>
  )
}
