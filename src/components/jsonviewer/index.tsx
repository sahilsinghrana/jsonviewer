import { LogoWithText } from "../Logo";
import ViewRenderer from "./Views/ViewRenderer";
import ViewToggleBar from "./Views/ViewToggleBar";

function JsonViewer() {
  return (
    <div className="">
      <div className="absolute top-1  right-12">
        <LogoWithText />
      </div>
      <ViewToggleBar />
      <ViewRenderer />
    </div>
  );
}

export default JsonViewer;
