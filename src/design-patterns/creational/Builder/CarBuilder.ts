export type Engine = "1.0" | "1.4" | "1.6" | "1.0 Turbo";
export type Transmission = "Automatic" | "Manual";
export type BodyType = "Sedan" | "Hatch";
export type Color = "White" | "Black" | "Gray";

export class Car implements Car {
  private engine: Engine | undefined;
  private transmission: Transmission | undefined;
  private bodyType: BodyType | undefined;
  private color: Color | undefined;

  constructor(car?: Car) {
    if (car) {
      this.engine = car.engine;
      this.transmission = car.transmission;
      this.bodyType = car.bodyType;
      this.color = car.color;
    }
  }

  setEngine(engine: Engine): void {
    this.engine = engine;
  }

  setTransmission(transmission: Transmission): void {
    this.transmission = transmission;
  }

  setBodyType(bodyType: BodyType): void {
    this.bodyType = bodyType;
  }

  setColor(color: Color): void {
    this.color = color;
  }
}

export interface CarBuilderBase {
  reset(): void;
  setEngine(engine: Engine): void;
  setTransmission(transmission: Transmission): void;
  setBodyType(bodyType: BodyType): void;
  setColor(color: Color): void;
}

export class CarBuilder implements CarBuilderBase {
  protected car: Car = new Car();

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setEngine(engine: Engine): void {
    this.car.setEngine(engine);
  }

  setTransmission(transmission: Transmission): void {
    this.car.setTransmission(transmission);
  }

  setBodyType(bodyType: BodyType): void {
    this.car.setBodyType(bodyType);
  }

  setColor(color: Color): void {
    this.car.setColor(color);
  }

  getCar(): Car {
    const car = this.car;
    this.reset();
    return car;
  }
}

export class CarDirector {
  private builder: CarBuilderBase;

  constructor(builder: CarBuilderBase) {
    this.builder = builder;
  }

  buildOnix(): void {
    this.builder.setEngine("1.0 Turbo");
    this.builder.setTransmission("Automatic");
    this.builder.setBodyType("Hatch");
    this.builder.setColor("White");
  }

  buildOnixSedan(): void {
    this.builder.setEngine("1.0 Turbo");
    this.builder.setTransmission("Automatic");
    this.builder.setBodyType("Sedan");
    this.builder.setColor("White");
  }

  buildCobalt(): void {
    this.builder.setEngine("1.6");
    this.builder.setTransmission("Manual");
    this.builder.setBodyType("Sedan");
    this.builder.setColor("White");
  }
}

class Application {
  public static main(): void {
    const builder = new CarBuilder();
    const director = new CarDirector(builder);

    director.buildOnix();
    const onix: Car = builder.getCar();

    director.buildOnixSedan();
    const onixSedan: Car = builder.getCar();

    director.buildCobalt();
    const cobalt: Car = builder.getCar();
  }
}

Application.main();
