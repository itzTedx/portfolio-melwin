"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "./modal";

export function FullScreenModal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleOpenChange = () => {
    setOpen(false);
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={open} onOpenChange={handleOpenChange}>
      <DialogOverlay onClick={handleOpenChange}>
        <DialogContent className={cn(className)}>{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
