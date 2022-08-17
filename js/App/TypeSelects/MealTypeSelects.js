import PageView from '../Display/PageView.js';
import { recipesData } from '../Display/APIFetch.js';
let recipeArray = [];
let mealTypeOptions = [];

const MealTypeSelects = () => {
  const activeEffect = `background: #A8DADC; color: #F7F7F7; transition: 300ms;`;
  const deactiveEffect = `background: transparent; color: #000; transition: 300ms;`;

  const mealOptions = document.querySelectorAll('.meal-option');
  const mealOptionsArray = Array.from(mealOptions);
  const mealNoPref = document.querySelector('.meal-noPref--option');

  // ANIMATIONS

  mealOptionsArray.forEach(option => {
    option.addEventListener('click', () => {
      if (option.getAttribute('data-active') === 'no') {
        option.style.cssText = activeEffect;
        option.setAttribute('data-active', 'yes');
        const doesItHAve = btn => btn.getAttribute('data-active') === 'yes';
        if (mealOptionsArray.every(doesItHAve)) {
          mealNoPref.setAttribute('data-active', 'yes');
          mealNoPref.style.cssText = activeEffect;
        }
      } else if (
        option.getAttribute('data-active') === 'yes' &&
        mealNoPref.getAttribute('data-active') === 'no'
      ) {
        option.style.cssText = deactiveEffect;
        option.setAttribute('data-active', 'no');
      } else if (
        option.getAttribute('data-active') === 'yes' &&
        mealNoPref.getAttribute('data-active') === 'yes'
      ) {
        option.style.cssText = deactiveEffect;
        option.setAttribute('data-active', 'no');
        mealNoPref.setAttribute('data-active', 'no');
        mealNoPref.style.cssText = deactiveEffect;
      }
    });
  });

  mealNoPref.addEventListener('click', () => {
    if (mealNoPref.getAttribute('data-active') === 'no') {
      mealNoPref.setAttribute('data-active', 'yes');
      mealNoPref.style.cssText = activeEffect;
      mealOptionsArray.forEach(option => {
        option.style.cssText = activeEffect;
        option.setAttribute('data-active', 'yes');
      });
    } else {
      mealNoPref.setAttribute('data-active', 'no');
      mealNoPref.style.cssText = deactiveEffect;
      mealOptionsArray.forEach(option => {
        option.style.cssText = deactiveEffect;
        option.setAttribute('data-active', 'no');
      });
    }
  });

  // FUNCTIONS

  mealOptionsArray.forEach(option => {
    let mealOption = option
      .getAttribute('class')
      .split(' ')
      .pop()
      .split('-')
      .shift();
    option.addEventListener('click', () => {
      if (option.getAttribute('data-active') === 'yes') {
        recipeArray = [];
        mealTypeOptions.push(mealOption);
        recipesData.forEach(recipe => {
          const recipemealTypes = recipe.mealType;
          if (recipemealTypes.some(meal => mealTypeOptions.includes(meal))) {
            recipeArray.push(recipe);
          }
        });
        PageView(recipeArray);
      } else if (
        option.getAttribute('data-active') === 'no' &&
        mealNoPref.getAttribute('data-active') === 'no'
      ) {
        recipeArray = [];
        let filteredArray = mealTypeOptions.filter(meal => meal !== mealOption);
        mealTypeOptions = filteredArray;
        recipesData.forEach(recipe => {
          const recipemealTypes = recipe.mealType;
          if (recipemealTypes.some(meal => mealTypeOptions.includes(meal))) {
            recipeArray.push(recipe);
          }
        });
        PageView(recipeArray);
      }
    });
  });

  mealNoPref.addEventListener('click', () => {
    recipeArray = [];
    mealTypeOptions = [];
    let mealOption;
    if (mealNoPref.getAttribute('data-active') === 'yes') {
      mealOptionsArray.forEach(option => {
        mealOption = option
          .getAttribute('class')
          .split(' ')
          .pop()
          .split('-')
          .shift();
        mealTypeOptions.push(mealOption);
      });
      recipesData.forEach(recipe => {
        const recipemealTypes = recipe.mealType;
        if (recipemealTypes.some(meal => mealTypeOptions.includes(meal))) {
          recipeArray.push(recipe);
        }
      });
      PageView(recipeArray);
    } else {
      mealTypeOptions = [];
      PageView(mealTypeOptions);
    }
  });
};

export default MealTypeSelects;
