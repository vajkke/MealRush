import RecipeView from './RecipeView.js';
let recipeArray = [];
let recipesSetArray = [];
let recipesDisplayArray = [];
let tempRecipeArray = [];

let removedRecipeArray = [];

let mealTypeArray = [];
let mealTypeSetArray = [];
let dietTypeArray = [];
let dietTypeSetArray = [];

const PageView = (recipes, mealTypes, dietTypes, removedDietTypeOptions) => {
  recipeArray.push(...recipes);
  recipesSetArray = [...new Set(recipeArray)];

  mealTypeArray.push(...mealTypes);
  mealTypeSetArray = [...new Set(mealTypeArray)];
  dietTypeArray.push(...dietTypes);
  dietTypeSetArray = [...new Set(dietTypeArray)];

  if (
    removedDietTypeOptions &&
    dietTypeArray.some(diet => removedDietTypeOptions.includes(diet))
  ) {
    dietTypeArray = dietTypeArray.filter(
      diet => !removedDietTypeOptions.includes(diet)
    );
    dietTypeSetArray = dietTypeSetArray.filter(
      diet => !removedDietTypeOptions.includes(diet)
    );
  }

  // console.log(removedDietTypeOptions);
  // console.log(recipeArray);
  // console.log(recipesSetArray);
  // console.log(mealTypeArray, dietTypeArray);
  // console.log(mealTypeSetArray, dietTypeSetArray);

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
  } else if (removedDietTypeOptions) {
    recipesSetArray.forEach(recipe => {
      if (
        recipe.dietType.some(diet => !removedDietTypeOptions.includes(diet)) &&
        recipe.mealType.some(meal => mealTypeSetArray.includes(meal))
      ) {
        removedRecipeArray.push(recipe);
      }
    });
    RecipeView(removedRecipeArray);
  } else {
    RecipeView(recipesSetArray);
  }
};

export default PageView;
