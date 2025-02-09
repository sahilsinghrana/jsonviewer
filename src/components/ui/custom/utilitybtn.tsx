import { PropsWithChildren } from "react";
import { Button, ButtonProps } from "../button";

function UtilityButton(props: PropsWithChildren<ButtonProps>) {
  return (
    <Button
      onClick={props.onClick}
      size="sm"
      variant="outline"
      className="m-1 p-1 h-5 py-0 text-xs"
    >
      {props.children}
    </Button>
  );
}

export default UtilityButton;
