let globalIntCounter = 1000;
let globalFloatCounter = 3000;

let tempIntCounter = 5000;
let tempFloatCounter = 7500;

let constantIntCounter = 15000;
let constantFloatCounter = 20000;
let constantStringCounter = 25000;

class FunctionDir {
  constructor() {
    this.functions = {};
  }

  // getDirConstants() {
  //   let constants = {};
  //   for (const funcName in this.functions) {
  //     if (this.functions.hasOwnProperty(funcName)) {
  //       const ConstantTable = this.functions[funcName].constantTable.getTable();
  //       if (Object.keys(ConstantTable).length != 0) {
  //         constants[funcName] = ConstantTable;
  //       }
  //     }
  //   }
  //   return constants;
  // }

  getDir() {
    for (const funcName in this.functions) {
      if (this.functions.hasOwnProperty(funcName)) {
        const VarTable = this.functions[funcName].varTable.getTable();
        const ConstantTable = this.functions[funcName].constantTable.getTable();
        console.log(`Function: ${funcName}`);
        console.log(`Type: ${this.functions[funcName].type}`);
        console.log(
          `Variables: ${
            Object.keys(VarTable).length != 0
              ? JSON.stringify(VarTable)
              : "Sin variables"
          }`
        );
        console.log(
          `Constants: ${
            Object.keys(ConstantTable).length != 0
              ? JSON.stringify(ConstantTable)
              : "Sin constantes"
          }`
        );
      }
    }
    return true;
  }

  getDirByName(name) {
    if (this.checkFunction(name)) {
      const VarTable = this.functions[name].VarTable.getTable();
      const ConstantTable = this.functions[name].ConstantTable.getTable();
      console.log(`Function: ${name}`);
      console.log(`Type: ${this.functions[name].type}`);
      console.log(
        `Variables: ${
          Object.keys(VarTable).length != 0
            ? JSON.stringify(VarTable)
            : "Sin variables"
        }`
      );
      console.log(
        `Constantes: ${
          Object.keys(ConstantTable).length != 0
            ? JSON.stringify(ConstantTable)
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
        constantTable: new ConstantTable(),
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
        if (globalIntCounter < 3000) {
          address = globalIntCounter++;
        } else {
          throw new Error(`Memory limit reached for type '${type}'`);
        }
      } else if (type === "float") {
        if (globalFloatCounter < 5000) {
          address = globalFloatCounter++;
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

  addTemp(name, type) {
    let address;
    if (type === "int") {
      if (tempIntCounter < 7500) {
        address = tempIntCounter++;
      } else {
        throw new Error(`Memory limit reached for type '${type}'`);
      }
    } else if (type === "float") {
      if (tempFloatCounter < 10000) {
        address = tempFloatCounter++;
      } else {
        throw new Error(`Memory limit reached for type '${type}'`);
      }
    } else {
      throw new Error(`Unknown type '${type}'`);
    }
    this.table[name] = { name, type, address };
    return address;
  }

  checkVar(name) {
    return this.table.hasOwnProperty(name);
  }

  editType(name, newType) {
    if (this.checkVar(name)) {
      this.table[name].type = newType;
      return true;
    } else {
      throw new Error(`'${name}' not defined.`);
    }
  }

  getAddress(name) {
    if (this.checkVar(name)) {
      return this.table[name].address;
    } else {
      return false;
    }
  }

  getType(name) {
    if (this.checkVar(name)) {
      return this.table[name].type;
    } else {
      return false;
    }
  }

  updateKey(key, newKey) {
    if (this.checkVar(key)) {
      let value = this.table[key];
      value.name = newKey;
      this.table[newKey] = value;
      delete this.table[key];
    } else {
      throw new Error("ERROOOR DURING UPDATE");
    }
  }
}

class ConstantTable {
  constructor() {
    this.table = {};
  }

  getTable() {
    return this.table;
  }

  addConstant(name, type) {
    if (!this.checkConstant(name)) {
      let address;
      if (type === "int") {
        if (constantIntCounter < 20000) {
          address = constantIntCounter++;
        } else {
          throw new Error(`Memory limit reached for type '${type}'`);
        }
      } else if (type === "float") {
        if (constantFloatCounter < 25000) {
          address = constantFloatCounter++;
        } else {
          throw new Error(`Memory limit reached for type '${type}'`);
        }
      } else if (type === "string") {
        if (constantStringCounter < 30000) {
          address = constantStringCounter++;
        } else {
          throw new Error(`Memory limit reached for type '${type}'`);
        }
      } else {
        throw new Error(`Unknown type '${type}'`);
      }
      this.table[name] = { name, type, address };
      return address;
    } else {
      return;
    }
  }

  addStringConstant(name) {
    if (!this.checkConstant(name)) {
      let address;
      if (constantStringCounter < 30000) {
        address = constantStringCounter++;
      } else {
        throw new Error(`Memory limit reached for type 'string'`);
      }
      this.table[name] = { name, type: "string", address };
      return address;
    } else {
      return this.getAddress(name);
    }
  }

  checkConstant(name) {
    return this.table.hasOwnProperty(name);
  }

  getType(name) {
    if (this.checkConstant(name)) {
      return this.table[name].type;
    } else {
      throw new Error(`'${name}' not defined.`);
    }
  }

  getAddress(name) {
    if (this.checkConstant(name)) {
      return this.table[name].address;
    } else {
      throw new Error(`'${name}' not defined.`);
    }
  }

  getConstantByName(name) {
    if (this.table.hasOwnProperty(name)) {
      return this.table[name];
    } else {
      throw new Error(`'${name}' not defined.`);
    }
  }

  editValByName(name, newVal) {
    if (this.table.hasOwnProperty(name)) {
      let value = this.table[name];
      value.name = newVal;
      this.table[newVal] = value;
      delete this.table[name];
    } else {
      throw new Error("ERROOOR DURING UPDATE");
    }
  }
}

export { FunctionDir, VarTable, ConstantTable };
