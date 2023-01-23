import SliderRecipeView from "../Display/SliderRecipesView.js";

export let minValCarbs = 0;
export let maxValCarbs = 100;

export const CarbsSlider = () => {
  const rangeInput = document.querySelectorAll(".carbs-range input");
  const range = document.querySelector(".carbs--slider .carbs--progress");
  const maxValueDisplay = document.querySelector(".carbs--max-value");
  const minValueDisplay = document.querySelector(".carbs--min-value");
  let valueGap = 1;

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      minValCarbs = parseInt(rangeInput[0].value);
      maxValCarbs = parseInt(rangeInput[1].value);

      if (maxValCarbs - minValCarbs < valueGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxValCarbs - valueGap;
        } else {
          rangeInput[1].value = minValCarbs + valueGap;
        }
      } else {
        minValueDisplay.innerHTML = minValCarbs;
        maxValueDisplay.innerHTML = maxValCarbs;
        range.style.left = (minValCarbs / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxValCarbs / rangeInput[1].max) * 100 + "%";
      }

      SliderRecipeView(0);
    });
  });
};
