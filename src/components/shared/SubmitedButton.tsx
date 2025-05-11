"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface iAppProps {
  text: string;
  isSubmitting?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

function SubmitedButton({ text, isSubmitting, className, variant }: iAppProps) {
  return (
    <Button
      disabled={isSubmitting}
      variant={variant}
      className={cn("w-fit", className)}
      type="submit"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Please wait
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default SubmitedButton;
