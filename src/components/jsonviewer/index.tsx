import { LogoWithText } from "../Logo";
import ViewRenderer from "./Views/ViewRenderer";
import ViewToggleBar from "./Views/ViewToggleBar";

function JsonViewer() {
  return (
    <div className="">
      <div className="absolute top-2 right-14  max-md:bottom-3 z-10 max-md:left-2 max-md:right-auto max-md:top-auto ">
        <LogoWithText />
      </div>
      <ViewToggleBar />
      <ViewRenderer />
    </div>
  );
}

export default JsonViewer;
