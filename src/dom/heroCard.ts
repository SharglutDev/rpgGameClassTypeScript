import { Hero } from "../class/hero";
import { abilities } from "../data/weaknesses";

export const heroCardGenerator = (hero: Hero, cardColumn: HTMLDivElement) => {
  //   const cardDiv = document.createElement("div");
  //   cardDiv.classList.add("mt-3", "col-6");
  if (cardColumn) {
    cardColumn.innerHTML = `
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title text-center mb-3">${hero.heroName}</h5>
                <ul class="list-group">
                    <li class="list-group-item">${hero.getLife()} HP</li>
                    <li class="list-group-item">Power : ${hero.getPower()}</li>
                </ul>
                <h6 class="card-subtitle my-3 text-muted">Weapon type : ${
                  hero.constructor.name
                }</h6>
                <ul class="list-group">    
                    <li class="list-group-item">Name : ${hero.weapon.name}</li>
                    <li class="list-group-item">Damage : ${
                      hero.weapon.damage
                    } </li>
                    <li class="list-group-item">Strong against : ${
                      abilities[hero.constructor.name]
                    } </li>
                </ul>
            </div>
        </div>
        `;
  }
  //   cardBlock?.appendChild(cardDiv);
};
