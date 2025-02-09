import useViewerStore from "../../store/viewerStore";

function TreeView() {
  const parsedJson = useViewerStore((state) => state.json.parsed);
  return (
    <div>
      Viewer
      <div>
        <Tree objectKey="" value={parsedJson} />
      </div>
    </div>
  );
}

export default TreeView;

function Tree({ objectKey, value }: { objectKey: string; value: any }) {
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return <div className="ml-2">{objectKey}: Array</div>;
    }
    return (
      <div>
        {Object.entries(value).map(([k, v]) => (
          <details className="flex ml-2" key={k}>
            <summary>{k}</summary>
            <Tree objectKey={k} value={v} />{" "}
          </details>
        ))}
      </div>
    );
  }
  return (
    <div className="flex ml-2">
      {objectKey}: {value}
    </div>
  );
}
