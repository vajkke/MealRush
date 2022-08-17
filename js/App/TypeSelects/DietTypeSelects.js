import PageView from '../Display/PageView.js';
import { recipesData } from '../Display/APIFetch.js';
let recipeArray = [];
let dietTypeOptions = [];

const DietTypeSelects = e => {
  const dietOptions = document.querySelectorAll('.diet-option');
  const dietOptionsArray = Array.from(dietOptions);
  const dietNoPref = document.querySelector('.diet-noPref--option');

  const activeEffect = `background: #A8DADC; color: #F7F7F7; transition: 300ms;`;
  const deactiveEffect = `background: transparent; color: #000; transition: 300ms;`;

  // ANIMATION
  dietOptionsArray.forEach(option => {
    option.addEventListener('click', () => {
      if (option.getAttribute('data-active') === 'no') {
        option.style.cssText = activeEffect;
        option.setAttribute('data-active', 'yes');
        const doesItHAve = btn => btn.getAttribute('data-active') === 'yes';
        if (dietOptionsArray.every(doesItHAve)) {
          dietNoPref.setAttribute('data-active', 'yes');
          dietNoPref.style.cssText = activeEffect;
        }
      } else if (
        option.getAttribute('data-active') === 'yes' &&
        dietNoPref.getAttribute('data-active') === 'no'
      ) {
        option.style.cssText = deactiveEffect;
        option.setAttribute('data-active', 'no');
      } else if (
        option.getAttribute('data-active') === 'yes' &&
        dietNoPref.getAttribute('data-active') === 'yes'
      ) {
        option.style.cssText = deactiveEffect;
        option.setAttribute('data-active', 'no');
        dietNoPref.setAttribute('data-active', 'no');
        dietNoPref.style.cssText = deactiveEffect;
      }
    });
  });

  dietNoPref.addEventListener('click', () => {
    if (dietNoPref.getAttribute('data-active') === 'no') {
      dietNoPref.setAttribute('data-active', 'yes');
      dietNoPref.style.cssText = activeEffect;
      dietOptionsArray.forEach(option => {
        option.style.cssText = activeEffect;
        option.setAttribute('data-active', 'yes');
      });
    } else {
      dietNoPref.setAttribute('data-active', 'no');
      dietNoPref.style.cssText = deactiveEffect;
      dietOptionsArray.forEach(option => {
        option.style.cssText = deactiveEffect;
        option.setAttribute('data-active', 'no');
      });
    }
  });

  // FUNCTIONS

  dietOptionsArray.forEach(option => {
    let dietOption = option
      .getAttribute('class')
      .split(' ')
      .pop()
      .split('-')
      .shift();
    option.addEventListener('click', () => {
      if (option.getAttribute('data-active') === 'yes') {
        recipeArray = [];
        dietTypeOptions.push(dietOption);
        recipesData.forEach(recipe => {
          const recipeDietTypes = recipe.dietType;
          if (recipeDietTypes.some(diet => dietTypeOptions.includes(diet))) {
            recipeArray.push(recipe);
          }
        });
        PageView(recipeArray);
      } else if (
        option.getAttribute('data-active') === 'no' &&
        dietNoPref.getAttribute('data-active') === 'no'
      ) {
        recipeArray = [];
        let filteredArray = dietTypeOptions.filter(diet => diet !== dietOption);
        dietTypeOptions = filteredArray;
        recipesData.forEach(recipe => {
          const recipeDietTypes = recipe.dietType;
          if (recipeDietTypes.some(diet => dietTypeOptions.includes(diet))) {
            recipeArray.push(recipe);
          }
        });
        PageView(recipeArray);
      }
    });
  });

  dietNoPref.addEventListener('click', () => {
    recipeArray = [];
    dietTypeOptions = [];
    let dietOption;
    if (dietNoPref.getAttribute('data-active') === 'yes') {
      dietOptionsArray.forEach(option => {
        dietOption = option
          .getAttribute('class')
          .split(' ')
          .pop()
          .split('-')
          .shift();
        dietTypeOptions.push(dietOption);
      });
      recipesData.forEach(recipe => {
        const recipeDietTypes = recipe.dietType;
        if (recipeDietTypes.some(diet => dietTypeOptions.includes(diet))) {
          recipeArray.push(recipe);
        }
      });
      PageView(recipeArray);
    } else {
      dietTypeOptions = [];
      PageView(recipeArray);
    }
  });
};

export default DietTypeSelects;
