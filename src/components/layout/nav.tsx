'use client'

import { perspective, slideIn } from '@/utils/anim'
import { footerLinks, links } from '@/utils/nav-links'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="flex flex-col justify-between p-[100px_40px_50px_40px] h-full">
      <div className="flex flex-col gap-4">
        {links.map((link, i) => {
          const { title, href } = link
          return (
            <div
              key={`b_${i}`}
              className="[perspective:120px] [perspective-origin:bottom]"
            >
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={href} className="text-5xl text-black">
                  {title}
                </Link>
              </motion.div>
            </div>
          )
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              className="w-1/2 mt-1 text-background"
            >
              {title}
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
