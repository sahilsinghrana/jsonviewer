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
        className="min-h-[75dvh] w-[99%] font-mono text-sm leading-normal overflow-x-auto whitespace-pre break-normal [tab-size:2]"
      />
    </div>
  );
}

export default EditorArea;
