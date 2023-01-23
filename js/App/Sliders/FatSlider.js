import SliderRecipeView from "../Display/SliderRecipesView.js";

export let minValFat = 0;
export let maxValFat = 100;

export const FatSlider = () => {
  const rangeInput = document.querySelectorAll(".fat-range input");
  const range = document.querySelector(".fat--slider .fat--progress");
  const maxValueDisplay = document.querySelector(".fat--max-value");
  const minValueDisplay = document.querySelector(".fat--min-value");
  let valueGap = 1;

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      minValFat = parseInt(rangeInput[0].value);
      maxValFat = parseInt(rangeInput[1].value);

      if (maxValFat - minValFat < valueGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxValFat - valueGap;
        } else {
          rangeInput[1].value = minValFat + valueGap;
        }
      } else {
        minValueDisplay.innerHTML = minValFat;
        maxValueDisplay.innerHTML = maxValFat;
        range.style.left = (minValFat / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxValFat / rangeInput[1].max) * 100 + "%";
      }
      SliderRecipeView(0);
    });
  });
};
