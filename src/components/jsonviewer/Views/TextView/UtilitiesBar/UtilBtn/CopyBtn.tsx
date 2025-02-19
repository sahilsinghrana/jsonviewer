import { jsonStringValueSelector } from "@/components/jsonviewer/store/selectors/viewerSelectors";
import useViewerStore from "@/components/jsonviewer/store/viewerStore";
import UtilityButton from "@/components/ui/custom/utilitybtn";
import { copyTextToClipboard } from "@/lib/utils";

function CopyBtn() {
  const value = useViewerStore(jsonStringValueSelector);

  function handleClick() {
    copyTextToClipboard(value);
  }
  return <UtilityButton onClick={handleClick}>Copy</UtilityButton>;
}

export default CopyBtn;
