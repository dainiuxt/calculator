let a = 0;
let input = [];
let toDisplay = 0;
let operator = [];
const display = document.querySelector('.input');
display.textContent = toDisplay;

function calculate() {
  return String
}

function getOperand(e) {
  const key = document.querySelector(`.calc-button[data-key="${e.keyCode}"]`);
  if (e.keyCode === 67 || e.keyCode === 27) {
    input = [];
    toDisplay = 0;
    display.textContent = toDisplay;
  } else if (e.keyCode === 8) {
    input.pop();
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;    
  } else if (e.keyCode > 95 && e.keyCode < 106) {
    let charCode = e.keyCode - 48 * Math.floor(e.keyCode / 48);
    let chr = String((e.keyCode >= 96) ? charCode: e.keyCode);
    if (Math.abs(toDisplay) < 1 && input.length > 14) {
      input = [];
      display.textContent = 'Error';
    } else {
      input.push(chr);
      toDisplay = parseFloat(input.join(''));
      toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
      display.textContent = toDisplay;
    }
  } else if (e.keyCode === 110 && input.length < 15 ) {
    input.push('.');
    toDisplay = parseFloat(input.join(''));
    display.textContent = toDisplay;
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
  } else if (e.keyCode === 69 && input.length < 15) {
    input.push('e');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.keyCode === 106 ||
            e.keyCode === 107 ||
            e.keyCode === 109 ||
            e.keyCode === 111 ||
            e.keyCode === 13) {
              a = parseFloat(input.join(''));
  } else {
    return;
  }
}

function getOperator(e) {
  const key = document.querySelector(`.calc-button[data-key="${e.keyCode}"]`);  
  if (e.keyCode === 106) {
    operator[0] = '*';
  } else if (e.keyCode === 107) {
    operator[0] = '+';
  } else if (e.keyCode === 109) {
    operator[0] = '-';
  } else if (e.keyCode === 111) {
    operator[0] = '/';
  } else if (e.keyCode === 13) {
    operator[0] = '=';
  }
}

// document.onkeydown = function(e) {
//     // let keyCode = e.keyCode;
//     let chrCode = keyCode - 48 * Math.floor(keyCode / 48);
//     let chr = String.fromCharCode((96 <= keyCode) ? chrCode: keyCode);
//     console.log(chr);
// };

document.addEventListener('keydown', getOperand);
document.addEventListener('keydown', getOperator);
document.addEventListener('click', function(e) {
  if (e.target.classList[1] === 'is-clear') {
    input = [];
    toDisplay = 0;
    display.textContent = toDisplay;    
  } else if (e.target.classList[1] === 'is-correct') {
    input.pop();
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-0') {
    input.push('0');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);    
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-1') {
    input.push('1');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-2') {
    input.push('2');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-3') {
    input.push('3');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-4') {
    input.push('4');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-5') {
    input.push('5');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-6') {
    input.push('6');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-7') {
    input.push('7');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-8') {
    input.push('8');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-9') {
    input.push('9');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-exponent') {
    input.push('e');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-decimal') {
    input.push('.');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
  } else if (e.target.classList[1] === 'is-multiply') {
    operator[0] = '*';
  } else if (e.target.classList[1] === 'is-divide') {
    operator[0] = '/';
  } else if (e.target.classList[1] === 'is-add') {
    operator[0] = '+';
  } else if (e.target.classList[1] === 'is-subtract') {
    input.push('-');
  } else if (e.target.classList[1] === 'is-equals') {
    input.push('=');
  }
});