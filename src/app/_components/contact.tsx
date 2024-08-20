// @flow strict
import ContactWithoutCaptcha from '@/components/contact-card'
import { personalData } from '@/utils'
import Link from 'next/link'
import { BiLogoLinkedin } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoGithub, IoMdCall } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactWithoutCaptcha />

        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9 text-foreground">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-foreground p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-background cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-foreground p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-background cursor-pointer"
                size={36}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-foreground p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-background cursor-pointer"
                size={36}
              />
              <span>{personalData.address}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
