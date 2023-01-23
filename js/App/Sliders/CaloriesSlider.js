import SliderRecipeView from "../Display/SliderRecipesView.js";

export let minValCalories = 0;
export let maxValCalories = 1000;

export const CaloriesSlider = () => {
  const rangeInput = document.querySelectorAll(".calories-range input");
  const range = document.querySelector(".calories--slider .calories--progress");
  const maxValueDisplay = document.querySelector(".calories--max-value");
  const minValueDisplay = document.querySelector(".calories--min-value");

  let valueGap = 10;

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      minValCalories = parseInt(rangeInput[0].value);
      maxValCalories = parseInt(rangeInput[1].value);

      if (maxValCalories - minValCalories < valueGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxValCalories - valueGap;
        } else {
          rangeInput[1].value = minValCalories + valueGap;
        }
      } else {
        minValueDisplay.innerHTML = minValCalories;
        maxValueDisplay.innerHTML = maxValCalories;
        range.style.left = (minValCalories / rangeInput[0].max) * 100 + "%";
        range.style.right =
          100 - (maxValCalories / rangeInput[1].max) * 100 + "%";
      }

      SliderRecipeView(0);
    });
  });
};
