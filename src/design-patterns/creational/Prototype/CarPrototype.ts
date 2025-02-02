import { CarBuilder, CarDirector, Car } from "../Builder/CarBuilder";

class CarPrototype extends Car {
  constructor(car: Car) {
    super(car);
  }

  clone(): Car {
    return new Car(this);
  }
}

class CarPrototypeBuilder extends CarBuilder {
  getCarPrototype(): CarPrototype {
    const car = new CarPrototype(this.car);
    this.reset();
    return car;
  }
}

class Application {
  public static main(): void {
    const builder = new CarPrototypeBuilder();
    const director = new CarDirector(builder);

    director.buildOnix();
    const onixPrototype = builder.getCarPrototype();

    const onixBlack = onixPrototype.clone();
    onixBlack.setColor("Black");

    const onixGray = onixPrototype.clone();
    onixGray.setColor("Gray");

    const allColorVariants = [onixBlack, onixGray];

    for (const car of allColorVariants) {
      console.log(car);
    }
  }
}

Application.main();
