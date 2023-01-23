import RecipeView from "../Display/RecipeView.js";
import SliderRecipeView from "../Display/SliderRecipesView.js";
import { recipesData } from "../Display/APIFetch.js";
const searchBarForm = document.querySelector(".search-bar--form");
const searchBar = document.querySelector(".search-bar");

let recipeArray = [];
let mealTypeOptions = [];
let dietTypeOptions = [];

const SearchBar = () => {
  searchBarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    recipeArray = [];
    mealTypeOptions = [];
    dietTypeOptions = [];
    let searchValue = searchBar.value;
    recipesData.forEach((recipe) => {
      const recipeName = recipe.name.toLowerCase();
      if (recipeName.includes(searchValue.toLowerCase())) {
        recipeArray.push(recipe);
        mealTypeOptions.push(recipe.mealType);
        dietTypeOptions.push(recipe.dietType);
      }
    });
    // RecipeView(recipeArray);
    SliderRecipeView(recipeArray);
  });
};

export default SearchBar;
