import { cn } from "@/lib/utils";

interface AnimatedTrailProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The duration of the animation.
   * @default "10s"
   */
  duration?: string;

  contentClassName?: string;

  trailColor?: string;
  trailSize?: "sm" | "md" | "lg";
}

const sizes = {
  sm: 5,
  md: 10,
  lg: 20,
};

export default function AnimatedBorderTrail({
  children,
  className,
  duration = "10s",
  trailColor = "purple",
  trailSize = "md",
  contentClassName,
  ...props
}: AnimatedTrailProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative h-fit w-fit overflow-hidden rounded-md bg-border p-px",
        className,
      )}
    >
      <div
        className="absolute inset-0 h-full w-full animate-trail"
        style={{
          // @ts-ignore: Object literal may only specify known properties.
          "--duration": duration ?? "10s",
          "--angle": "0deg",
          background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${
            100 - sizes[trailSize]
          }%, ${trailColor})`,
        }}
      />
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[10px] bg-background",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
