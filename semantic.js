class dirFunction {
  constructor() {
    this.functions = {};
  }

  getDir() {
    for (const funcName in this.functions) {
      if (this.functions.hasOwnProperty(funcName)) {
        const varTable = this.functions[funcName].varTable.getTable();
        console.log(`Function: ${funcName}`);
        console.log(`Type: ${this.functions[funcName].type}`);
        console.log(
          `Variables: ${
            Object.keys(varTable).length != 0
              ? JSON.stringify(varTable)
              : "Sin variables"
          }`
        );
      }
    }
    return true;
  }

  addFunction(name, type) {
    if (!this.checkFunction(name)) {
      this.functions[name] = {
        name: name,
        type: type,
        varTable: new varTable(),
      };
      return true;
    } else {
      throw new Error(`'${name}' already defined.`);
    }
  }

  checkFunction(name) {
    return this.functions.hasOwnProperty(name);
  }
}

class varTable {
  constructor() {
    this.table = {};
  }

  getTable() {
    return this.table;
  }

  addVar(name, type) {
    if (!this.checkVar(name)) {
      this.table[name] = type;
      return true;
    } else {
      throw new Error(`'${name}' already defined.`);
    }
  }

  checkVar(name) {
    return this.table.hasOwnProperty(name);
  }
}

export { dirFunction, varTable };
