import JSON5 from "json5";
import { InvalidJsonError } from "./Errors/JsonErrors";

class ViewerJson {
  static parse(jsonString: string) {
    try {
      return JSON5.parse(jsonString);
    } catch (error) {
      if (error instanceof Error) {
        throw new InvalidJsonError(error.message);
      } else {
        throw new InvalidJsonError(String(error));
      }
    }
  }

  static stringify(json: object, spaces: number) {
    return JSON5.stringify(json, null, spaces);
  }

  static formatString(
    jsonString: string,
    spaces: number
  ): {
    parsed: object;
    string: string;
  } {
    const parsedJson = this.parse(jsonString);
    const stringifiedJson = this.stringify(parsedJson, spaces);
    return {
      parsed: parsedJson,
      string: stringifiedJson,
    };
  }

  static clearWhiteSpaces(jsonString: string) {
    return this.formatString(jsonString, 0);
  }
}

export default ViewerJson;
