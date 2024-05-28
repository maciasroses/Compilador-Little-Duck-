import antlr4 from "antlr4";

class MyErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(line, column, msg) {
    const error = `line ${line}:${column} ${msg}`;
    this.errors.push(error);
  }

  getErrors() {
    return this.errors;
  }
}

export default MyErrorListener;
