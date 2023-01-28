import RecipeView from "../Display/RecipeView.js";

let recipeArray = [];

const SortingFunction = (recipes) => {
  const sortElement = document.querySelector(".sort");

  let defaultOption = sortElement.options[0];

  sortElement.selectedIndex = defaultOption;

  const caloriesLowToHigh = sortElement.options[1].value;
  const caloriesHighToLow = sortElement.options[2].value;
  const proteinLowToHigh = sortElement.options[3].value;
  const proteinHighToLow = sortElement.options[4].value;
  const carbsLowToHigh = sortElement.options[5].value;
  const carbsHighToLow = sortElement.options[6].value;
  const fatLowToHigh = sortElement.options[7].value;
  const fatHighToLow = sortElement.options[8].value;

  sortElement.addEventListener("change", () => {
    // calories
    if (sortElement.value === caloriesLowToHigh) {
      recipeArray = recipes.sort(function (a, b) {
        return a.nutrition[0].calories - b.nutrition[0].calories;
      });
      RecipeView(recipeArray);
    } else if (sortElement.value === caloriesHighToLow) {
      recipeArray = recipes.sort(function (a, b) {
        return b.nutrition[0].calories - a.nutrition[0].calories;
      });
      RecipeView(recipeArray);
    }

    //protein
    if (sortElement.value === proteinLowToHigh) {
      recipeArray = recipes.sort(function (a, b) {
        return (
          parseInt(a.nutrition[0].protein) - parseInt(b.nutrition[0].protein)
        );
      });
      RecipeView(recipeArray);
    } else if (sortElement.value === proteinHighToLow) {
      recipeArray = recipes.sort(function (a, b) {
        return (
          parseInt(b.nutrition[0].protein) - parseInt(a.nutrition[0].protein)
        );
      });
      RecipeView(recipeArray);
    }

    // carbs
    if (sortElement.value === carbsLowToHigh) {
      recipeArray = recipes.sort(function (a, b) {
        return parseInt(a.nutrition[0].carbs) - parseInt(b.nutrition[0].carbs);
      });
      RecipeView(recipeArray);
    } else if (sortElement.value === carbsHighToLow) {
      recipeArray = recipes.sort(function (a, b) {
        return parseInt(b.nutrition[0].carbs) - parseInt(a.nutrition[0].carbs);
      });
      RecipeView(recipeArray);
    }

    //fat
    if (sortElement.value === fatLowToHigh) {
      recipeArray = recipes.sort(function (a, b) {
        return parseInt(a.nutrition[0].fat) - parseInt(b.nutrition[0].fat);
      });
      RecipeView(recipeArray);
    } else if (sortElement.value === fatHighToLow) {
      recipeArray = recipes.sort(function (a, b) {
        return parseInt(b.nutrition[0].fat) - parseInt(a.nutrition[0].fat);
      });
      RecipeView(recipeArray);
    }
  });
};

export default SortingFunction;
