import { Weapon } from "./weapon";

export class Hero {
  #name: string;
  #power: number;
  #life: number;

  constructor(name: string, power: number, life: number) {
    this.#name = name;
    this.#power = power;
    this.#life = life;
  }

  static weapon: Weapon;

  attack(opponent: Hero): void {
    opponent.#life -= this.#power;
  }

  isAlive(): boolean {
    return this.#life > 0;
  }

  get heroName(): string {
    return this.#name;
  }

  getPower(): number {
    return this.#power;
  }

  getLife(): number {
    return this.#life;
  }

  setName(newName: string): string {
    return (this.#name = newName);
  }
  setPower(newPower: number): number {
    return (this.#power = newPower);
  }
  setLife(newLife: number): number {
    return (this.#life = newLife);
  }
}
