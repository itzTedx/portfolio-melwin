'use client'

import { useState } from 'react'
import { TbMailForward } from 'react-icons/tb'

import AnimatedBorderTrail from '@/components/ui/animated-trail-border'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { isValidEmail } from '@/utils/check-email'

function ContactWithoutCaptcha() {
  const [error, setError] = useState({ email: false, required: false })
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: '',
  })

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false })
    }
  }

  return (
    <div>
      <p className="mb-5 text-xl font-medium font-bricolage text-accent">
        Contact me
      </p>
      <AnimatedBorderTrail trailSize="sm" trailColor="#8b5cf6">
        <div className="max-w-3xl p-4 border rounded-lg text-foreground lg:p-5">
          <p className="text-sm text-muted-foreground">
            {
              "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
            }
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex flex-col gap-2">
              <label className="text-base">Your Name: </label>
              <input
                className="w-full px-3 py-2 transition-all duration-300 border rounded-md bg-input focus:border-accent ring-0 outline-0"
                type="text"
                maxLength={100}
                required={true}
                onChange={(e) =>
                  setUserInput({ ...userInput, name: e.target.value })
                }
                onBlur={checkRequired}
                value={userInput.name}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Email: </label>
              <input
                className="w-full px-3 py-2 transition-all duration-300 border rounded-md bg-input focus:border-accent ring-0 outline-0"
                type="email"
                maxLength={100}
                required={true}
                value={userInput.email}
                onChange={(e) =>
                  setUserInput({ ...userInput, email: e.target.value })
                }
                onBlur={() => {
                  checkRequired()
                  setError({ ...error, email: !isValidEmail(userInput.email) })
                }}
              />
              {error.email && (
                <p className="text-sm text-red-400">
                  Please provide a valid email!
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Message: </label>
              <textarea
                className="w-full px-3 py-2 transition-all duration-300 border rounded-md bg-input focus:border-accent ring-0 outline-0"
                maxLength={500}
                name="message"
                required={true}
                onChange={(e) =>
                  setUserInput({ ...userInput, message: e.target.value })
                }
                onBlur={checkRequired}
                rows={4}
                value={userInput.message}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              {error.required && (
                <p className="text-sm text-red-400">
                  Email and Message are required!
                </p>
              )}
              <Button
                variant={'shimmer'}
                size={'lg'}
                className={cn(
                  'items-center gap-1 hover:gap-3 uppercase text-sm transition-all text-foreground bg-primary ease-out'
                )}
                role="button"
              >
                <span>Send Message</span>
                <TbMailForward className="mt-1" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedBorderTrail>
    </div>
  )
}

export default ContactWithoutCaptcha
