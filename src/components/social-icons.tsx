import { personalData } from '@/utils'
import Link from 'next/link'
import React from 'react'
import { FaBehanceSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

export default function Social() {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <Link
        href={personalData.instagram}
        target="_blank"
        className="transition-all text-foreground hover:scale-125 duration-300"
      >
        <FaInstagramSquare className="rounded-md size-7" />
      </Link>
      <Link
        href={personalData.linkedIn}
        target="_blank"
        className="transition-all text-foreground hover:scale-125 duration-300"
      >
        <FaLinkedin className=" size-7" />
      </Link>
      <Link
        href={personalData.instagram}
        target="_blank"
        className="transition-all text-foreground hover:scale-125 duration-300"
      >
        <FaBehanceSquare className=" size-7" />
      </Link>
    </div>
  )
}
