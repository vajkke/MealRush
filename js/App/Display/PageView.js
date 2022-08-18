import RecipeView from './RecipeView.js';
let recipeArray = [];
let recipesSetArray = [];
let recipesDisplayArray = [];
let tempRecipeArray = [];

let mealTypeArray = [];
let mealTypeSetArray = [];
let dietTypeArray = [];
let dietTypeSetArray = [];

const PageView = (recipes, mealTypes, dietTypes) => {
  recipeArray.push(...recipes);
  recipesSetArray = [...new Set(recipeArray)];

  mealTypeArray.push(...mealTypes);
  mealTypeSetArray = [...new Set(mealTypeArray)];
  dietTypeArray.push(...dietTypes);
  dietTypeSetArray = [...new Set(dietTypeArray)];

  if (mealTypeSetArray.length > 0 && dietTypeSetArray.length > 0) {
    recipesSetArray.forEach(recipe => {
      if (
        recipe.dietType.some(diet => dietTypeSetArray.includes(diet)) &&
        recipe.mealType.some(meal => mealTypeSetArray.includes(meal))
      ) {
        tempRecipeArray.push(recipe);
        recipesDisplayArray = [...new Set(tempRecipeArray)];
      }
    });
    RecipeView(recipesDisplayArray);
  } else {
    RecipeView(recipesSetArray);
  }
};

export default PageView;
