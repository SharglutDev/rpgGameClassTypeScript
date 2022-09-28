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
      console.log(
        `
        ${this.heroName}, héros de type ${this.weapon.name} attaque ${
          opponent.heroName
        } de type ${opponent.weapon.name} qui a ${opponent.getLife()}PV. 
        Sa puissance de ${this.getPower()} est donc doublée !
        Il ne reste à ${opponent.heroName} plus que ${opponent.setLife(
          opponent.getLife() - this.getPower() * 2
        )} PV`
      );
      super.setPower(super.getPower() * 2);
    }

    super.attack(opponent);
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
      console.log(
        `
        ${this.heroName}, héros de type ${this.weapon.name} attaque ${
          opponent.heroName
        } de type ${opponent.weapon.name} qui a ${opponent.getLife()}PV. 
        Sa puissance de ${this.getPower()} est donc doublée !
        Il ne reste à ${opponent.heroName} plus que ${opponent.setLife(
          opponent.getLife() - this.getPower() * 2
        )} PV`
      );
      super.setPower(super.getPower() * 2);
    }
    super.attack(opponent);
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
      console.log(`${this.heroName}, héros de type ${
        this.weapon.name
      } attaque ${opponent.heroName} de type ${
        opponent.weapon.name
      } qui a ${opponent.getLife()}PV. 
        Sa puissance de ${this.getPower()} est donc doublée !
        Il ne reste à ${opponent.heroName} plus que ${opponent.setLife(
        opponent.getLife() - this.getPower() * 2
      )} PV`);
      super.setPower(super.getPower() * 2);
    }

    super.attack(opponent);
  }
}

export { HeroAxe, HeroSpear, HeroSword };
