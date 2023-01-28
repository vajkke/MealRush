import { minValCalories, maxValCalories } from "../Sliders/CaloriesSlider.js";
import { minValProtein, maxValProtein } from "../Sliders/ProteinSlider.js";
import { minValCarbs, maxValCarbs } from "../Sliders/CarbsSlider.js";
import { minValFat, maxValFat } from "../Sliders/FatSlider.js";
import RecipeView from "./RecipeView.js";
import SearchButton from "./SearchButton.js";

import { recipesData } from "../Display/APIFetch.js";
import DietTypeSelects from "../TypeSelects/DietTypeSelects.js";

let recipeArray = [];
let sliderRecipeArray = [];
let tempRecipeArray = [];
let recipesDisplayArray = [];

const SliderRecipeView = (recipes) => {
  if (recipes) {
    recipeArray = [];
    // ako primam recepte iz PageView
    recipeArray.push(...recipes);
  } else if (!recipes) {
    // ako primam recepte iz slidera
    sliderRecipeArray.push(...recipesData);
  }

  if (
    sliderRecipeArray.length > 1 &&
    recipeArray.length < 1 &&
    (minValCalories ||
      maxValCalories ||
      minValProtein ||
      maxValProtein ||
      minValCarbs ||
      maxValCarbs ||
      minValFat ||
      maxValFat)
  ) {
    tempRecipeArray = sliderRecipeArray.filter(
      (recipe) =>
        +recipe.nutrition[0].calories >= minValCalories &&
        +recipe.nutrition[0].calories <= maxValCalories &&
        parseInt(recipe.nutrition[0].protein) >= minValProtein &&
        parseInt(recipe.nutrition[0].protein) <= maxValProtein &&
        parseInt(recipe.nutrition[0].carbs) >= minValCarbs &&
        parseInt(recipe.nutrition[0].carbs) <= maxValCarbs &&
        parseInt(recipe.nutrition[0].fat) >= minValFat &&
        parseInt(recipe.nutrition[0].fat) <= maxValFat
    );
    recipesDisplayArray = [...new Set(tempRecipeArray)];
    SearchButton(recipesDisplayArray);
  }

  if (
    recipeArray.length > 1 &&
    (minValCalories ||
      maxValCalories ||
      minValProtein ||
      maxValProtein ||
      minValCarbs ||
      maxValCarbs ||
      minValFat ||
      maxValFat)
  ) {
    tempRecipeArray = recipeArray.filter(
      (recipe) =>
        +recipe.nutrition[0].calories >= minValCalories &&
        +recipe.nutrition[0].calories <= maxValCalories &&
        parseInt(recipe.nutrition[0].protein) >= minValProtein &&
        parseInt(recipe.nutrition[0].protein) <= maxValProtein &&
        parseInt(recipe.nutrition[0].carbs) >= minValCarbs &&
        parseInt(recipe.nutrition[0].carbs) <= maxValCarbs &&
        parseInt(recipe.nutrition[0].fat) >= minValFat &&
        parseInt(recipe.nutrition[0].fat) <= maxValFat
    );
    recipesDisplayArray = [...new Set(tempRecipeArray)];
    SearchButton(recipesDisplayArray);
  }
};

export default SliderRecipeView;
