"use client";

import ViewerToggleButton from "@/components/ui/custom/viewtogglebtn";

import useViewerStore, { JsonViewerViews } from "../../store/viewerStore";

function TextToggleBtn() {
  const openTextView = useViewerStore((state) => state.openTextView);
  const currentView = useViewerStore((state) => state.currentView);

  return (
    <ViewerToggleButton
      isActive={currentView === JsonViewerViews.TEXT}
      onClick={openTextView}
    >
      Text
    </ViewerToggleButton>
  );
}

export default TextToggleBtn;
