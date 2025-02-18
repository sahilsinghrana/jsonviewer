import JsonViewer from "@/components/jsonviewer";
import { GithubIcon } from "lucide-react";
// import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="">
      <JsonViewer />

      <div>
        <p
          role="alert"
          className="flex items-center float-right mx-2 p12 rounded-sm text-white bg-red-800 w-fit"
        >
          <span className="mx-1">In Development</span>
          <a
            className="mx-1 bg-red-950 p-1 hover:bg-black"
            href="https://github.com/sahilsinghrana/jsonviewer/"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </p>
      </div>
    </div>
  );
}
