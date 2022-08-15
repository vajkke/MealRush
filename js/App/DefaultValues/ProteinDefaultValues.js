import { recipesData } from '../Display/APIFetch.js';

const ProteinDefaultValues = () => {
  const proteinValueArray = [];
  const proteinMaxRange = document.querySelector('.protein--range-max');
  const proteinMinRange = document.querySelector('.protein--range-min');
  const maxValueDisplay = document.querySelector('.protein--max-value');
  const minValueDisplay = document.querySelector('.protein--min-value');

  recipesData.forEach(recipe => {
    proteinValueArray.push(recipe.nutrition[0].protein.slice(0, -1));
  });

  let proteinMax = Math.max(...proteinValueArray);
  let proteinMin = Math.min(...proteinValueArray);
  maxValueDisplay.innerHTML = proteinMax;
  proteinMaxRange.setAttribute('max', proteinMax);
  proteinMaxRange.setAttribute('value', proteinMax);
  minValueDisplay.innerHTML = proteinMin;
  proteinMinRange.setAttribute('min', proteinMin);
  proteinMinRange.setAttribute('value', proteinMin);
};

export default ProteinDefaultValues;
