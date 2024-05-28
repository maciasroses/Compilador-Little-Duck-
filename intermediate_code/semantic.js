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

  getAll() {
    return this.functions;
  }

  getDir() {
    for (const funcName in this.functions) {
      if (this.functions.hasOwnProperty(funcName)) {
        const VarTable = this.functions[funcName].varTable.getTable();
        const ParameterTable =
          this.functions[funcName].parameterTable.getTable();
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
          `Parámetros: ${
            Object.keys(ParameterTable).length != 0
              ? JSON.stringify(ParameterTable)
              : "Sin parámetros"
          }`
        );
      }
    }
    return true;
  }

  getVoidFunctionsForDocument() {
    const result = {};

    for (const funcName in this.functions) {
      if (this.functions.hasOwnProperty(funcName)) {
        const func = this.functions[funcName];
        if (func.type === "void") {
          result[funcName] = {
            ...func,
            varTable: {
              table: func.varTable.getTable(),
              numberOfLocalVars: func.varTable.getLocalVariables(),
            },
            parameterTable: {
              table: func.parameterTable.getTable(),
              numberOfParams: func.parameterTable.getNumbOfParameters(),
            },
          };
        }
      }
    }

    return result;
  }

  getDirByName(name) {
    if (this.checkFunction(name)) {
      const VarTable = this.functions[name].VarTable.getTable();
      const ParameterTable = this.functions[funcName].parameterTable.getTable();
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
        `Parámetros: ${
          Object.keys(ParameterTable).length != 0
            ? JSON.stringify(ParameterTable)
            : "Sin parámetros"
        }`
      );
      return true;
    } else {
      throw new Error(`'${name}' not defined.`);
    }
  }

  addStartQuadruple(name, quadIndex) {
    const currentFunc = this.getNameDir(name);
    currentFunc.startQuad = quadIndex;
  }

  addFunction(name, type) {
    if (!this.checkFunction(name)) {
      this.functions[name] = {
        name: name,
        type: type,
        varTable: new VarTable(),
        parameterTable: new ParameterTabla(),
      };
      return true;
    } else {
      throw new Error(`'${name}' already defined.`);
    }
  }

  getNameDir(name) {
    if (this.checkFunction(name)) {
      return this.functions[name];
    } else {
      throw new Error(`'${name}' not defined.`);
    }
  }

  checkFunction(name) {
    return this.functions.hasOwnProperty(name);
  }
}

class ParameterTabla {
  constructor() {
    this.table = {};
    this.localIntCounter = 10000;
    this.localFloatCounter = 12500;
  }

  getTable() {
    return this.table;
  }

  getNumbOfParameters() {
    return Object.keys(this.table).length;
  }

  addParameter(name, type) {
    if (!this.checkParameter(name)) {
      let address;
      if (type === "int") {
        if (this.localIntCounter < 12500) {
          address = this.localIntCounter++;
        } else {
          throw new Error(`Memory limit reached for type '${type}'`);
        }
      } else if (type === "float") {
        if (this.localFloatCounter < 15000) {
          address = this.localFloatCounter++;
        } else {
          throw new Error(`Memory limit reached for type '${type}'`);
        }
      } else {
        throw new Error(`Unknown type '${type}'`);
      }
      this.table[name] = { name, type, address };
      return address;
    } else {
      throw new Error(`'${name}' already defined.`);
    }
  }

  checkParameter(name) {
    return this.table.hasOwnProperty(name);
  }

  editType(name, newType) {
    if (this.checkParameter(name)) {
      this.table[name].type = newType;
      return true;
    } else {
      throw new Error(`'${name}' not defined.`);
    }
  }

  getAddress(name) {
    if (this.checkParameter(name)) {
      return this.table[name].address;
    } else {
      return false;
    }
  }

  getType(name) {
    if (this.checkParameter(name)) {
      return this.table[name].type;
    } else {
      return false;
    }
  }

  updateKey(key, newKey) {
    if (this.checkParameter(key)) {
      let value = this.table[key];
      value.name = newKey;
      this.table[newKey] = value;
      delete this.table[key];
    } else {
      throw new Error("ERROOOR DURING UPDATE");
    }
  }
}

class VarTable {
  constructor() {
    this.table = {};
    this.localIntCounter = 10000;
    this.localFloatCounter = 12500;
  }

  getTable() {
    return this.table;
  }

  getLocalVariables() {
    const filteredVars = Object.values(this.table).filter(
      (variable) => variable.address >= 10000 && variable.address < 15000
    );
    return filteredVars.length;
  }

  addVar(name, type, functionType) {
    if (!this.checkVar(name)) {
      let address;
      if (type === "int") {
        if (functionType && functionType == "void") {
          if (this.localIntCounter < 12500) {
            address = this.localIntCounter++;
          } else {
            throw new Error(`Memory limit reached for type '${type}'`);
          }
        } else {
          if (globalIntCounter < 3000) {
            address = globalIntCounter++;
          } else {
            throw new Error(`Memory limit reached for type '${type}'`);
          }
        }
      } else if (type === "float") {
        if (functionType && functionType == "void") {
          if (this.localFloatCounter < 15000) {
            address = this.localFloatCounter++;
          } else {
            throw new Error(`Memory limit reached for type '${type}'`);
          }
        } else {
          if (globalFloatCounter < 5000) {
            address = globalFloatCounter++;
          } else {
            throw new Error(`Memory limit reached for type '${type}'`);
          }
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
