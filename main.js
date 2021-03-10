const numberBtns   = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');

const pointBtn     = document.querySelector('#point');
const clearBtn     = document.querySelector('#clear');
const deleteBtn    = document.querySelector('#delete');
const signBtn      = document.querySelector('#sign');
const equalBtn     = document.querySelector('#equal');
const display      = document.querySelector('#display');

equalBtn. addEventListener('click', evaluate);
clearBtn. addEventListener('click', clear);
deleteBtn.addEventListener('click', backSpace);
pointBtn. addEventListener('click', decimalPoint);
signBtn.  addEventListener('click', negate);

numberBtns.forEach((button) => 
  button.addEventListener('click', () => inputNum(button.textContent))
)

operatorBtns.forEach((button) => 
  button.addEventListener('click', () => setOperator(button.textContent))
)

let firstNum           = '';
let secondNum          = '';
let currentOperator    = null;
let shouldResetDisplay = false;

function clear () {
  display.textContent = '0'
  firstNum            = '';
  secondNum           = '';
  currentOperator     = null;
}

function backSpace () {
  display.textContent = display.textContent.slice(0, -1);
}

function decimalPoint () {
  if (shouldResetDisplay) resetDisplay();
  if (display.textContent === '') display.textContent = '0';
  if (display.textContent.includes('.')) return;
  display.textContent += '.';
}

function negate () {
  if (display.textContent.includes('-')) {
    display.textContent = display.textContent.slice(1);
  } else {
    display.textContent = `-${display.textContent}`;
  }
}

function evaluate () {
  if (currentOperator === null || shouldResetDisplay) return;
  if (currentOperator === '/' && display.textContent === '0') {
    alert(`You can't do that, mate`);
    clear();
    return;
  }
    
  secondNum           = display.textContent;
  display.textContent = roundUp(operate(currentOperator, firstNum, secondNum));
  currentOperator     = null;
}

inputNum = (num) => {
  if (display.textContent === '0' || shouldResetDisplay) resetDisplay();
  display.textContent += num;
}

setOperator = (operator) => {
  if (currentOperator !== null) evaluate();

  firstNum           = display.textContent;
  currentOperator    = operator;
  shouldResetDisplay = true;
}

roundUp = (num) => {
  return Math.round(num * 100)/100;
}

resetDisplay = () => {
  display.textContent = "";
  shouldResetDisplay  = false;
}

add      = (num1, num2) => {return num1 + num2;}
subtract = (num1, num2) => {return num1 - num2;}
multiply = (num1, num2) => {return num1 * num2;}
divide   = (num1, num2) => {return num1 / num2;}

operate = (operator, num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);

  switch (operator) {
    case '+' : 
      return add(num1, num2);
    case '-' : 
      return subtract(num1, num2);
    case 'x' : 
      return multiply(num1, num2);
    case '/' : 
      if (num2 === 0) return null;
      else return divide(num1, num2);
    default: 
      return null;
  }
}
