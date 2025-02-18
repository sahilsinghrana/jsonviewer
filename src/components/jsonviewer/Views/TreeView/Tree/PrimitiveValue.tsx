import React from "react";
import TreeTextIcon from "./Icons/TreeTextIcon";

function PrimitiveValue({
  objectKey,
  value,
}: {
  objectKey: string | number;
  value: string | number | null;
}) {
  return (
    <div className="flex ml-2 items-center">
      <TreeTextIcon text={typeof value === "number" ? "#" : "$"} /> {objectKey}:
      <span className="text-green-600 ml-2 ">
        {value === null ? (
          "null"
        ) : (
          <>
            {'"'}
            {value}
            {'"'}
          </>
        )}
      </span>
    </div>
  );
}

export default PrimitiveValue;
