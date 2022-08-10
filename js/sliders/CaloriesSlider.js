const CalorieSlider = () => {
  const rangeInput = document.querySelectorAll('.calories-range input');
  const range = document.querySelector('.calories--slider .calories--progress');
  let valueGap = 10;
  const maxValueDisplay = document.querySelector('.calories--max-value');
  const minValueDisplay = document.querySelector('.calories--min-value');

  rangeInput.forEach(input => {
    input.addEventListener('input', e => {
      let minVal = parseInt(rangeInput[0].value);
      let maxVal = parseInt(rangeInput[1].value);

      console.log(maxVal);

      if (maxVal - minVal < valueGap) {
        if (e.target.className === 'range-min') {
          rangeInput[0].value = maxVal - valueGap;
        } else {
          rangeInput[1].value = minVal + valueGap;
        }
      } else {
        minValueDisplay.innerHTML = minVal;
        maxValueDisplay.innerHTML = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
      }
    });
  });
};

export default CalorieSlider;
