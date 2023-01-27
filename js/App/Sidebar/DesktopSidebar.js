import { DietTypeSelects, MealTypeSelects } from "../TypeSelects/TypeSelect.js";
import Slider from "../Sliders/Slider.js";

const sidebarElement = document.querySelector(".sidebar");

const sidebarContentHTML = `          <div class="sidebar-content">
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
<div class="diet-type--container">
  <h3 class="type--heading">Diet Type</h3>
  <div class="type--options">
    <ul class="left-side--options">
      <li data-active="no" class="diet-option option vegetarian-option">
        🥝 Vegetarian
      </li>
      <li data-active="no" class="diet-option option glutenfree-option">
        🆓 Gluten Free
      </li>
      <li data-active="no" class="diet-option option pescetarian-option">
        🐟 Pescetarian
      </li>
    </ul>
    <ul class="right-side--options">
      <li data-active="no" class="diet-option option vegan-option">🥗 Vegan</li>
      <li data-active="no" class="diet-option option keto-option">🔥 Keto</li>
      <li data-active="no" class="diet-option option paleo-option">🥚 Paleo</li>
    </ul>
  </div>
</div>

<div class="meal-type--container">
  <h3 class="type--heading">Meal Type</h3>
  <div class="type--options">
    <ul class="left-side--options">
      <li data-active="no" class="meal-option option breakfast-option">
        🍳 Breakfast
      </li>
      <li data-active="no" class="meal-option option lunch-option">🥘 Lunch</li>
      <li data-active="no" class="meal-option option dinner-option">🍚 Dinner</li>
      <li data-active="no" class="meal-option option snacks-option">🍿 Snacks</li>
    </ul>
    <ul class="right-side--options">
      <li data-active="no" class="meal-option option dessert-option">
        🍰 Dessert
      </li>
      <li data-active="no" class="meal-option option appetizer-option">
        🍲 Appetizer
      </li>
      <li data-active="no" class="meal-option option salad-option">🥗 Salad</li>
      <li data-active="no" class="meal-option option smoothie-option">
        🥛 Smoothie
      </li>
    </ul>
  </div>
</div>
</div>`;

const DesktopSidebar = () => {
  sidebarElement.innerHTML = sidebarContentHTML;
  DietTypeSelects();
  MealTypeSelects();
  Slider();
};

export default DesktopSidebar;
