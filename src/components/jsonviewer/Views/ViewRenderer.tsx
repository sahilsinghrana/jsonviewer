"use client";

import TextView from "./TextView";
import TreeView from "./TreeView";

import useViewerStore, { JsonViewerViews } from "../store/viewerStore";

function ViewRenderer() {
  const currentView = useViewerStore((state) => state.currentView);

  if (currentView === JsonViewerViews.TREE) return <TreeView />;
  return <TextView />;
}

export default ViewRenderer;
