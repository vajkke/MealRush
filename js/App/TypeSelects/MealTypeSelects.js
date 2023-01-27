import PageView from "../Display/PageView.js";
import { recipesData } from "../Display/APIFetch.js";
let recipeArray = [];
let mealTypeOptions = [];
let dietTypeOptions = [];
let removedMealTypeOptions = [];

const MealTypeSelects = () => {
  const activeEffect = `background: #A8DADC; color: #F7F7F7; transition: 300ms;`;
  const deactiveEffect = `background: transparent; color: #000; transition: 300ms;`;

  const mealOptions = document.querySelectorAll(".meal-option");
  const mealOptionsArray = Array.from(mealOptions);

  // ANIMATIONS

  mealOptionsArray.forEach((option) => {
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

  mealOptionsArray.forEach((option) => {
    let mealOption = option
      .getAttribute("class")
      .split(" ")
      .pop()
      .split("-")
      .shift();

    option.addEventListener("click", () => {
      if (option.getAttribute("data-active") === "yes") {
        recipeArray = [];
        mealTypeOptions.push(mealOption);
        recipesData.forEach((recipe) => {
          const recipemealTypes = recipe.mealType;
          if (recipemealTypes.some((meal) => mealTypeOptions.includes(meal))) {
            recipeArray.push(recipe);
          }
        });
        PageView(recipeArray, mealTypeOptions, dietTypeOptions);
      }
      if (option.getAttribute("data-active") === "no") {
        recipeArray = [];
        removedMealTypeOptions.push(mealOption);
        let filteredArray = mealTypeOptions.filter(
          (meal) => meal !== mealOption
        );
        mealTypeOptions = filteredArray;
        recipesData.forEach((recipe) => {
          const recipemealTypes = recipe.mealType;
          if (recipemealTypes.some((meal) => mealTypeOptions.includes(meal))) {
            recipeArray.push(recipe);
          }
        });
        PageView(recipeArray, mealTypeOptions, dietTypeOptions, mealOption);
      }
    });
  });
};

export default MealTypeSelects;
