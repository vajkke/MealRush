import { minValCalories, maxValCalories } from "../Sliders/CaloriesSlider.js";
import { minValProtein, maxValProtein } from "../Sliders/ProteinSlider.js";
import { minValCarbs, maxValCarbs } from "../Sliders/CarbsSlider.js";
import { minValFat, maxValFat } from "../Sliders/FatSlider.js";
import RecipeView from "./RecipeView.js";

let recipeArray = [];
let tempRecipeArray = [];
let recipesDisplayArray = [];

const SliderRecipeView = (recipes) => {
  if (recipes) {
    recipeArray.push(...recipes);
  }

  if (
    minValCalories ||
    maxValCalories ||
    minValProtein ||
    maxValProtein ||
    minValCarbs ||
    maxValCarbs ||
    minValFat ||
    maxValFat
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
    RecipeView(recipesDisplayArray);
  }
};

export default SliderRecipeView;
