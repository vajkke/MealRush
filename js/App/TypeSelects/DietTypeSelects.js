const DietTypeSelects = () => {
  const dietOptions = document.querySelectorAll('.diet-option');
  const dietOptionsArray = Array.from(dietOptions);
  const dietNoPref = document.querySelector('.diet-noPref--option');

  const activeEffect = `background: #A8DADC; color: #F7F7F7; transition: 300ms;`;
  const deactiveEffect = `background: transparent; color: #000; transition: 300ms;`;

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
};

export default DietTypeSelects;
