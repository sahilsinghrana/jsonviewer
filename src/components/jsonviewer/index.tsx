import ViewRenderer from "./Views/ViewRenderer";
import ViewToggleBar from "./Views/ViewToggleBar";

function JsonViewer() {
  return (
    <div className="">
      <ViewToggleBar />
      <ViewRenderer />
    </div>
  );
}

export default JsonViewer;
