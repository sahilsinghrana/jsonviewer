import Tree from "./Tree";
import useViewerStore from "../../store/viewerStore";
import { emitCollapseAll, emitExpandAll } from "./tvEventBus";
import UtilityButton from "@/components/ui/custom/utilitybtn";

import "./index.css";

function TreeView() {
  const parsedJson = useViewerStore((state) => state.json.parsed);
  return (
    <div>
      <div>
        <UtilityButton onClick={emitCollapseAll}>Collapse All</UtilityButton>
        <UtilityButton onClick={emitExpandAll}>Expand All</UtilityButton>
      </div>
      <div className="p-2 pb-6 transition rounded-md outline-2 outline outline-gray-500 m-2 h-[75dvh]  overflow-auto  max-h-[75dvh] sm:max-h-[78dvh]  w-[99%] max-w-[98vw] font-mono leading-normal  whitespace-pre break-normal [tab-size:2] treeView ">
        <Tree objectKey="JSON" value={parsedJson} />
      </div>
    </div>
  );
}

export default TreeView;
