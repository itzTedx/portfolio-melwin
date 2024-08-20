// components/BreakpointIndicator.js

const isDevelopment = process.env.NODE_ENV === 'development'

const BreakpointIndicator = () => {
  if (!isDevelopment) {
    return null // Hide the indicator in production
  }

  return (
    <div className="fixed bottom-2 right-2 size-7 grid place-content-center bg-primary text-sm font-bold text-primary-foreground rounded-full z-[999999] font-mono">
      <div className="sm:hidden">XS</div>
      <div className="hidden sm:block md:hidden">SM</div>
      <div className="hidden md:block lg:hidden">MD</div>
      <div className="hidden lg:block xl:hidden">LG</div>
      <div className="hidden xl:block">XL</div>
    </div>
  )
}

export default BreakpointIndicator
