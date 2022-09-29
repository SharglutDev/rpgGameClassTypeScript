import { heroes } from "../data/heroesList";

export const heroSelectorGenerator = (selector: any) => {
  heroes.forEach((hero) => {
    const option: HTMLOptionElement = document.createElement("option");
    option.value = hero.heroName;
    option.textContent = hero.heroName;
    selector?.appendChild(option);
  });
};
