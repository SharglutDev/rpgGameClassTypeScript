import { Hero } from "./hero";
import { Weapon } from "./weapon";

class HeroAxe extends Hero {
  weapon: Weapon;

  constructor(
    name: string,
    power: number,
    life: number,
    weaponName: string,
    dmg: number
  ) {
    super(name, power, life);
    this.weapon = new Weapon(weaponName, dmg);
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      opponent.setLife(
        opponent.getLife() - this.getPower() * 2 - this.weapon.damage
      );
    } else {
      // super.attack(opponent);
      // impossible de le changer directement à la méthode attack de Hero à cause de weapon! ?
      opponent.setLife(
        opponent.getLife() - this.getPower() - this.weapon.damage
      );
    }
  }
}

class HeroSword extends Hero {
  weapon: Weapon;

  constructor(
    name: string,
    power: number,
    life: number,
    weaponName: string,
    dmg: number
  ) {
    super(name, power, life);
    this.weapon = new Weapon(weaponName, dmg);
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      opponent.setLife(opponent.getLife() - this.getPower() * 2);
    } else {
      // super.attack(opponent);
      opponent.setLife(
        opponent.getLife() - this.getPower() - this.weapon.damage
      );
    }
  }
}

class HeroSpear extends Hero {
  weapon: Weapon;

  constructor(
    name: string,
    power: number,
    life: number,
    weaponName: string,
    dmg: number
  ) {
    super(name, power, life);
    this.weapon = new Weapon(weaponName, dmg);
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      opponent.setLife(opponent.getLife() - this.getPower() * 2);
    } else {
      // super.attack(opponent);
      opponent.setLife(
        opponent.getLife() - this.getPower() - this.weapon.damage
      );
    }
  }
}

export { HeroAxe, HeroSpear, HeroSword };
