'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel'
import Image from 'next/image'

function CarouselMP() {
  const IMAGES = [
    {
      id: 1,
      src: '/melwin.jpg',
    },
    {
      id: 2,
      src: '/me2.jpg',
    },
    {
      id: 3,
      src: '/me3.jpg',
    },
    {
      id: 4,
      src: '/me4.jpg',
    },
    {
      id: 5,
      src: '/me5.jpg',
    },
  ]

  const ITEMS = new Array(4).fill(null).map((_, index) => index + 1)
  const { index, setIndex, itemsCount } = useCarousel()

  return (
    <>
      <CarouselContent className="relative">
        {IMAGES.map(({ id, src }) => {
          return (
            <CarouselItem key={id} className="p-3">
              <div className="flex aspect-[4/5] items-center justify-center border relative overflow-auto touch-pinch-zoom shadow-lg">
                <Image
                  src={src}
                  fill
                  alt=""
                  className="pointer-events-none rounded-sm"
                />
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <div className="flex w-full justify-center space-x-3 px-6 ">
        {IMAGES.map(({ id, src }) => {
          return (
            <button
              key={id}
              type="button"
              aria-label={`Go to slide ${id}`}
              onClick={() => setIndex(id - 1)}
              className="size-12 relative shadow-lg"
            >
              <Image
                src={src}
                fill
                alt=""
                className="pointer-events-none object-cover rounded border "
              />
            </button>
          )
        })}
      </div>
    </>
  )
}

export function ImageCarousel() {
  return (
    <div className="relative w-full py-2">
      <Carousel>
        <CarouselMP />
      </Carousel>
    </div>
  )
}
