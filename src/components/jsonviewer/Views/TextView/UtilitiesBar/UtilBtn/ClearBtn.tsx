import { onJsonStringChangeSelector } from "@/components/jsonviewer/store/selectors/viewerSelectors";
import useViewerStore from "@/components/jsonviewer/store/viewerStore";
import UtilityButton from "@/components/ui/custom/utilitybtn";

function ClearBtn() {
  const setValue = useViewerStore(onJsonStringChangeSelector);

  return <UtilityButton onClick={() => setValue("")}>Clear</UtilityButton>;
}

export default ClearBtn;
