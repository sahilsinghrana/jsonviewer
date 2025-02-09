import UtilityButton from "@/components/ui/custom/utilitybtn";
import useViewerStore from "@/components/jsonviewer/store/viewerStore";
import callFnWithErrToastHandler from "@/utils/callFnWithErrToastHandler";

function RemoveWhiteSpaceBtn() {
  const clearWhiteSpaces = useViewerStore(
    (state) => state.format.clearWhiteSpaces
  );

  function handleClick() {
    callFnWithErrToastHandler(clearWhiteSpaces);
  }
  return (
    <UtilityButton onClick={handleClick}>Remove White Space</UtilityButton>
  );
}

export default RemoveWhiteSpaceBtn;
