import { LogoWithText } from "../Logo";
import ViewRenderer from "./Views/ViewRenderer";
import ViewToggleBar from "./Views/ViewToggleBar";

function JsonViewer() {
  return (
    <div className="">
      <div className="absolute top-2 max-md:bottom-0 max-md:top-auto  right-12">
        <LogoWithText />
      </div>
      <ViewToggleBar />
      <ViewRenderer />
    </div>
  );
}

export default JsonViewer;
