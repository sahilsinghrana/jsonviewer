import { IViewerState, JsonViewerViews } from "../viewerStore";

function viewSlice(set: any) {
  return {
    currentView: JsonViewerViews.TEXT,
    openTextView: () => set({ currentView: JsonViewerViews.TEXT }),
    openJsonView: () => setJsonViewState(set),
  };
}

export default viewSlice;

function setJsonViewState(set: any) {
  set((state: IViewerState) => {
    const stringJson = state.json.string;
    if (!stringJson) return { currentView: JsonViewerViews.TEXT };
    state.format.formatJson();
    return {
      currentView: JsonViewerViews.TREE,
    };
  });
}
