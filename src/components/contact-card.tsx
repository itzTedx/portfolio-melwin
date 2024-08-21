'use client'

import { useState } from 'react'
import { TbMailForward } from 'react-icons/tb'

import { isValidEmail } from '@/utils/check-email'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import AnimatedBorderTrail from './ui/animated-trail-border'

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
      <p className="font-medium mb-5 text-accent text-xl uppercase">
        Contact with me
      </p>
      <AnimatedBorderTrail trailSize="sm" trailColor="#8b5cf6">
        <div className="max-w-3xl text-foreground rounded-lg border p-4 lg:p-5">
          <p className="text-sm text-muted-foreground">
            {
              "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
            }
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-base">Your Name: </label>
              <input
                className="bg-input w-full border rounded-md focus:border-accent ring-0 outline-0 transition-all duration-300 px-3 py-2"
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
                className="bg-input w-full border rounded-md focus:border-accent ring-0 outline-0 transition-all duration-300 px-3 py-2"
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
                className="bg-input w-full border rounded-md focus:border-accent ring-0 outline-0 transition-all duration-300 px-3 py-2"
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
