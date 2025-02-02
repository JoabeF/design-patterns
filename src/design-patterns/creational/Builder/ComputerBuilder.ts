type CPUIntelModel = "i3" | "i5" | "i7";
type CPURyzenModel = "Ryzen 3" | "Ryzen 5" | "Ryzen 7";
type CPUModel = CPUIntelModel | CPURyzenModel;

type GPUNVidiaModel =
  | "RTX 3060"
  | "RTX 3070"
  | "RTX 3080"
  | "RTX 3090"
  | "RTX 4060"
  | "RTX 4070"
  | "RTX 4080"
  | "RTX 4090";

type GPUAMDModel =
  | "RX 6600"
  | "RX 6700"
  | "RX 6800"
  | "RX 6900"
  | "RX 6950"
  | "RX 7150"
  | "RX 7250"
  | "RX 7350"
  | "RX 7400";

type GPUModel = GPUNVidiaModel | GPUAMDModel;

interface ComputerBuilderBase {
  reset(): void;
  setCPU(cpu: "Intel" | "AMD", model: CPUModel): void;
  setGPU(gpu: "NVidia" | "AMD", model: GPUModel): void;
  setRAM(size: number): void;
  setStorage(type: "SSD" | "HDD", size: number): void;
  setOS(os: "Windows" | "Linux" | "MacOS"): void;
}

class Computer {
  cpu: string;
  gpu: string;
  ram: number;
  storage: string;
  os: string;
}

class ComputerBuilder implements ComputerBuilderBase {
  private computer: Computer;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.computer = new Computer();
  }
  setCPU(cpu: "Intel" | "AMD", model: CPUModel): void {
    this.computer.cpu = `${cpu} ${model}`;
  }
  setGPU(gpu: "NVidia" | "AMD", model: GPUModel): void {
    this.computer.gpu = `${gpu} ${model}`;
  }
  setRAM(size: number): void {
    this.computer.ram = size;
  }
  setStorage(type: "SSD" | "HDD", size: number): void {
    this.computer.storage = `${type} ${size}`;
  }
  setOS(os: "Windows" | "Linux" | "MacOS"): void {
    this.computer.os = os;
  }

  getComputer(): Computer {
    const computer = this.computer;
    this.reset();

    return computer;
  }
}

class Director {
  private builder: ComputerBuilderBase;

  constructor(builder: ComputerBuilderBase) {
    this.builder = builder;
  }

  buildBasicComputer(): void {
    this.builder.setCPU("Intel", "i5");
    this.builder.setGPU("NVidia", "RTX 3060");
    this.builder.setRAM(8);
    this.builder.setStorage("SSD", 256);
    this.builder.setOS("MacOS");
  }

  buildIntermediateComputer(): void {
    this.builder.setCPU("AMD", "Ryzen 5");
    this.builder.setGPU("AMD", "RX 6600");
    this.builder.setRAM(16);
    this.builder.setStorage("SSD", 512);
    this.builder.setOS("Linux");
  }

  buildAdvancedComputer(): void {
    this.builder.setCPU("Intel", "i7");
    this.builder.setGPU("NVidia", "RTX 3090");
    this.builder.setRAM(32);
    this.builder.setStorage("SSD", 1024);
    this.builder.setOS("Windows");
  }

  buildGamerComputer(): void {
    this.builder.setCPU("AMD", "Ryzen 7");
    this.builder.setGPU("NVidia", "RTX 4090");
    this.builder.setRAM(64);
    this.builder.setStorage("SSD", 2048);
    this.builder.setOS("Windows");
  }
}

class Application {
  public static main(): void {
    const builder = new ComputerBuilder();
    const director = new Director(builder);

    director.buildBasicComputer();
    const basicComputer: Computer = builder.getComputer();

    // with the same builder and director
    director.buildIntermediateComputer();
    const advancedComputer: Computer = builder.getComputer();

    // again, with the same builder and director
    director.buildGamerComputer();
    const gamerComputer: Computer = builder.getComputer();
  }
}

Application.main();
