'use client'

import { motion } from 'framer-motion'

interface NavButtonProps {
  isActive: boolean
  toggleMenu: () => void
}

export default function NavButton({ isActive, toggleMenu }: NavButtonProps) {
  return (
    <div className="absolute top-0 right-0 w-24 h-10 overflow-hidden rounded-3xl cursor-pointer z-[999999999999999]">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="w-full h-full bg-[#c9fd74]"
          onClick={() => {
            toggleMenu()
          }}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className="w-full h-full bg-accent"
          onClick={() => {
            toggleMenu()
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  )
}

interface PerspectiveProps {
  label: string
}

function PerspectiveText({ label }: PerspectiveProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-ful [transform-style:preserve-3d] [transition:transform_0.75s_cubic-bezier(0.76,_0,_0.24,_1)] hover:[transform:rotateX(90deg)] text-background ">
      <p className="pointer-events-none uppercase [transition:all_0.75s_cubic-bezier(0.76,_0,_0.24,_1)] group-hover:[transform:translateY(-100%)] group-hover:opacity-0 m-0">
        {label}
      </p>
      <p className="pointer-events-none uppercase [transition:all_0.75s_cubic-bezier(0.76,_0,_0.24,_1)] absolute origin-[bottom_center] [transform:rotateX(-90deg)_translateY(9px)] opacity-0 group-hover:opacity-100 text-[##c9fd74] m-0">
        {label}
      </p>
    </div>
  )
}
