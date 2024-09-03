import LenisProvider from "@/provider/lenis-provider";
import { ThemeProvider } from "@/provider/theme-provider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LenisProvider />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
