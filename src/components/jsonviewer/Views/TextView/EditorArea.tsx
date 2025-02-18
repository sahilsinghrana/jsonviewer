import { Textarea } from "@/components/ui/textarea";
import useViewerStore from "../../store/viewerStore";

function EditorArea() {
  const value = useViewerStore((state) => state.json.string);
  const setValue = useViewerStore((state) => state.json.onStringChange);

  return (
    <div className="w-full flex justify-center">
      <Textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="p-2 pb-6 outline-2 outline outline-gray-500 m-2 text-sm h-[82dvh]  overflow-auto max-h-[82dvh]  w-[99%] font-mono leading-normal whitespace-pre break-normal [tab-size:2]"
      />
    </div>
  );
}

export default EditorArea;
