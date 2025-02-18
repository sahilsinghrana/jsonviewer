import TreeTextIcon from "./Icons/TreeTextIcon";

function PrimitiveValue({
  objectKey,
  value,
}: {
  objectKey: string | number;
  value: any;
}) {
  return (
    <div className="flex ml-2 items-center">
      <TreeTextIcon text={typeof value === "number" ? "#" : "$"} /> {objectKey}:
      <span className="text-green-600 ml-2 ">
        {'"'}
        {value}
        {'"'}
      </span>
    </div>
  );
}

export default PrimitiveValue;
