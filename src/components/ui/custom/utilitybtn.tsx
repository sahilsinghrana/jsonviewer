import { PropsWithChildren } from "react";
import { Button, ButtonProps } from "../button";
import { cn } from "@/lib/utils";

function UtilityButton(props: PropsWithChildren<ButtonProps>) {
  return (
    <Button
      onClick={props.onClick}
      size="sm"
      variant="outline"
      className={cn(
        "mt-1 mx-1 border-zinc-950/50 dark:border-zinc-400/50  px-3 h-7 py-0 text-xs",
        props.className
      )}
    >
      {props.children}
    </Button>
  );
}

export default UtilityButton;
