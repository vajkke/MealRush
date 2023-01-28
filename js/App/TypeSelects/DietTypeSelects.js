import PageView from "../Display/PageView.js";
import { recipesData } from "../Display/APIFetch.js";
let recipeArray = [];
let dietTypeOptions = [];
let mealTypeOptions = [];
let removedDietTypeOptions = [];

const DietTypeSelects = () => {
  const dietOptions = document.querySelectorAll(".diet-option");
  const dietOptionsArray = Array.from(dietOptions);

  const activeEffect = `background: #A8DADC; color: #F7F7F7; transition: 300ms;`;
  const deactiveEffect = `background: transparent; color: #000; transition: 300ms;`;

  // ANIMATION
  dietOptionsArray.forEach((option) => {
    option.addEventListener("click", () => {
      if (option.getAttribute("data-active") === "no") {
        option.style.cssText = activeEffect;
        option.setAttribute("data-active", "yes");
      } else if (option.getAttribute("data-active") === "yes") {
        option.style.cssText = deactiveEffect;
        option.setAttribute("data-active", "no");
      }
    });
  });

  // FUNCTIONS

  dietOptionsArray.forEach((option) => {
    let dietOption = option
      .getAttribute("class")
      .split(" ")
      .pop()
      .split("-")
      .shift();
    option.addEventListener("click", () => {
      if (option.getAttribute("data-active") === "yes") {
        recipeArray = [];
        dietTypeOptions.push(dietOption);
        recipesData.forEach((recipe) => {
          const recipeDietTypes = recipe.dietType;
          if (recipeDietTypes.some((diet) => dietTypeOptions.includes(diet))) {
            recipeArray.push(recipe);
          }
        });
        PageView(recipeArray, mealTypeOptions, dietTypeOptions);
      }

      if (option.getAttribute("data-active") === "no") {
        recipeArray = [];
        removedDietTypeOptions.push(dietOption);
        let filteredArray = dietTypeOptions.filter(
          (diet) => diet !== dietOption
        );
        dietTypeOptions = filteredArray;
        recipesData.forEach((recipe) => {
          const recipeDietTypes = recipe.dietType;
          if (recipeDietTypes.some((diet) => dietTypeOptions.includes(diet))) {
            recipeArray.push(recipe);
          }
        });
        PageView(recipeArray, mealTypeOptions, dietTypeOptions, dietOption);
      }
    });
  });
};

export default DietTypeSelects;
