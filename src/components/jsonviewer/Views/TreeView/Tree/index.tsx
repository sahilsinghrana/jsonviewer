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
    <div className="ml-1">
      <TreeRenderer
        objectKey={objectKey}
        value={value}
        defaultIsExpanded={defaultIsExpanded}
      />
    </div>
  );
}

export default Tree;
