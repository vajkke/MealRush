import { recipesData } from '../Display/APIFetch.js';

const CaloriesDefaultValues = () => {
  const caloriesValueArray = [];
  const caloriesMaxRange = document.querySelector('.calories--range-max');
  const caloriesMinRange = document.querySelector('.calories--range-min');
  const maxValueDisplay = document.querySelector('.calories--max-value');
  const minValueDisplay = document.querySelector('.calories--min-value');

  recipesData.forEach(recipe => {
    caloriesValueArray.push(recipe.nutrition[0].calories);
  });

  let calorieMax = Math.ceil((Math.max(...caloriesValueArray) + 1) / 10) * 10;
  let calorieMin = Math.floor((Math.min(...caloriesValueArray) + 1) / 10) * 10;
  maxValueDisplay.innerHTML = calorieMax;
  caloriesMaxRange.setAttribute('max', calorieMax);
  caloriesMaxRange.setAttribute('value', calorieMax);
  minValueDisplay.innerHTML = calorieMin;
  caloriesMinRange.setAttribute('min', calorieMin);
  caloriesMinRange.setAttribute('value', calorieMin);
};

export default CaloriesDefaultValues;
