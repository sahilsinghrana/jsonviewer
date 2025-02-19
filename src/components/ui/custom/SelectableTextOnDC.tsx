import { memo, Ref, useRef } from "react";

function SelectableTextOnDc({ text = "" }) {
  const objectKeyRef: Ref<HTMLSpanElement> = useRef(null);

  return (
    <span
      ref={objectKeyRef}
      onDoubleClick={() => {
        const selection = window.getSelection();
        if (!selection) return;
        selection.removeAllRanges();
        if (objectKeyRef.current) {
          const range = document.createRange();
          range.selectNodeContents(objectKeyRef.current);
          selection.addRange(range);
        }
      }}
    >
      {text}
    </span>
  );
}

export default memo(SelectableTextOnDc);
