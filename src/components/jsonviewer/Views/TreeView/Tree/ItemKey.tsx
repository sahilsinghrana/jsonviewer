import ExpandToggleBtn from "@/components/ui/custom/ExpandToggleBtn";
import SelectableTextOnDc from "@/components/ui/custom/SelectableTextOnDC";

function Itemkey({ Icon, objectKey = "", isExpanded, toggleExpanded }) {
  return (
    <div className="flex font-semibold">
      {typeof toggleExpanded === "function" && (
        <ExpandToggleBtn isExpanded={isExpanded} onClick={toggleExpanded} />
      )}
      {Icon}
      <SelectableTextOnDc text={objectKey} />
    </div>
  );
}

export default Itemkey;
