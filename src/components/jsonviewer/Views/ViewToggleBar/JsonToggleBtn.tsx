"use client";

import ViewerToggleButton from "@/components/ui/custom/viewtogglebtn";
import callFnWithErrToastHandler from "@/utils/callFnWithErrToastHandler";

import useViewerStore, { JsonViewerViews } from "../../store/viewerStore";

function JsonToggleBtn() {
  const openJsonView = useViewerStore((state) => state.openJsonView);
  const currentView = useViewerStore((state) => state.currentView);

  function handleClick() {
    callFnWithErrToastHandler(openJsonView);
  }

  return (
    <ViewerToggleButton
      isActive={currentView === JsonViewerViews.TREE}
      onClick={handleClick}
    >
      Json
    </ViewerToggleButton>
  );
}

export default JsonToggleBtn;
