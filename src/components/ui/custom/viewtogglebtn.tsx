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
      className="p-0 rounded-none font-raleway hover:bg-slate-400 w-28 h-6 font-bold uppercase text-xs disabled:opacity-50 disabled:border-b-2 border-orange-500 opacity-95"
    >
      {children}
    </Button>
  );
}

export default ViewerToggleButton;
