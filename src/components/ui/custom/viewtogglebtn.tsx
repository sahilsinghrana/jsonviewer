import { PropsWithChildren } from "react";
import { Button } from "../button";

function ViewerToggleButton({
  children,
  onClick,
  isActive,
}: PropsWithChildren<{
  onClick: () => void;
  isActive: boolean;
}>) {
  return (
    <Button
      disabled={isActive}
      type="button"
      size="sm"
      variant="default"
      onClick={onClick}
      className="p-0 w-28 h-6 font-semibold uppercase text-xs m-0  rounded-none disabled:opacity-95 opacity-40"
    >
      {children}
    </Button>
  );
}

export default ViewerToggleButton;
