export const resetGame = (
  playBtn: HTMLButtonElement,
  selector1: HTMLSelectElement,
  selector2: HTMLSelectElement,
  hero1CardBlock: HTMLDivElement,
  hero2CardBlock: HTMLDivElement
): void => {
  playBtn.textContent = "Start Fight";
  playBtn.classList.replace("d-block", "d-none");
  // selector1.value = selector1[0].nodeValue
};
