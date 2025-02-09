"use client";

import { useTheme } from "next-themes";

import { MonitorCog, Moon, Sun } from "lucide-react";

import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-2 rounded-full h-10 w-10"
            onClick={() =>
              setTheme(
                theme === "dark"
                  ? "light"
                  : theme === "light"
                  ? "system"
                  : "dark"
              )
            }
          >
            {theme === "light" ? (
              <Sun className="h-5 w-5 animate-in  duration-300  slide-in-from-top zoom-in animate-out zoom-out slide-out-to-bottom spin-in-2" />
            ) : theme === "dark" ? (
              <Moon className="h-5 w-5 animate-in duration-300 slide-in-from-top zoom-in animate-out zoom-out slide-out-to-bottom " />
            ) : (
              <MonitorCog className="h-5 w-5 animate-in duration-300 slide-in-from-top zoom-in animate-out zoom-out slide-out-to-bottom" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">Current theme - {theme}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ThemeToggle;
