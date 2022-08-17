import RecipeView from './RecipeView.js';
let recipeArray = [];
let recipesDisplayArray = [];

const PageView = recipes => {
  recipeArray.push(...recipes);
  recipesDisplayArray = [...new Set(recipeArray)];

  RecipeView(recipesDisplayArray);
};

export default PageView;
