import { onJsonStringChangeSelector } from "@/components/jsonviewer/store/selectors/viewerSelectors";
import useViewerStore from "@/components/jsonviewer/store/viewerStore";
import UtilityButton from "@/components/ui/custom/utilitybtn";
import { readTextFromClipboard } from "@/lib/utils";

function PasteBtn() {
  const setValue = useViewerStore(onJsonStringChangeSelector);

  function handlePaste() {
    readTextFromClipboard().then((value) => {
      if (value) setValue(value);
    });
  }
  return <UtilityButton onClick={handlePaste}>Paste</UtilityButton>;
}

export default PasteBtn;
