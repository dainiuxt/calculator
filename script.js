let a = 0;
let b;
let temp;
let input = [];
let toDisplay = 0;
let operator = [''];
const display = document.querySelector('.display');
display.textContent = toDisplay;
window.addEventListener('keydown', (e) => {
  const key = document.querySelector(`.calc-button[data-key="${e.keyCode}"]`);
});

function getOperand(e) {
  if (e.keyCode === 67 || e.keyCode === 27) {
    input.length = 0;
    toDisplay = 0;
    display.textContent = toDisplay;
    b = toDisplay;
    operator = [''];
  } else if (e.keyCode === 8) {
    input.pop();
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay;
    b = toDisplay;    
  } else if (e.keyCode > 95 && e.keyCode < 106) {
    let charCode = e.keyCode - 48 * Math.floor(e.keyCode / 48);
    let chr = String((e.keyCode >= 96) ? charCode: e.keyCode);
    if ((Math.abs(toDisplay) < 1 && input.length > 14) /*|| input.join('').length > 15*/ ) {
      input.length = 0;
      display.textContent = 'Error';
      input.length = 0;
      b = 0;
    } else {
      input.push(chr);
      toDisplay = parseFloat(input.join(''));
      toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
      display.textContent = toDisplay;
      b = toDisplay; 
    }
  } else if (e.keyCode === 110 && input.length < 15 ) {
    input.push('.');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay+'.';
    b = toDisplay; 
  } else if (e.keyCode === 69 && input.length < 15) {
    input.push('e');
    toDisplay = parseFloat(input.join(''));
    toDisplay = (Math.abs(toDisplay) < 1000000000) ? toDisplay : toDisplay.toExponential(5);
    display.textContent = toDisplay+'e';
    b = toDisplay; 
  } else if (e.keyCode === 106 ||
            e.keyCode === 107 ||
            e.keyCode === 109 ||
            e.keyCode === 111 ||
            e.keyCode === 13) {
              temp = b;
              if (e.keyCode === 106) {
                operator[0] = '*';
                b = a * b;
                a = temp;
                b = toDisplay; 
                input.length = 0;
              } else if (e.keyCode === 107) {
                operator[0] = '+';
                return a + b;
              } else if (e.keyCode === 109) {
                operator[0] = '-';
                return a - b;
              } else if (e.keyCode === 111) {
                operator[0] = '/'; {
                  if (b === 0) {
                    return 'Error';
                  } else {
                    return a / b;
                  }
                }
              } else if (e.keyCode === 13) {
                operator[0];
              }
  } else {
    return;
  }
}

// function calculate(e) {
//   temp = b;
//   if (e.keyCode === 106) {
//     operator[0] = '*';
//     b = a * b;
//     a = temp;
//     b = toDisplay; 
//     input.length = 0;
//   } else if (e.keyCode === 107) {
//     operator[0] = '+';
//     return a + b;
//   } else if (e.keyCode === 109) {
//     operator[0] = '-';
//     return a - b;
//   } else if (e.keyCode === 111) {
//     operator[0] = '/'; {
//       if (b === 0) {
//         return 'Error';
//       } else {
//         return a / b;
//       }
//     }
//   } else if (e.keyCode === 13) {
//     operator[0];
//   }
// }

document.addEventListener('keydown', getOperand);
// // document.addEventListener('keydown', getOperator);
// document.addEventListener('keydown', calculate);
document.addEventListener('click', function(e) {
  if (e.target.classList[1] === 'is-clear') {
    input.length = 0;
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