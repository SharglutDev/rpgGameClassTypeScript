import { Hero } from "../class/hero";

export const fight = (hero1: Hero, hero2: Hero) => {
  console.log(
    "\x1b[36m%s\x1b[0m",
    `${hero1.heroName} & ${hero2.heroName} s'affrontent ! Qui en sortira vainqueur ?`
  );
  let i = 1;
  while (hero1.isAlive() && hero2.isAlive()) {
    hero1.attack(hero2);
    hero2.attack(hero1);
    console.log(
      `Fin du ${i}${i === 1 ? "er" : "e"} round ! ${
        hero1.heroName
      } : ${hero1.getLife()}PV. ${hero2.heroName} : ${hero2.getLife()}PV`
    );
    i++;
  }
  if (hero1.isAlive()) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `C'est donc ${hero1.heroName} qui sort vainqueur !`
    );
  } else if (hero2.isAlive()) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `C'est donc ${hero2.heroName} qui sort vainqueur !`
    );
  } else {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `Incroyable ! ${hero1.heroName} et ${hero2.heroName} sont tous les deux morts ! Match Nul !`
    );
  }
};
