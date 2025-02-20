import TreeRenderer from "./TreeRenderer";

function Tree({
  objectKey,
  value,
  defaultIsExpanded,
}: {
  objectKey: string | number;
  value: unknown;
  defaultIsExpanded?: boolean;
}) {
  return (
    <div className="ml-1 border-l  hover:border-l transition hover:border-white/30 rounded">
      <TreeRenderer
        objectKey={objectKey}
        value={value}
        defaultIsExpanded={defaultIsExpanded}
      />
    </div>
  );
}

export default Tree;
