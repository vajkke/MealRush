import RecipeView from '../Display/RecipeView.js';
import { recipesData } from '../Display/APIFetch.js';
const searchBarForm = document.querySelector('.search-bar--form');
const searchBar = document.querySelector('.search-bar');
let recipeArray = [];

const SearchBar = () => {
  searchBarForm.addEventListener('submit', e => {
    e.preventDefault();
    recipeArray = [];
    let searchValue = searchBar.value;
    recipesData.forEach(recipe => {
      const recipeName = recipe.name.toLowerCase();
      if (recipeName.includes(searchValue.toLowerCase())) {
        recipeArray.push(recipe);
      }
    });
    RecipeView(recipeArray);
  });
};

export default SearchBar;
