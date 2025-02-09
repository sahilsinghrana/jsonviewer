import { IViewerState } from "../viewerStore";

export const createJsonSlice = (set: any) => ({
  json: {
    string: "",
    parsed: {},
    onStringChange: (jsonString: string) =>
      set((state: IViewerState) => ({
        json: { ...state.json, string: jsonString },
      })),
  },
});
