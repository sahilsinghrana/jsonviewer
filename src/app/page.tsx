import JsonViewer from "@/components/jsonviewer";
import { GithubIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <JsonViewer />

      <div>
        <p
          role="alert"
          className="flex items-center float-right mx-2 p12 rounded-sm text-white bg-slate-950-800 w-fit"
        >
          <a
            className="mx-1 rounded-full p-1 hover:bg-slate-500 dark:bg-slate-800 bg-slate-900"
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
