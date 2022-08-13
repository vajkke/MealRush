const MealTypeSelects = () => {
  const activeEffect = `background: #A8DADC; color: #F7F7F7; transition: 300ms;`;
  const deactiveEffect = `background: transparent; color: #000; transition: 300ms;`;

  const mealOptions = document.querySelectorAll('.meal-option');
  const mealOptionsArray = Array.from(mealOptions);
  const mealNoPref = document.querySelector('.meal-noPref--option');

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
};

export default MealTypeSelects;
