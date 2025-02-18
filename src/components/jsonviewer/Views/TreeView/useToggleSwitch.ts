import { Dispatch, SetStateAction, useCallback, useState } from "react";

function useToggleSwitch(defaultIsExpanded?: boolean): {
  isEnabled: boolean;
  toggle: (val?: boolean) => void;
  expandChild: boolean;
  setIsExpandChild: Dispatch<SetStateAction<boolean>>;
  setIsEnabled: Dispatch<SetStateAction<boolean>>;
} {
  const [isEnabled, setIsEnabled] = useState(!!defaultIsExpanded);
  const [expandChild, setIsExpandChild] = useState(!!defaultIsExpanded);

  const toggle = useCallback((val?: boolean): void => {
    if (typeof val === "boolean") setIsEnabled(val);
    else setIsEnabled((prev) => !prev);
  }, []);

  return {
    isEnabled,
    toggle,
    expandChild,
    setIsExpandChild,
    setIsEnabled,
  };
}

export default useToggleSwitch;
