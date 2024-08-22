import { Cookie, Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'

const cookie = Cookie({
  variable: '--font-cookie',
  subsets: ['latin'],
  weight: ['400'],
})
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
})
const monument = localFont({
  src: [
    {
      path: './MonumentExtended-Light.woff2',
      weight: '300',
    },
    {
      path: './MonumentExtended-Regular.woff2',
      weight: '400',
    },
    {
      path: './MonumentExtended-Bold.woff2',
      weight: '700',
    },
    {
      path: './MonumentExtended-Ultrabold.woff2',
      weight: '800',
    },
  ],
  variable: '--font-monument',
})

export { cookie, plusJakarta, monument }
