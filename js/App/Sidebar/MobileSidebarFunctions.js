import { MealTypeSelects, DietTypeSelects } from "../TypeSelects/TypeSelect.js";
import Slider from "../Sliders/Slider.js";

// Buttons

const nutritionMobileBtn = document.querySelector(".nutrition-mobile-menu ");
const dietTypeMobileBtn = document.querySelector(".dietType-mobile-menu ");
const mealTypeMobileBtn = document.querySelector(".mealType-mobile-menu ");
const mobileMenuDisplay = document.querySelector(".mobile-menu--display");

// HTML CONTENT

const nutritionHTML = `
<div class="nutrition--container">
<h3 class="nutrition-main-heading">Nutrition</h3>
<div class="calories--container container">
  <p class="nutrition-heading">Calories</p>
  <div class="value-display">
    <p><span class="calories--min-value">0</span>kcal</p>
    <div class="separator">-</div>
    <p><span class="calories--max-value">1000</span>kcal</p>
  </div>
  <div class="calories--slider slider">
    <div class="calories--progress progress"></div>
  </div>
  <div class="calories-range range-input">
    <input
      type="range"
      class="calories--range-min"
      min="0"
      max="1000"
      value="0"
      step="10"
    />
    <input
      type="range"
      class="calories--range-max"
      min="0"
      max="1000"
      value="1000"
      step="10"
    />
  </div>
</div>

<div class="protein--container container">
  <p class="nutrition-heading">Protein</p>
  <div class="value-display">
    <p><span class="protein--min-value">0</span>g</p>
    <div class="separator">-</div>
    <p><span class="protein--max-value">100</span>g</p>
  </div>
  <div class="protein--slider slider">
    <div class="protein--progress progress"></div>
  </div>
  <div class="protein-range range-input">
    <input
      type="range"
      class="protein--range-min"
      min="0"
      max="100"
      value="0"
      step="1"
    />
    <input
      type="range"
      class="protein--range-max"
      min="0"
      max="100"
      value="100"
      step="1"
    />
  </div>
</div>

<div class="carbs--container container">
  <p class="nutrition-heading">Carbs</p>
  <div class="value-display">
    <p><span class="carbs--min-value">0</span>g</p>
    <div class="separator">-</div>
    <p><span class="carbs--max-value">100</span>g</p>
  </div>
  <div class="carbs--slider slider">
    <div class="carbs--progress progress"></div>
  </div>
  <div class="carbs-range range-input">
    <input
      type="range"
      class="carbs--range-min"
      min="0"
      max="100"
      value="0"
      step="1"
    />
    <input
      type="range"
      class="carbs--range-max"
      min="0"
      max="100"
      value="100"
      step="1"
    />
  </div>
</div>
<div class="fat--container container">
  <p class="nutrition-heading">Fats</p>
  <div class="value-display">
    <p><span class="fat--min-value">0</span>g</p>
    <div class="separator">-</div>
    <p><span class="fat--max-value">100</span>g</p>
  </div>
  <div class="fat--slider slider">
    <div class="fat--progress progress"></div>
  </div>
  <div class="fat-range range-input">
    <input
      type="range"
      class="fat--range-min"
      min="0"
      max="100"
      value="0"
      step="1"
    />
    <input
      type="range"
      class="fat--range-max"
      min="0"
      max="100"
      value="100"
      step="1"
    />
  </div>
</div>
</div>
`;

const dietTypeHTML = `
<div class="diet-type--container">
<h3 class="type--heading">Diet Type</h3>
<p data-active="no" class="diet-noPref--option option">
  No Preference
</p>
<div class="type--options">
  <ul class="left-side--options">
    <li data-active="no" class="diet-option option">
      🥝 Vegetarian
    </li>
    <li data-active="no" class="diet-option option">
      🆓 Gluten Free
    </li>
    <li data-active="no" class="diet-option option">
      🐟 Pescetarian
    </li>
  </ul>
  <ul class="right-side--options">
    <li data-active="no" class="diet-option option">🥗 Vegan</li>
    <li data-active="no" class="diet-option option">🔥 Keto</li>
    <li data-active="no" class="diet-option option">🥚 Paleo</li>
  </ul>
</div>
</div>
`;

