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

    this.quadruples = quadruples.map((line) =>
      line.split(",").map((item) => item.trim())
    );
    this.constantsTable = this.parseConstants(constantsTable);
    this.memory = this.initializeMemory();
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
    const value = this.memory[segment][address - baseAddress];

    if (value === null || value === undefined) {
      throw new Error(`Variable at address ${address} is not initialized`);
    }

    return value;
  }

  setValue(address, value) {
    const segment = this.getMemorySegment(address);
    const baseAddress = this.getBaseAddress(segment);
    this.memory[segment][address - baseAddress] = value;
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
