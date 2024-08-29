"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { GrSystem } from "react-icons/gr";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  interface VarCss extends React.CSSProperties {
    "--width": number;
    "--deg": number;
    "--duration": number;
  }

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? "end" : "center"}
        className="z-[9999999999] space-y-2 bg-white/50 p-2 backdrop-blur dark:bg-gray-950/50"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex cursor-pointer gap-2 px-3 py-2 hover:bg-primary/20"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex cursor-pointer gap-2 px-3 py-2 hover:bg-primary/20"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex cursor-pointer gap-2 px-3 py-2 hover:bg-primary/20"
        >
          <GrSystem className="h-[1.2rem] w-[1.2rem]" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <>
    //   <div className="toggle-cont">
    //     <input
    //       className="toggle-input"
    //       id="toggle"
    //       name="toggle"
    //       type="checkbox"
    //     />
    //     <label className="toggle-label" htmlFor="toggle">
    //       <div className="cont-icon">
    //         <span
    //           style={{ "--width": 2, "--deg": 25, "--duration": 11 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 100, "--duration": 18 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 280, "--duration": 5 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 200, "--duration": 3 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 30, "--duration": 20 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 300, "--duration": 9 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 250, "--duration": 4 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 210, "--duration": 8 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 100, "--duration": 9 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 15, "--duration": 13 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 75, "--duration": 18 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 65, "--duration": 6 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 50, "--duration": 7 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 320, "--duration": 5 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 220, "--duration": 5 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 215, "--duration": 2 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 135, "--duration": 9 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 45, "--duration": 4 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 78, "--duration": 16 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 89, "--duration": 19 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 65, "--duration": 14 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 2, "--deg": 97, "--duration": 1 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 174, "--duration": 10 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <span
    //           style={{ "--width": 1, "--deg": 236, "--duration": 5 } as VarCss}
    //           className="sparkle"
    //         ></span>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 30 30"
    //           className="icon"
    //         >
    //           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //         </svg>
    //       </div>
    //     </label>
    //   </div>
    // </>
  );
}
