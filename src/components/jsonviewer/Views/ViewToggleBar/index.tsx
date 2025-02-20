import JsonToggleBtn from "./JsonToggleBtn";
import TextToggleBtn from "./TextToggleBtn";

function ViewToggleBar() {
  return (
    <div className="ml-1 outline outline-slate-400/20 w-fit rounded-md overflow-hidden ">
      <JsonToggleBtn />
      <TextToggleBtn />
    </div>
  );
}

export default ViewToggleBar;
