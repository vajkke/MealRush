const ProteinSlider = () => {
  const rangeInput = document.querySelectorAll('.protein-range input');
  const range = document.querySelector('.protein--slider .protein--progress');
  let valueGap = 1;
  const maxValueDisplay = document.querySelector('.protein--max-value');
  const minValueDisplay = document.querySelector('.protein--min-value');

  rangeInput.forEach(input => {
    input.addEventListener('input', e => {
      let minVal = parseInt(rangeInput[0].value);
      let maxVal = parseInt(rangeInput[1].value);

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

export default ProteinSlider;
