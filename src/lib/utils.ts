import { clsx, type ClassValue } from "clsx";
import { ExternalToast, toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const copyToastOptions: ExternalToast = {
  duration: 1000,
  position: "top-right",
  closeButton: false,
};

export function readTextFromClipboard() {
  return navigator.clipboard.readText();
}

export function copyTextToClipboard(text = "") {
  if (!text) return;
  navigator.permissions
    .query({ name: "clipboard-write" })
    .then((result) => {
      if (result.state == "granted" || result.state == "prompt") {
        navigator.clipboard.writeText(text);
        toast.info("Copied to clipboard!", copyToastOptions);
      } else {
        toast.error("Clipboard permission denied!", copyToastOptions);
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error(
        "Something went wrong while copying the text!",
        copyToastOptions
      );
    });
}
