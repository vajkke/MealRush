import { recipesData } from '../Display/APIFetch.js';

const CarbsDefaultValues = () => {
  const carbsValueArray = [];
  const carbsMaxRange = document.querySelector('.carbs--range-max');
  const carbsMinRange = document.querySelector('.carbs--range-min');
  const maxValueDisplay = document.querySelector('.carbs--max-value');
  const minValueDisplay = document.querySelector('.carbs--min-value');

  recipesData.forEach(recipe => {
    carbsValueArray.push(recipe.nutrition[0].carbs.slice(0, -1));
  });

  let carbMax = Math.max(...carbsValueArray);
  let carbMin = Math.min(...carbsValueArray);
  maxValueDisplay.innerHTML = carbMax;
  carbsMaxRange.setAttribute('max', carbMax);
  carbsMaxRange.setAttribute('value', carbMax);
  minValueDisplay.innerHTML = carbMin;
  carbsMinRange.setAttribute('min', carbMin);
  carbsMinRange.setAttribute('value', carbMin);
};

export default CarbsDefaultValues;
