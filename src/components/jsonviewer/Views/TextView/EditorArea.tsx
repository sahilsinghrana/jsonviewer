import { Textarea } from "@/components/ui/textarea";
import useViewerStore from "../../store/viewerStore";
import {
  jsonStringValueSelector,
  onJsonStringChangeSelector,
} from "../../store/selectors/viewerSelectors";

function EditorArea() {
  const value = useViewerStore(jsonStringValueSelector);
  const setValue = useViewerStore(onJsonStringChangeSelector);

  return (
    <div className="w-full flex justify-center">
      <Textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        className="p-2 pb-6 outline-2 outline outline-gray-500 m-2 text-sm h-[75dvh]  overflow-auto max-h-[75dvh] sm:max-h-[78dvh]  w-[99%] font-mono leading-normal whitespace-pre break-normal [tab-size:2]"
      />
    </div>
  );
}

export default EditorArea;
