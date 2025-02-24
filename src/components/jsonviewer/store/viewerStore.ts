import { create } from "zustand";
import { createFormatSlice } from "./slices/formatSlice";
import { createJsonSlice } from "./slices/jsonSlice";
import viewSlice from "./slices/viewSlice";

export enum JsonViewerViews {
  TEXT = "TEXT",
  TREE = "TREE",
}
interface IFormat {
  spaces: number;
  setSpaces: (spaces: number) => void;
  formatJson: () => void;
  clearWhiteSpaces: () => void;
}

interface IJson {
  string: string;
  parsed: object;
  onStringChange: (jsonString: string) => void;
}

interface IViewerView {
  currentView: JsonViewerViews;
  openJsonView: () => void;
  openTextView: () => void;
}

interface ISettings {
  jsonViewer: {
    font: string;
    fontSize: number;
    padding: number;
  };
  textView: {
    format: {
      spaces: number;
      jsonVersion: string;
    };
  };
  icons: {
    expand: string;
    array: string;
    string: string;
    number: string;
    object: string;
  };
}

export interface IViewerState extends IViewerView {
  format: IFormat;
  json: IJson;
}

const useViewerStore = create<IViewerState>((set) => ({
  ...viewSlice(set),
  ...createJsonSlice(set),
  ...createFormatSlice(set),
}));

export default useViewerStore;
