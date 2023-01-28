const recipeDisplay = document.querySelector(".recipe-display");
const recipeMatchedContainer = document.querySelector(".recipe-matched-text");
const illustration = document.querySelector(".illustration-container");
const loader = document.querySelector(".loader");

const RecipeView = (recipeArray) => {
  const matchedHTML = `<p class="recipe-matched-text">We've found 
                       <span class="recipe-matched-number">${recipeArray.length}</span> recipes
                       </p> `;

  const noMatchIllustration = `<img src="./img/noResult.png" class="illustration-img">
                                  <p class="illustration-text">Nothing to find here</p>`;

  recipeMatchedContainer.innerHTML = "";
  loader.style.display = "flex";
  recipeDisplay.innerHTML = loader.outerHTML;

  setTimeout(() => {
    if (recipeArray.length < 1) {
      illustration.innerHTML = noMatchIllustration;
      recipeMatchedContainer.innerHTML = "";
      recipeDisplay.innerHTML = illustration.outerHTML;
    } else {
      recipeMatchedContainer.innerHTML = matchedHTML;
      let recipeHTML = ``;
      recipeArray.map((recipe) => {
        recipeHTML += recipeHTML = `
      <div class="recipe-container">
      <div class="top-side">
      <div class="recipe-image--container">
        <img src=${recipe.image} class=recipe-image />
      </div>
        <div class="right-top-side">
          <h2 class="recipe-heading">${recipe.name}</h2>
          <h3 class="recipe--diet-types">
            <span class="first-recipe--diet-type recipe--diet-type"
              >${recipe.dietType[0]}</span
            >
            <span class="second-recipe--diet-type recipe--diet-type"
              >${recipe.dietType[1] ? `& ${recipe.dietType[1]}` : ""}</span
            >
          </h3>
        </div>
      </div>
  
      <div class="bottom-side">
        <div class="left-bottom-side">
          <h2 class="ingredients-heading">Ingredients</h2>
          <ul class="ingredients-list">
            <li class="ingredient">
              <span class="ingredient-value">${
                Object.values(recipe.ingredients[0])[0]
              }</span>
              <span class="ingredients-name">${
                Object.keys(recipe.ingredients[0])[0]
              }</span>
            </li>
            <li class="ingredient">
              <span class="ingredient-value">${
                Object.values(recipe.ingredients[0])[1]
              }</span>
              <span class="ingredients-name">${
                Object.keys(recipe.ingredients[0])[1]
              }</span>
            </li>
            <li class="ingredient">
              <span class="ingredient-value">${
                Object.values(recipe.ingredients[0])[2]
              }</span>
              <span class="ingredients-name">${
                Object.keys(recipe.ingredients[0])[2]
              }</span>
            </li>
            <li class="ingredient">
              <span class="ingredient-value">${
                Object.values(recipe.ingredients[0])[3]
              }</span>
              <span class="ingredients-name">${
                Object.keys(recipe.ingredients[0])[3]
              }</span>
            </li>
            <li class="ingredient">
              <span class="ingredient-value">${
                Object.values(recipe.ingredients[0])[4]
              }</span>
              <span class="ingredients-name"
                >${Object.keys(recipe.ingredients[0])[4]}</span
              >
            </li>
          </ul>
        </div>
        <div class="right-bottom-side">
          <h2 class="recipe-nutrition-heading">Nutrition</h2>
          <ul class="nutritions-list">
            <li class="nutrition">
              <span class="calories">Calories: </span>
              <span class="calories-value nutrition-value">${
                recipe.nutrition[0].calories
              }kcal</span>
            </li>
            <li class="nutrition">
              <span class="protein">Protein: </span>
              <span class="protein-value nutrition-value">${
                recipe.nutrition[0].protein
              }</span>
            </li>
            <li class="nutrition">
              <span class="carbs">Carbs: </span>
              <span class="carbs-value nutrition-value">${
                recipe.nutrition[0].carbs
              }</span>
            </li>
            <li class="nutrition">
              <span class="fat">Fat: </span>
              <span class="fat-value nutrition-value">${
                recipe.nutrition[0].fat
              }</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="button">
        <p class="full-recipe">Full Recipe</p>
      </div>
      </div>`;

        recipeDisplay.innerHTML = recipeHTML;
      });
    }
  }, 2500);
};

export default RecipeView;
