import ArrayTree from "./ArrayTree";
import ObjectTree from "./ObjectTree";
import PrimitiveValue from "./PrimitiveValue";

function TreeRenderer({ objectKey, value, defaultIsExpanded }) {
  if (typeof value === "object" && value !== null) {
    if (Array.isArray(value)) {
      return (
        <ArrayTree
          objectKey={objectKey}
          array={value}
          defaultIsExpanded={defaultIsExpanded}
        />
      );
    }
    return (
      <ObjectTree
        object={value}
        objectKey={objectKey}
        defaultIsExpanded={defaultIsExpanded}
      />
    );
  }
  return <PrimitiveValue value={value} objectKey={objectKey} />;
}

export default TreeRenderer;
