import RecipeView from "./RecipeView.js";
import SliderRecipeView from "./SliderRecipesView.js";

let recipeArray = [];
let recipesSetArray = [];
let recipesDisplayArray = [];
let tempRecipeArray = [];

let mealTypeArray = [];
let mealTypeSetArray = [];
let dietTypeArray = [];
let dietTypeSetArray = [];

const PageView = (recipes, mealTypes, dietTypes, deletedType) => {
  recipeArray.push(...recipes);
  recipesSetArray = [...new Set(recipeArray)];

  mealTypeArray.push(...mealTypes);
  mealTypeSetArray = [...new Set(mealTypeArray)];
  dietTypeArray.push(...dietTypes);
  dietTypeSetArray = [...new Set(dietTypeArray)];

  if (deletedType) {
    if (dietTypeArray.includes(deletedType)) {
      dietTypeArray = dietTypeArray.filter((item) => item !== deletedType);
      dietTypeSetArray = dietTypeSetArray.filter(
        (item) => item !== deletedType
      );
    }
    if (mealTypeArray.includes(deletedType)) {
      mealTypeArray = mealTypeArray.filter((item) => item !== deletedType);
      mealTypeSetArray = mealTypeSetArray.filter(
        (item) => item !== deletedType
      );
    }
  }

  if (mealTypeSetArray.length > 0 && dietTypeSetArray.length > 0) {
    tempRecipeArray = [];
    recipesSetArray.forEach((recipe) => {
      if (
        recipe.dietType.some((diet) => dietTypeSetArray.includes(diet)) &&
        recipe.mealType.some((meal) => mealTypeSetArray.includes(meal))
      ) {
        tempRecipeArray.push(recipe);
        recipesDisplayArray = [...new Set(tempRecipeArray)];
      }
    });
    SliderRecipeView(recipesDisplayArray);
  } else if (mealTypeSetArray.length > 0 && deletedType) {
    recipesSetArray.forEach((recipe) => {
      if (recipe.mealType.some((meal) => mealTypeSetArray.includes(meal))) {
        tempRecipeArray.push(recipe);
        recipesDisplayArray = [...new Set(tempRecipeArray)];
      }
    });
    SliderRecipeView(recipesDisplayArray);
  } else if (dietTypeSetArray.length > 0 && deletedType) {
    recipesSetArray.forEach((recipe) => {
      if (recipe.dietType.some((diet) => dietTypeSetArray.includes(diet))) {
        tempRecipeArray.push(recipe);
        recipesDisplayArray = [...new Set(tempRecipeArray)];
      }
    });
    SliderRecipeView(recipesDisplayArray);
  } else if (dietTypeSetArray.length === 0 && mealTypeSetArray.length === 0) {
    recipeArray = [];
    SliderRecipeView(recipeArray);
  } else {
    SliderRecipeView(recipesSetArray);
  }
};

export default PageView;
