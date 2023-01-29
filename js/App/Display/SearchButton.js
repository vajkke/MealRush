import RecipeView from "./RecipeView.js";
import SortingFunction from "../Sort/SortingFunction.js";

import { mobileDisplayDeactive } from "../Sidebar/MobileSidebarFunctions.js";

let recipeLength;

const SearchButton = (recipes) => {
  const searchBtn = document.querySelector(".search-btn");
  const mobileSearchBtn = document.querySelector(".search-btn--mobile");

  recipeLength = recipes.length;

  searchBtn.addEventListener("click", () => {
    if (recipeLength === recipes.length) {
      RecipeView(recipes);
      SortingFunction(recipes);
    }
  });

  // for mobile
  mobileSearchBtn.addEventListener("touchstart", () => {
    if (recipeLength === recipes.length) {
      RecipeView(recipes);
      SortingFunction(recipes);
      mobileDisplayDeactive();
    }
  });
};

export default SearchButton;
