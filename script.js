let result = 0;
const display = document.querySelector('.input');
const clear = document.querySelector('.is-clear');
display.textContent = result;
result = '563.134e+15';
display.textContent = result;

clear.addEventListener('click', function(e) {
  result = 0;
  display.textContent = result;
});