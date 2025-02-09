export class JSONError extends Error {
  errCode = "Unexpected";
  errorMessage = "Unexpected Error!";

  constructor(message: string, errorMessage: string, errCode: string) {
    super(message || "Unexpected JSON Error!");
    this.name = "JSON";
    this.errCode = errCode;
    this.errorMessage = errorMessage;
  }
}

export class InvalidJsonError extends JSONError {
  constructor(message: string) {
    super(message, "Invalid JSON!", "InvalidJson");
  }
}
