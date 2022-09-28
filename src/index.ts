let message: string = "Hello World !";
console.log(message);

// ************* Level 1 *************

// primites
// Les types primitives en TS sont string, number et boolean

//typer un tableau
const array = [];
const array1: number[] = []; // array ne contenant que des string
const array2: [number, string] = [2, "Hello"]; // array avec uniquement 2 éléments, le 1er un nombre le 2eme une string
const array3: Array<string> = ["Hello", "Dev"];

// any
// quand on ne veut pas donner un type spécifique pour éviter des erreurs

//typer une fonction et son return
const myFunction = (param1: number): number => {
  return param1;
};

// ************* Level 2 *************

// class

// La classe est une syntaxe pour créer des objets et manipuler l'héritage.
// le constructor sert à initialiser les valeurs des propriétés
// les instances de classe sont les objets créés à partir du modèle class
// this fait référence à l'objet en mode non strict
// une méthode de class est une fonction qui se lance uniquement dans le contexte de la class. ex: maClasse.method()
// une propriété peut être public (par défaut) ou privée. Si elle est privée, elle ne sera pas accessible en dehors

// ************ Level 3 ************

// pour diviser, l'élément isolé dans un fichier doit être passé en export et importer avec "import" dans l'autre fichier.
// l'héritage représente les "enfants" crées à partir d'une class
// le constructeur est représenté par le "new"
// appel méthode : monInstance.method()

// ******************* BOSS **********************

import { Hero } from "./class/hero";
import { Weapon } from "./class/weapon";
import { HeroAxe, HeroSpear, HeroSword } from "./class/weaponizedHeroes";

// Partie 1

let batman = new Hero("Batman", 8, 20);
let spiderman = new Hero("Spiderman", 6, 25);

batman.attack(spiderman);

console.log(batman.isAlive()); // true
console.log(spiderman.isAlive()); // true

batman.setPower(10);
console.log(batman.getLife());
batman.attack(spiderman);
console.log(spiderman.getLife());

// Partie 2

let barbare = new HeroAxe("Olaf", 20, 70, "Lighting Axe", 6);
let orc = new HeroAxe("Gromash", 25, 70, "Executor Axe", 9);

let samourai = new HeroSword("Zorro Roronoa", 15, 65, "Reiki the Katana", 7);
let knight = new HeroSword("Garen", 12, 100, "Heaven Sword", 8);

let hercule = new HeroSpear("Herculum", 15, 75, "Zeus Touch", 12);
let xin = new HeroSpear("Xin Xhao", 10, 60, "Emperor Spear", 10);

const heroes: Hero[] = [barbare, orc, samourai, knight, hercule, xin];

// xinSpearHero.attack(barbareAxeHero);

// Partie 3

const fight = (hero1: Hero, hero2: Hero) => {
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

fight(barbare, orc);

// ******* Bonus 2 : Interface graphique *******

let selector: HTMLElement | null;
if (typeof document !== undefined) {
  selector = document.querySelector("#heroesSelector");
}

heroes.forEach((hero, index) => {
  const option: HTMLOptionElement = document.createElement("option");
  option.value = (index + 1).toString();
  option.textContent = hero.heroName;
  selector?.appendChild(option);
  console.log(selector);
});
