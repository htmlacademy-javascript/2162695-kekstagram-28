const SCALE_STEP = 25;
const PERCENT_DIVIDER = 100;
const SCALE_RANGE_MIN = '25%';
const SCALE_RANGE_MAX = '100%';

const image = document.querySelector('.img-upload__preview img');
const scaleInput = document.querySelector('.scale__control--value');
const smallerScaleButton = document.querySelector('.scale__control--smaller');
const biggerScaleButton = document.querySelector('.scale__control--bigger');

const changeScale = (value) => {
  image.style.transform = `scale(${+value.replace('%', '') / PERCENT_DIVIDER})`;
};

const onBiggerButtonClick = () => {
  if (scaleInput.value !== SCALE_RANGE_MAX) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') + SCALE_STEP}%`;
    changeScale(scaleInput.value);
  }
};

const onSmallerButtonClick = () => {
  if (scaleInput.value !== SCALE_RANGE_MIN) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') - SCALE_STEP}%`;
    changeScale(scaleInput.value);
  }
};

const activateScale = () => {
  biggerScaleButton.addEventListener('click', onBiggerButtonClick);
  smallerScaleButton.addEventListener('click', onSmallerButtonClick);
};

const resetScale = () => changeScale(scaleInput.value);

export {activateScale, resetScale};