const mealTypeHTML = `
<div class="meal-type--container">
<h3 class="type--heading">Meal Type</h3>
<p data-active="no" class="meal-noPref--option option">
  No Preference
</p>
<div class="type--options">
  <ul class="left-side--options">
    <li data-active="no" class="meal-option option">
      🍳 Breakfast
    </li>
    <li data-active="no" class="meal-option option">🥘 Lunch</li>
    <li data-active="no" class="meal-option option">🍚 Dinner</li>
    <li data-active="no" class="meal-option option">🍿 Snack</li>
  </ul>
  <ul class="right-side--options">
    <li data-active="no" class="meal-option option">🍰 Dessert</li>
    <li data-active="no" class="meal-option option">
      🍲 Appetizer
    </li>
    <li data-active="no" class="meal-option option">🥗 Salad</li>
    <li data-active="no" class="meal-option option">🥛 Smoothie</li>
  </ul>
</div>
</div>
`;

// EFFECTS

const mobileIconActiveStyle = `opacity: 0.75; box-shadow: 5px 0px 10px 0px #aaa;`;
const mobileIconDeactiveStyle = `opacity: ''; box-shadow: ''`;
const overlay = document.querySelector(".overlay");

let activeMobileIconNutrition = false;
let activeMobileIconMeal = false;
let activeMobileIconDiet = false;

const nutritionActive = () => {
  overlay.classList.remove("hidden");
  mealTypeMobileBtn.style.cssText = mobileIconDeactiveStyle;
  dietTypeMobileBtn.style.cssText = mobileIconDeactiveStyle;
  nutritionMobileBtn.style.cssText = mobileIconActiveStyle;
  mobileMenuDisplay.innerHTML = nutritionHTML;
  activeMobileIconNutrition = true;
  activeMobileIconMeal = false;
  activeMobileIconDiet = false;
  Slider();
};

const dietTypeActive = () => {
  overlay.classList.remove("hidden");
  nutritionMobileBtn.style.cssText = mobileIconDeactiveStyle;
  mealTypeMobileBtn.style.cssText = mobileIconDeactiveStyle;
  dietTypeMobileBtn.style.cssText = mobileIconActiveStyle;
  mobileMenuDisplay.innerHTML = dietTypeHTML;
  activeMobileIconDiet = true;
  activeMobileIconMeal = false;
  activeMobileIconNutrition = false;
  DietTypeSelects();
};

const mealTypeActive = () => {
  overlay.classList.remove("hidden");
  nutritionMobileBtn.style.cssText = mobileIconDeactiveStyle;
  dietTypeMobileBtn.style.cssText = mobileIconDeactiveStyle;
  mealTypeMobileBtn.style.cssText = mobileIconActiveStyle;
  mobileMenuDisplay.innerHTML = mealTypeHTML;
  activeMobileIconMeal = true;
  activeMobileIconDiet = false;
  activeMobileIconNutrition = false;
  MealTypeSelects();
};

const mobileDisplayDeactive = () => {
  overlay.classList.add("hidden");
  nutritionMobileBtn.style.cssText = mobileIconDeactiveStyle;
  dietTypeMobileBtn.style.cssText = mobileIconDeactiveStyle;
  mealTypeMobileBtn.style.cssText = mobileIconDeactiveStyle;
  mobileMenuDisplay.innerHTML = "";
};

// FUNCTION //

const MobileFunctions = () => {
  nutritionMobileBtn.addEventListener("click", () => {
    if (!activeMobileIconNutrition) {
      nutritionActive();
    } else if (activeMobileIconNutrition) {
      mobileDisplayDeactive();
      activeMobileIconNutrition = false;
    }
  });

  dietTypeMobileBtn.addEventListener("click", () => {
    if (!activeMobileIconDiet) {
      dietTypeActive();
    } else if (activeMobileIconDiet) {
      mobileDisplayDeactive();
      activeMobileIconDiet = false;
    }
  });

  mealTypeMobileBtn.addEventListener("click", () => {
    if (!activeMobileIconMeal) {
      mealTypeActive();
    } else if (activeMobileIconMeal) {
      mobileDisplayDeactive();
      activeMobileIconMeal = false;
    }
  });

  overlay.addEventListener("click", () => {
    mobileDisplayDeactive();
  });
};

export default MobileFunctions;
