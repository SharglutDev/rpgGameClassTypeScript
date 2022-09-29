let message: string = "Hello World !";
// console.log(message);

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
import { HeroAxe, HeroSpear, HeroSword } from "./class/heritedHeroes";
import { heroCardGenerator } from "./dom/heroCard";
import { fight } from "./data/fight";
import { heroes } from "./data/heroesList";
import { heroSelectorGenerator } from "./dom/heroSelector";

// let barbare = new HeroAxe("Olaf", 20, 70, "Lighting Axe", 6);
// let orc = new HeroAxe("Gromash", 25, 70, "Executor Axe", 9);

// fight(barbare, orc);

// ******* Bonus 2 : Interface graphique *******

if (typeof window !== "undefined") {
  // Hero Selectors

  const selectorPlayer1: HTMLSelectElement | null =
    document.querySelector("#select-player1");
  const selectorPlayer2: HTMLSelectElement | null =
    document.querySelector("#select-player2");
  const hero1BlockCard: HTMLDivElement | null =
    document.querySelector("#hero1-card");
  const hero2BlockCard: HTMLDivElement | null =
    document.querySelector("#hero2-card");
  const fightBtn: HTMLButtonElement | null =
    document.querySelector("#fightBtn");

  heroSelectorGenerator(selectorPlayer1);
  heroSelectorGenerator(selectorPlayer2);

  console.log();

  selectorPlayer1?.addEventListener("change", () => {
    heroes.forEach((hero) => {
      selectorPlayer1.value === hero.heroName &&
        hero1BlockCard &&
        heroCardGenerator(hero, hero1BlockCard);
    });
    selectorPlayer2?.selectedIndex !== 0 &&
      fightBtn?.classList.replace("d-none", "d-block");
  });

  selectorPlayer2?.addEventListener("change", () => {
    heroes.forEach((hero) => {
      selectorPlayer2.value === hero.heroName &&
        hero2BlockCard &&
        heroCardGenerator(hero, hero2BlockCard);
    });
    selectorPlayer1?.selectedIndex !== 0 &&
      fightBtn?.classList.replace("d-none", "d-block");
  });

  // let selectors: any = document.getElementsByClassName("form-select");
  // for (const selector of selectors) {
  //   heroSelectorGenerator(selector);

  //   selector.addEventListener("change", () => {
  //     heroes.forEach((hero) => {
  //       selector.value === hero.heroName && heroCardGenerator(hero);
  //     });
  //   });
  // }
  //   [...document.getElementsByClassName("form-select")].forEach((selector) => {
  //     heroes.forEach((hero) => {
  //       const option: HTMLOptionElement = document.createElement("option");
  //       option.value = hero.heroName;
  //       option.textContent = hero.heroName;
  //       selector?.appendChild(option);
  //     });

  //     selector.addEventListener("change", () => {
  //       heroes.forEach((hero) => {
  //         selector.value === hero.heroName && heroCardGenerator(hero);
  //       });
  //     });
  //   });
}
