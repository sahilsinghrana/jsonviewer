import { toast } from "sonner";
import { JSONError } from "./Errors/JsonErrors";

function callFnWithErrToastHandler<T>(fn: () => T): T | void {
  try {
    return fn();
  } catch (error) {
    if (error instanceof JSONError) {
      toast.error(error.errorMessage, { description: error.message });
    } else {
      toast("Unexpected Error!");
    }
  }
}

export default callFnWithErrToastHandler;
