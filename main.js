const numberBtns   = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');
const pointBtn     = document.querySelector('#point');
const clearBtn     = document.querySelector('#clear');
const deleteBtn    = document.querySelector('#delete');
const signBtn      = document.querySelector('#sign');
const equalBtn     = document.querySelector('#equal');
const display      = document.querySelector('#display');

let firstNum = '';
let secondNum = '';
let currentOperator = null;
let shouldResetDisplay = false;

numberBtns.forEach((button) => 
  button.addEventListener('click', () => inputNum(button.id))
)

operatorBtns.forEach((button) => 
  button.addEventListener('click', () => setOperator(button.textContent))
)

equalBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear)


inputNum = (num) => {
  if (display.textContent === '0' || shouldResetScreen) resetDisplay();
  display.textContent += num;
}

setOperator = (operator) => {
  if (currentOperator !== null) evaluate();
  firstNum = display.textContent;
  currentOperator = operator;
  shouldResetScreen = true;
}

resetDisplay = () => {
  display.textContent = "";
  shouldResetScreen = false;
}

function clear () {
  display.textContent = '0'
  firstNum = '';
  secondNum = '';
  currentOperator = null;
}

function evaluate () {
  if (currentOperator === null || shouldResetScreen) return;
  if (currentOperator === '/' && display.textContent === '0') {
    alert(`You can't do that, mate`);
    clear();
    return;
  }
    
  secondNum = display.textContent;
  display.textContent = `${operate(currentOperator, firstNum, secondNum)}`;
  currentOperator = null;
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
      return divide(num1, num2);
    default: 
      return null;
  }
}
