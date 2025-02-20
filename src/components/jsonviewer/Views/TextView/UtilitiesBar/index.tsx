import VerticalSeparator from "./VerticalSeparator";

import CopyBtn from "./UtilBtn/CopyBtn";
import PasteBtn from "./UtilBtn/PasteBtn";
import ClearBtn from "./UtilBtn/ClearBtn";
import FormatJsonUtilBtn from "./UtilBtn/FormatBtn";
import RemoveWhiteSpaceBtn from "./UtilBtn/RemoveWhiteSpaceBtn";

function UtilitiesBar() {
  return (
    <div className="flex items-center mb-1 flex-wrap">
      <PasteBtn />
      <CopyBtn />
      <VerticalSeparator />
      <FormatJsonUtilBtn />
      <RemoveWhiteSpaceBtn />
      <VerticalSeparator />
      <ClearBtn />
      {/* <LoadFileBtn /> */}
    </div>
  );
}

export default UtilitiesBar;
