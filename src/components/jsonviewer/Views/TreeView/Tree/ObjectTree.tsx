import { useEffect } from "react";
import clsx from "clsx";

import ExpandToggleBtn from "@/components/ui/custom/ExpandToggleBtn";

import Tree from "./index";
import TreeTextIcon from "./Icons/TreeTextIcon";
import useToggleSwitch from "../useToggleSwitch";
import { subscribeTVTreeEvents, TV_EVENTS_TYPES } from "../tvEventBus";

function ObjectTree({
  objectKey,
  object,
  defaultIsExpanded,
}: {
  defaultIsExpanded?: boolean;
  objectKey: string;
  object: object;
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
        setIsExpandChild(true);
        toggleExpanded(true);
      } else if (payload.type === TV_EVENTS_TYPES.collapseAll) {
        toggleExpanded(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={clsx("ml-2")}>
      <div className="flex items-center">
        <ExpandToggleBtn
          isExpanded={isExpanded}
          onClick={() => {
            toggleExpanded();
            setIsExpandChild(false);
          }}
        />
        <div>
          <TreeTextIcon text="{}" />
          {objectKey}
        </div>
      </div>
      {isExpanded &&
        Object.entries(object).map(([k, v]) => (
          <Tree
            key={k}
            objectKey={k}
            value={v}
            defaultIsExpanded={expandChild}
          />
        ))}
    </div>
  );
}

export default ObjectTree;
