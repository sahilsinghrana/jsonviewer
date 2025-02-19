import { useEffect } from "react";

import ExpandToggleBtn from "@/components/ui/custom/ExpandToggleBtn";

import Tree from "./index";
import TreeTextIcon from "./Icons/TreeTextIcon";
import useToggleSwitch from "../useToggleSwitch";
import { subscribeTVTreeEvents, TV_EVENTS_TYPES } from "../tvEventBus";
import Itemkey from "./ItemKey";

function ArrayTree({
  objectKey,
  array,
  defaultIsExpanded,
}: {
  objectKey: string;
  array: [];
  defaultIsExpanded?: boolean;
}) {
  const {
    isEnabled: isExpanded,
    toggle: toggleExpanded,
    setIsExpandChild,
    expandChild,
  } = useToggleSwitch(defaultIsExpanded);

  useEffect(() => {
    const unsubscribe = subscribeTVTreeEvents((payload) => {
      if (payload.type === TV_EVENTS_TYPES.expandAll) {
        toggleExpanded(true);
        setIsExpandChild(true);
      } else if (payload.type === TV_EVENTS_TYPES.collapseAll) {
        toggleExpanded(false);
      }
    });

    return () => unsubscribe();
  }, [setIsExpandChild, toggleExpanded]);

  return (
    <div className=" ml-2">
      <Itemkey
        objectKey={objectKey}
        Icon={<TreeTextIcon text="[]" />}
        isExpanded={isExpanded}
        toggleExpanded={() => {
          toggleExpanded();
          setIsExpandChild(false);
        }}
      />

      {isExpanded &&
        array.map((v: unknown, i: number) => (
          <Tree
            key={i}
            objectKey={i}
            value={v}
            defaultIsExpanded={expandChild}
          />
        ))}
    </div>
  );
}

export default ArrayTree;
