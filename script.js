let result = 0;
const display = document.querySelector('.input');
// const clear = document.querySelector('.is-clear');

function getKey(e) {
  const key = document.querySelector(`.calc-button[data-key="${e.keyCode}"]`);
  const keyClass = key.classList;
  if (keyClass[1] === 'is-clear') {
    result = 0;
    display.textContent = result;
  }
  console.log(keyClass);
}

function clickMouse(e) {
  const key = document.querySelector(`.calc-button[data-key="${e.keyCode}"]`);
  // Get key classList on mouse click.
  const keyClass = key.classList;
  if (keyClass[1] === 'is-clear') {
    result = 0;
    display.textContent = result;
  }
}

display.textContent = result;
result = '563.134e+15';
display.textContent = result;

window.addEventListener('click', clickMouse);
window.addEventListener('keydown', getKey);
