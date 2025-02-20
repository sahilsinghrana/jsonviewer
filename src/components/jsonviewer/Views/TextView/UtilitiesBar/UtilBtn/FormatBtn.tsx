import UtilityButton from "@/components/ui/custom/utilitybtn";
import useViewerStore from "@/components/jsonviewer/store/viewerStore";
import callFnWithErrToastHandler from "@/utils/callFnWithErrToastHandler";
import {
  getSpacesSelector,
  handleFormatJsonSelector,
  handleSetSpacesSelector,
} from "@/components/jsonviewer/store/selectors/viewerSelectors";

function FormatJsonUtilBtn() {
  const formatJson = useViewerStore(handleFormatJsonSelector);

  function handleClick(e: SubmitEvent) {
    e.preventDefault();
    e.stopPropagation();
    callFnWithErrToastHandler(formatJson);
  }

  return (
    <form onSubmit={handleClick}>
      <UtilityButton
        className="outline-1 overflow-hidden max-w-fit gap-0 pl-0"
        type="submit"
      >
        <SpacesInput />
        <span className="pl-1">Format</span>
      </UtilityButton>
    </form>
  );
}

export default FormatJsonUtilBtn;

function SpacesInput() {
  const handleSetSpaces = useViewerStore(handleSetSpacesSelector);
  const spaces = useViewerStore(getSpacesSelector);

  return (
    <input
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onChange={(e) => {
        let value = Number(Number(e.target.value).toFixed(0));
        if (value < 1) value = 1;
        if (value > 8) value = 8;
        handleSetSpaces(value);
      }}
      value={spaces}
      type="number"
      step="1"
      min="1"
      max="8"
      className="pl-2 m-0 bg-inherit max-w-9 w-9 focus:outline-none border-zinc-500/40 dark:border-zinc-300/20 h-full border"
    />
  );
}
