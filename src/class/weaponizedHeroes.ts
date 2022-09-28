import { Hero } from "./hero";
import { Weapon } from "./weapon";

class HeroAxe extends Hero {
  weapon: Weapon;

  constructor(name: string, power: number, life: number, weapon: Weapon) {
    super(name, power, life);
    this.weapon = new Weapon("axe");
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      opponent.setLife(opponent.getLife() - this.getPower() * 2);
    } else {
      super.attack(opponent);
    }
  }
}

class HeroSword extends Hero {
  weapon: Weapon;

  constructor(name: string, power: number, life: number, weapon: Weapon) {
    super(name, power, life);
    this.weapon = new Weapon("sword");
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      opponent.setLife(opponent.getLife() - this.getPower() * 2);
    } else {
      super.attack(opponent);
    }
  }
}

class HeroSpear extends Hero {
  weapon: Weapon;

  constructor(name: string, power: number, life: number, weapon: Weapon) {
    super(name, power, life);
    this.weapon = new Weapon("spear");
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      opponent.setLife(opponent.getLife() - this.getPower() * 2);
    } else {
      super.attack(opponent);
    }
  }
}

export { HeroAxe, HeroSpear, HeroSword };
