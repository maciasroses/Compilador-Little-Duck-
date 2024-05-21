let intCounter = 1000;
let floatCounter = 2000;
let constantCounter = 3000;

class FunctionDir {
  constructor() {
    this.functions = {};
  }

  getDir() {
    for (const funcName in this.functions) {
      if (this.functions.hasOwnProperty(funcName)) {
        const VarTable = this.functions[funcName].varTable.getTable();
        console.log(`Function: ${funcName}`);
        console.log(`Type: ${this.functions[funcName].type}`);
        console.log(
          `Variables: ${
            Object.keys(VarTable).length != 0
              ? JSON.stringify(VarTable)
              : "Sin variables"
          }`
        );
      }
    }
    return true;
  }

  getDirByName(name) {
    if (this.checkFunction(name)) {
      const VarTable = this.functions[name].VarTable.getTable();
      console.log(`Function: ${name}`);
      console.log(`Type: ${this.functions[name].type}`);
      console.log(
        `Variables: ${
          Object.keys(VarTable).length != 0
            ? JSON.stringify(VarTable)
            : "Sin variables"
        }`
      );
      return true;
    } else {
      throw new Error(`'${name}' not defined.`);
    }
  }

  addFunction(name, type) {
    if (!this.checkFunction(name)) {
      this.functions[name] = {
        name: name,
        type: type,
        varTable: new VarTable(),
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

class VarTable {
  constructor() {
    this.table = {};
  }

  getTable() {
    return this.table;
  }

  addVar(name, type) {
    if (!this.checkVar(name)) {
      let address;
      if (type === "int") {
        if (intCounter < 2000) {
          address = intCounter++;
        } else {
          throw new Error(`Memory limit reached for type '${type}'`);
        }
      } else if (type === "float") {
        if (floatCounter < 3000) {
          address = floatCounter++;
        } else {
          throw new Error(`Memory limit reached for type '${type}'`);
        }
      } else {
        throw new Error(`Unknown type '${type}'`);
      }

      this.table[name] = { name, type, address };
      return true;
    } else {
      throw new Error(`'${name}' already defined.`);
    }
  }

  addConstant(name, type) {
    let address;
    if (constantCounter < 6000) {
      address = constantCounter++;
    } else {
      throw new Error("Memory limit reached for constants");
    }
    this.table[address] = { name, type, address };
    return address;
  }

  checkVar(name) {
    return this.table.hasOwnProperty(name);
  }

  getType(name) {
    if (this.checkVar(name)) {
      return this.table[name].type;
    } else {
      throw new Error(`'${name}' not defined.`);
    }
  }

  getAddress(name) {
    if (this.checkVar(name)) {
      return this.table[name].address;
    } else {
      // throw new Error(`'${name}' not defined.`);
      const address = this.findFirstMatchByName(name);
      if (address) {
        return address.address;
      } else {
        throw new Error(`ERROOOOOOOR`);
      }
    }
  }

  findFirstMatchByName(name) {
    return Object.values(this.table).find((item) => item.name === name);
  }

  editValByAddress(key, newVal) {
    if (this.table.hasOwnProperty(key)) {
      this.table[key].name = newVal;
    } else {
      throw new Error("ERROOOR DURING UPDATE");
    }
  }
}

export { FunctionDir, VarTable };
