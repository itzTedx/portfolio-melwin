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
  const { setTheme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

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
  );
}
