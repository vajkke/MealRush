import RecipeView from "./RecipeView.js";

let recipeLength;

const SearchButton = (recipes) => {
  const searchBtn = document.querySelector(".search-btn");

  recipeLength = recipes.length;

  searchBtn.addEventListener("click", () => {
    if (recipeLength === recipes.length) {
      RecipeView(recipes);
    }
  });
};

export default SearchButton;
