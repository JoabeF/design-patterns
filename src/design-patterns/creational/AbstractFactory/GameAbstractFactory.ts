interface GameAbstractFactory {
  createCharacter(): Character;
  createWeapon(): Weapon;
  createEnvironment(): Environment;
}

interface Character {
  name: string;
  health: number;
  attack: number;
  defense: number;
  takeDamage(damage: number): void;
}

interface Weapon {
  name: string;
  damage: number;
}

interface Environment {
  name: string;
  description: string;
  difficulty: number;
  setDifficulty(difficulty: number): void;
}

class Character2D implements Character {
  name: string;
  health: number;
  attack: number;
  defense: number;

  constructor(name: string, health: number, attack: number, defense: number) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  takeDamage(damage: number): void {
    this.health -= damage;
  }
}

class Weapon2D implements Weapon {
  name: string;
  damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
}

class Environment2D implements Environment {
  name: string;
  description: string;
  difficulty: number;

  constructor(name: string, description: string, difficulty: number) {
    this.name = name;
    this.description = description;
    this.difficulty = difficulty;
  }

  setDifficulty(difficulty: number): void {
    this.difficulty = difficulty;
  }
}

class Character3D implements Character {
  name: string;
  health: number;
  attack: number;
  defense: number;

  constructor(name: string, health: number, attack: number, defense: number) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  takeDamage(damage: number): void {
    this.health -= damage;
  }
}

class Weapon3D implements Weapon {
  name: string;
  damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
}

class Environment3D implements Environment {
  name: string;
  description: string;
  difficulty: number;

  constructor(name: string, description: string, difficulty: number) {
    this.name = name;
    this.description = description;
    this.difficulty = difficulty;
  }

  setDifficulty(difficulty: number): void {
    this.difficulty = difficulty;
  }
}

class Game2DFactory implements GameAbstractFactory {
  createCharacter(): Character {
    return new Character2D("Character 2D", 100, 10, 5);
  }

  createWeapon(): Weapon {
    return new Weapon2D("Weapon 2D", 5);
  }

  createEnvironment(): Environment {
    return new Environment2D("Environment 2D", "Description 2D", 1);
  }
}

class Game3DFactory implements GameAbstractFactory {
  createCharacter(): Character {
    return new Character3D("Character 3D", 100, 10, 5);
  }

  createWeapon(): Weapon {
    return new Weapon3D("Weapon 3D", 5);
  }

  createEnvironment(): Environment {
    return new Environment3D("Environment 3D", "Description 3D", 1);
  }
}

class GameFactory {
  static createGame(type: "2D" | "3D"): GameAbstractFactory {
    switch (type) {
      case "2D":
        return new Game2DFactory();
      case "3D":
        return new Game3DFactory();
      default:
        throw new Error("Unknown game type");
    }
  }
}

const platform = "3D";
const gameFactory = GameFactory.createGame(platform);

const character = gameFactory.createCharacter();
const weapon = gameFactory.createWeapon();
const environment = gameFactory.createEnvironment();

console.log(character);
console.log(weapon);
console.log(environment);
