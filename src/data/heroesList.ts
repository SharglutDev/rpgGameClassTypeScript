import { HeroAxe, HeroSword, HeroSpear } from "../class/heritedHeroes";
import { Hero } from "../class/hero";

let barbare = new HeroAxe("Olaf", 20, 70, "Lighting Axe", 6);
let orc = new HeroAxe("Gromash", 25, 70, "Executor Axe", 9);
let darius = new HeroAxe("Darius", 15, 80, "The Boucher", 19);

let samourai = new HeroSword("Zorro Roronoa", 15, 65, "Reiki the Katana", 7);
let knight = new HeroSword("Garen", 12, 100, "Heaven Sword", 8);
let masai = new HeroSword("Monbowa", 19, 75, "The Bone Death", 9);

let hercule = new HeroSpear("Herculum", 15, 75, "Zeus Touch", 12);
let xin = new HeroSpear("Xin Xhao", 10, 60, "Emperor Spear", 10);
let maya = new HeroSpear("Vukubcane", 12, 90, "Stone Piercer", 15);

export const heroes: Hero[] = [
  barbare,
  orc,
  darius,
  samourai,
  knight,
  masai,
  hercule,
  xin,
  maya,
];
