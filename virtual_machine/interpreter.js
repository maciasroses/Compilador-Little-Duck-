class Interpreter {
  constructor(compiledCode) {
    const parts = compiledCode.split(/\n\$\n/);

    const quadruples = parts[0]
      .trim()
      .split("\n")
      .filter((line) => line);

    const constantsTable = parts[1]
      .trim()
      .split("\n")
      .filter((line) => line);

    const functionsTable = parts[2]
      .trim()
      .split("\n")
      .filter((line) => line);

    this.quadruples = quadruples.map((line) =>
      line.split(",").map((item) => item.trim())
    );
    this.constantsTable = this.parseConstants(constantsTable);
    this.functionsTable = this.parseFunctions(functionsTable);
    this.memory = this.initializeMemory();
    this.callStack = [];
    this.currentLocalMemory = null;

    this.currentIndexIntArg = 0;
    this.currentIndexFloatArg = 0;
  }

  parseConstants(constantsTable) {
    const constants = {};
    for (const line of constantsTable) {
      const commaIndex = line.indexOf(",");
      const address = line.substring(0, commaIndex).trim();
      let value = line.substring(commaIndex + 1).trim();

      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
        value = value.replace(/\\n/g, "\n");
      } else {
        value = isNaN(value) ? value : parseFloat(value);
      }

      constants[address] = value;
    }
    return constants;
  }

  parseFunctions(functionsTable) {
    const functions = {};
    for (const line of functionsTable) {
      const [name, type, startIdx] = line.split(",");
      functions[name.trim()] = {
        type: type.trim(),
        startIdx: parseInt(startIdx.trim()),
      };
    }
    return functions;
  }

  initializeMemory() {
    return {
      global: new Array(4000).fill(null),
      temp: new Array(5000).fill(null),
      local: new Array(5000).fill(null),
    };
  }

  getMemorySegment(address) {
    if (address >= 1000 && address <= 4999) return "global";
    if (address >= 5000 && address <= 9999) return "temp";
    if (address >= 10000 && address <= 14999) return "local";
    throw new Error(`Invalid address: ${address}`);
  }

  verifyVarRangeForLocalMemory(address) {
    if (
      (address >= 3000 && address <= 4999) ||
      (address >= 7500 && address <= 9999) ||
      (address >= 12500 && address <= 14999) ||
      (address >= 20000 && address <= 24999)
    ) {
      return true;
    }
    return false;
  }

  getBaseAddress(segment) {
    switch (segment) {
      case "global":
        return 1000;
      case "temp":
        return 5000;
      case "local":
        return 10000;
      default:
        throw new Error(`Invalid memory segment: ${segment}`);
    }
  }

  getValue(address) {
    if (address === undefined || address === "") return null;
    if (address >= 15000) return this.constantsTable[address];

    const segment = this.getMemorySegment(address);
    const baseAddress = this.getBaseAddress(segment);

    const memory =
      segment === "local" && this.currentLocalMemory
        ? this.currentLocalMemory
        : this.memory[segment];

    let value = memory[address - baseAddress];

    if ((value === null || value === undefined) && segment === "local") {
      const prevfunc = this.callStack.pop();
      value = prevfunc[address - baseAddress];
      this.callStack.push(prevfunc);
    }

    if (value === null || value === undefined) {
      throw new Error(`Variable at address ${address} is not initialized`);
    }

    return value;
  }

  setValue(address, value) {
    const segment = this.getMemorySegment(address);
    const baseAddress = this.getBaseAddress(segment);
    const memory =
      segment === "local" && this.currentLocalMemory
        ? this.currentLocalMemory
        : this.memory[segment];
    memory[address - baseAddress] = value;
  }

  execute() {
    let instructionPointer = 0;
    let printBuffer = [];

    while (instructionPointer < this.quadruples.length) {
      const [op, arg1, arg2, result] = this.quadruples[instructionPointer];

      try {
        switch (parseInt(op)) {
          case 0: // Add
            this.setValue(result, this.getValue(arg1) + this.getValue(arg2));
            break;
          case 1: // Sub
            this.setValue(result, this.getValue(arg1) - this.getValue(arg2));
            break;
          case 2: // Mul
            this.setValue(result, this.getValue(arg1) * this.getValue(arg2));
            break;
          case 3: // Div
            this.setValue(result, this.getValue(arg1) / this.getValue(arg2));
            break;
          case 4: // Greater than
            this.setValue(result, this.getValue(arg1) > this.getValue(arg2));
            break;
          case 5: // Less than
            this.setValue(result, this.getValue(arg1) < this.getValue(arg2));
            break;
          case 6: // Not equal
            this.setValue(result, this.getValue(arg1) !== this.getValue(arg2));
            break;
          case 7: // Assign
            this.setValue(result, this.getValue(arg1));
            break;
          case 8: // Print
            const valueToPrint = this.getValue(result);
            printBuffer.push(valueToPrint);
            break;
          case 9: // GOTOF
            if (!this.getValue(arg1)) instructionPointer = parseInt(result) - 1;
            break;
          case 10: // GOTOT
            if (this.getValue(arg1)) instructionPointer = parseInt(result) - 1;
            break;
          case 11: // GOTO
            instructionPointer = parseInt(result) - 1;
            break;
          case 12: // END
            return;
          case 13: // ENDFUNC
            const returnAddress = this.callStack.pop();
            this.currentLocalMemory = this.callStack.pop();
            this.currentIndexFloatArg = 0;
            this.currentIndexIntArg = 0;
            instructionPointer = returnAddress;
            break;
          case 14: // ERA
            this.callStack.push(this.currentLocalMemory);
            this.currentLocalMemory = this.initializeMemory()["local"];
            this.currentIndexFloatArg = 0;
            this.currentIndexIntArg = 0;
            break;
          case 15: // PARAM
            let auxMemoryAddress = 0;

            if (this.verifyVarRangeForLocalMemory(arg1)) {
              auxMemoryAddress = 2500 + this.currentIndexFloatArg;
              this.currentIndexFloatArg++;
            } else {
              auxMemoryAddress = this.currentIndexIntArg;
              this.currentIndexIntArg++;
            }

            this.currentLocalMemory[auxMemoryAddress] = this.getValue(arg1);
            break;
          case 16: // GOSUB
            this.callStack.push(instructionPointer);
            instructionPointer = this.functionsTable[result].startIdx - 1;
            break;
          default:
            throw new Error(`Unknown operation: ${op}`);
        }
      } catch (error) {
        console.error(
          `Error at instruction ${instructionPointer}: ${error.message}`
        );
        return;
      }

      if (
        instructionPointer < this.quadruples.length - 1 &&
        parseInt(this.quadruples[instructionPointer + 1][0]) !== 8
      ) {
        if (printBuffer.length > 0) {
          console.log(printBuffer.join(""));
          printBuffer = [];
        }
      } else if (instructionPointer === this.quadruples.length - 1) {
        if (printBuffer.length > 0) {
          console.log(printBuffer.join(""));
          printBuffer = [];
        }
      }

      instructionPointer++;
    }

    if (printBuffer.length > 0) {
      console.log(printBuffer.join(""));
    }
  }
}

export { Interpreter };
