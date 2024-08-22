import { cn } from '@/lib/utils'
import { personalData } from '@/utils'
import Link from 'next/link'
import React from 'react'
import { FaBehanceSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

export default function Social({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-full gap-4 md:gap-6',
        className
      )}
    >
      <Link
        href={personalData.instagram}
        target="_blank"
        className="transition-all duration-300 text-foreground hover:scale-125"
      >
        <FaInstagramSquare className="rounded-md size-7" />
      </Link>
      <Link
        href={personalData.linkedIn}
        target="_blank"
        className="transition-all duration-300 text-foreground hover:scale-125"
      >
        <FaLinkedin className=" size-7" />
      </Link>
      <Link
        href={personalData.instagram}
        target="_blank"
        className="transition-all duration-300 text-foreground hover:scale-125"
      >
        <FaBehanceSquare className=" size-7" />
      </Link>
    </div>
  )
}
