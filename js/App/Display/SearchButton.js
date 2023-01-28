import RecipeView from "./RecipeView.js";
import SortingFunction from "../Sort/SortingFunction.js";

let recipeLength;

const SearchButton = (recipes) => {
  const searchBtn = document.querySelector(".search-btn");

  recipeLength = recipes.length;

  searchBtn.addEventListener("click", () => {
    if (recipeLength === recipes.length) {
      RecipeView(recipes);
      SortingFunction(recipes);
    }
  });
};

export default SearchButton;
