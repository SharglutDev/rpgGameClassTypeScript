import { Hero } from "./hero";
import { Weapon } from "./weapon";

class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number, dmg: number) {
    super(name, power, life);
    this.weapon = new Weapon("Axe", dmg);
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      opponent.setLife(
        opponent.getLife() - this.getPower() * 2 - this.weapon.damage
      );
    } else {
      super.attack(opponent);
    }
  }
}

class HeroSword extends Hero {
  constructor(name: string, power: number, life: number, dmg: number) {
    super(name, power, life);
    this.weapon = new Weapon("Sword", dmg);
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
  constructor(name: string, power: number, life: number, dmg: number) {
    super(name, power, life);
    this.weapon = new Weapon("Spear", dmg);
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
