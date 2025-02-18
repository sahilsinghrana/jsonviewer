import Tree from "./Tree";
import useViewerStore from "../../store/viewerStore";
import { emitCollapseAll, emitExpandAll } from "./tvEventBus";
import UtilityButton from "@/components/ui/custom/utilitybtn";

import "./index.css";

function TreeView() {
  const parsedJson = useViewerStore((state) => state.json.parsed);
  return (
    <div>
      <UtilityButton onClick={emitCollapseAll}>Collapse All</UtilityButton>
      <UtilityButton onClick={emitExpandAll}>Expand All</UtilityButton>
      <div className="p-2 pb-6 rounded-md outline-2 outline outline-gray-500 m-2 text-sm h-[82dvh]  overflow-auto max-h-[82dvh]  w-[99%] font-mono leading-normal  whitespace-pre break-normal [tab-size:2] treeView ">
        <Tree objectKey="JSON" value={parsedJson} />
      </div>
    </div>
  );
}

export default TreeView;
