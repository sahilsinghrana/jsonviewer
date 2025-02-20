import JsonViewer from "@/components/jsonviewer";
import { GithubIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <JsonViewer />

      <div>
        <p
          role="alert"
          className="flex items-center float-right p-2 rounded-md text-white/40 bg-slate-950/10 w-fit"
        >
          <a
            className="mx-1 rounded-full p-1 dark:bg-slate-900 hover:text-white/80 bg-slate-900"
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
