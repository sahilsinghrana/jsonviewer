import ViewerJson from "@/utils/jsonParser";
import { IViewerState } from "../viewerStore";

export const createFormatSlice = (set: any) => ({
  format: {
    spaces: 2,
    setSpaces: (spaces: number) =>
      set((state: IViewerState) => ({ format: { ...state.format, spaces } })),
    formatJson: () =>
      set((state: IViewerState) => {
        const { parsed, string } = ViewerJson.formatString(
          state.json.string,
          state.format.spaces
        );
        return { json: { ...state.json, string, parsed } };
      }),
    clearWhiteSpaces: () =>
      set((state: IViewerState) => {
        const { parsed, string } = ViewerJson.clearWhiteSpaces(
          state.json.string
        );
        return { json: { ...state.json, parsed, string } };
      }),
  },
});
