import SliderRecipeView from "../Display/SliderRecipesView.js";

export let minValProtein = 0;
export let maxValProtein = 100;

export const ProteinSlider = () => {
  const rangeInput = document.querySelectorAll(".protein-range input");
  const range = document.querySelector(".protein--slider .protein--progress");
  const maxValueDisplay = document.querySelector(".protein--max-value");
  const minValueDisplay = document.querySelector(".protein--min-value");
  let valueGap = 1;

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      minValProtein = parseInt(rangeInput[0].value);
      maxValProtein = parseInt(rangeInput[1].value);

      if (maxValProtein - minValProtein < valueGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxValProtein - valueGap;
        } else {
          rangeInput[1].value = minValProtein + valueGap;
        }
      } else {
        minValueDisplay.innerHTML = minValProtein;
        maxValueDisplay.innerHTML = maxValProtein;
        range.style.left = (minValProtein / rangeInput[0].max) * 100 + "%";
        range.style.right =
          100 - (maxValProtein / rangeInput[1].max) * 100 + "%";
      }

      SliderRecipeView(0);
    });
  });
};
