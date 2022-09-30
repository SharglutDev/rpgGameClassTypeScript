import { Hero } from "../class/hero";

const fightingBlock: HTMLDivElement | null =
  document.querySelector(".fight-block");

const generateFightingLine = (
  hero1: Hero,
  hero2: Hero,
  content: string
): void => {
  if (fightingBlock) {
    const fightingLine: HTMLParagraphElement | null =
      document.createElement("p");
    fightingLine.classList.add(
      "fw-bold",
      "text-light",
      "bg-danger",
      "p-2",
      "rounded"
    );
    fightingLine.innerHTML = content;
    fightingBlock.appendChild(fightingLine);
    fightingLine === fightingBlock.firstElementChild &&
      fightingLine.classList.add("mt-3");
  }
};

const fightToDeath = (hero1: Hero, hero2: Hero): void => {
  let i = 1;
  while (hero1.isAlive() && hero2.isAlive()) {
    hero1.attack(hero2);
    hero2.attack(hero1);
    let roundFight: string = `Fin du ${i}${i === 1 ? "er" : "e"} round ! ${
      hero1.heroName
    } : ${hero1.getLife()}PV. ${hero2.heroName} : ${hero2.getLife()}PV`;
    generateFightingLine(hero1, hero2, roundFight);
    i++;
  }
};

const whoWon = (hero1: Hero, hero2: Hero): void => {
  if (hero1.isAlive()) {
    let hero1win: string = `C'est donc ${hero1.heroName} qui sort vainqueur !`;
    generateFightingLine(hero1, hero2, hero1win);
  } else if (hero2.isAlive()) {
    let hero2win: string = `C'est donc ${hero2.heroName} qui sort vainqueur !`;
    generateFightingLine(hero1, hero2, hero2win);
  } else {
    let heroDraw: string = `Incroyable ! ${hero1.heroName} et ${hero2.heroName} sont tous les deux morts ! Match Nul !`;
    generateFightingLine(hero1, hero2, heroDraw);
  }
};

export const fightInDom = (hero1: Hero, hero2: Hero): void => {
  let introFight: string = `${hero1.heroName} & ${hero2.heroName} s'affrontent ! Qui en sortira vainqueur ?`;
  generateFightingLine(hero1, hero2, introFight);
  fightToDeath(hero1, hero2);
  whoWon(hero1, hero2);
};
