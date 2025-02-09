import UtilityButton from "@/components/ui/custom/utilitybtn";
import useViewerStore from "@/components/jsonviewer/store/viewerStore";
import callFnWithErrToastHandler from "@/utils/callFnWithErrToastHandler";

function FormatJsonUtilBtn() {
  const formatJson = useViewerStore((state) => state.format.formatJson);

  function handleClick() {
    callFnWithErrToastHandler(formatJson);
  }

  return <UtilityButton onClick={handleClick}>Format</UtilityButton>;
}

export default FormatJsonUtilBtn;
