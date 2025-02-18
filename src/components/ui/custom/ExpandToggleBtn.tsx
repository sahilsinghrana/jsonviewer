import { SquareMinus, SquarePlus } from "lucide-react";

function ExpandToggleBtn({
  isExpanded,
  onClick,
}: {
  isExpanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="pt-1"
    >
      {isExpanded ? (
        <SquareMinus size={14} strokeWidth={1.25} absoluteStrokeWidth />
      ) : (
        <SquarePlus size={14} strokeWidth={1.25} absoluteStrokeWidth />
      )}
    </button>
  );
}

export default ExpandToggleBtn;
