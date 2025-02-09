import { ALargeSmall, Braces, Brackets, Hash } from "lucide-react";
import useViewerStore from "../../store/viewerStore";

function TreeView() {
  const parsedJson = useViewerStore((state) => state.json.parsed);
  return (
    <div>
      Viewer
      <div className="p-2 outline-2 outline outline-gray-500 m-2 text-sm min-h-80">
        <Tree objectKey="JSON" value={parsedJson} />
      </div>
    </div>
  );
}

export default TreeView;

function Tree({ objectKey, value }: { objectKey: string; value: any }) {
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return (
        <details className="flex ml-2">
          <summary className="cursor-pointer ">{objectKey}</summary>
          {value.map(([k, v]) => (
            <Tree key={k} objectKey={k} value={v} />
          ))}
        </details>
      );
    }
    return (
      <details className="flex ml-2">
        <summary className="cursor-pointer ">{objectKey}</summary>
        {Object.entries(value).map(([k, v]) => (
          <Tree key={k} objectKey={k} value={v} />
        ))}
      </details>
    );
  }
  return (
    <div className="flex ml-2 items-center">
      {objectKey}:
      {/* {typeof value === "number" ? <Hash /> : <ALargeSmall />} */}
      <span className="text-green-600 ml-2 ">
        {'"'}
        {value}
        {'"'}
      </span>
    </div>
  );
}
