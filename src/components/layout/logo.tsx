import Image from "next/image";

type LogoVariantProps = "icon" | "fullLogo" | "badge";

interface LogoProps {
  variant?: LogoVariantProps;
  className?: string;
}

const Logo = ({ variant, className }: LogoProps) => {
  switch (variant) {
    case "icon":
      return (
        <div className={className}>
          <Image
            src="/logo/icon-dark.svg"
            fill
            alt="Melwin's Logo"
            className="hidden object-contain dark:block"
            role="logo"
            title="Melwin's Logo"
            aria-hidden
          />
          <Image
            src="/logo/icon-light.svg"
            fill
            alt="Melwin's Logo"
            className="block object-contain dark:hidden"
            role="logo"
            title="Melwin's Logo"
            aria-hidden
          />
        </div>
      );
    case "fullLogo":
      return (
        <div className={className}>
          <Image
            src="/logo/full-logo-dark.svg"
            fill
            alt="Melwin's Logo"
            className="hidden object-contain dark:block"
            role="logo"
            title="Melwin's Logo"
            aria-hidden
          />
          <Image
            src="/logo/full-logo-light.svg"
            fill
            alt="Melwin's Logo"
            className="block object-contain dark:hidden"
            role="logo"
            title="Melwin's Logo"
            aria-hidden
          />
        </div>
      );
    case "badge":
      return (
        <div className={className}>
          <Image
            src="/logo/badge-dark.svg"
            fill
            alt="Melwin's Logo"
            className="hidden object-contain dark:block"
            role="logo"
            title="Melwin's Logo"
            aria-hidden
          />
          <Image
            src="/logo/badge-light.svg"
            fill
            alt="Melwin's Logo"
            className="block object-contain dark:hidden"
            role="logo"
            title="Melwin's Logo"
            aria-hidden
          />
        </div>
      );
    default:
      return (
        <div className={className}>
          <Image
            src="/logo/logo-dark.svg"
            fill
            alt="Melwin's Logo"
            className="hidden object-contain dark:block"
            role="logo"
            title="Melwin's Logo"
            aria-hidden
          />
          <Image
            src="/logo/logo-light.svg"
            fill
            alt="Melwin's Logo"
            className="block object-contain dark:hidden"
            role="logo"
            title="Melwin's Logo"
            aria-hidden
          />
        </div>
      );
  }
};

export default Logo;
