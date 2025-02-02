import {
  BodyType,
  CarBuilder,
  CarDirector,
  Color,
  Engine,
  Transmission,
} from "../Builder/CarBuilder";

interface Car {
  clone(): Car;
}

class Car implements Car {
  engine: Engine;
  transmission: Transmission;
  bodyType: BodyType;
  color: Color;

  constructor(car?: Car) {
    if (car) {
      this.engine = car.engine;
      this.transmission = car.transmission;
      this.bodyType = car.bodyType;
      this.color = car.color;
    }
  }

  clone(): Car {
    return new Car(this);
  }
}

class Application {
  public static main(): void {
    const builder = new CarBuilder();
    const director = new CarDirector(builder);

    director.buildOnix();
    const onixWhite: Car = builder.getCar();
    onixWhite.color = "White";

    const onixBlack = onixWhite.clone();
    onixBlack.color = "Black";

    const onixGray = onixWhite.clone();
    onixGray.color = "Gray";

    const allColorVariants = [onixWhite, onixBlack, onixGray];

    for (const car of allColorVariants) {
      console.log(car);
    }
  }
}

Application.main();
