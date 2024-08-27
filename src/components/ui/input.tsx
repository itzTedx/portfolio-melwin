import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const divRef = React.useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
      if (!divRef.current || isFocused) return;

      const div = divRef.current;
      const rect = div.getBoundingClientRect();

      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };

    const handleMouseEnter = () => {
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    return (
      <div className="relative">
        <input
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors duration-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-[#8b5cf6] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <input
          ref={divRef}
          disabled
          style={{
            border: "1px solid #8b5cf6",
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          }}
          aria-hidden="true"
          className="border-[#8b5cf6)] pointer-events-none absolute left-0 top-0 z-10 h-10 w-full cursor-default rounded-md border bg-[transparent] p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none"
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
