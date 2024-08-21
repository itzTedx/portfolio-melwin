import Link from 'next/link'
import Social from '../social-icons'
import Content from './footer-content'

function Footer() {
  return (
    <div
      className="relative h-[80dvh] md:h-[350px] lg:h-[450px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 h-[80dvh] md:h-[350px] lg:h-[450px] w-full">
        <Content />
      </div>
    </div>
  )
}

export default Footer

{
  /* <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-px w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            Portfolio by{' '}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/melwinaf/"
              className="text-[#16f2b3]"
            >
              Melwin Af
            </Link>
          </p>
          <Social />
        </div>
      </div>
    </div> */
}
