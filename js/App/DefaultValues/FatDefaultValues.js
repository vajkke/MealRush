import { recipesData } from '../Display/APIFetch.js';

const FatDefaultValues = () => {
  const fatValueArray = [];
  const fatMaxRange = document.querySelector('.fat--range-max');
  const fatMinRange = document.querySelector('.fat--range-min');
  const maxValueDisplay = document.querySelector('.fat--max-value');
  const minValueDisplay = document.querySelector('.fat--min-value');

  recipesData.forEach(recipe => {
    fatValueArray.push(recipe.nutrition[0].fat.slice(0, -1));
  });

  let fatMax = Math.max(...fatValueArray);
  let fatMin = Math.min(...fatValueArray);
  maxValueDisplay.innerHTML = fatMax;
  fatMaxRange.setAttribute('max', fatMax);
  fatMaxRange.setAttribute('value', fatMax);
  minValueDisplay.innerHTML = fatMin;
  fatMinRange.setAttribute('min', fatMin);
  fatMinRange.setAttribute('value', fatMin);
};

export default FatDefaultValues;
