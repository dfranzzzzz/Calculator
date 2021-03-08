const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const point = document.querySelector('.point');
let dispNum = display.textContent;

numbers.forEach(num => {
  num.addEventListener('click', () => {
    if(display.textContent == 0) {
      display.textContent = `${num.id}`;
    } else {
      display.textContent = `${display.textContent + num.id}`
    }
  })
})

function add (num1, num2) {
  return num1 + num2;
}
function subtract (num1, num2) {
  return num1 - num2;
}
function multiply (num1, num2) {
  return num1 * num2;
}
function divide (num1, num2) {
  return num1 / num2;
}
function operate (operator, num1, num2) {
  if (operator == '+') {add(num1, num2);} 
  else if (operator == '-') {subtract(num1, num2);}
  else if (operator == '*') {multiply(num1, num2);}
  else if (operator == '/') {divide(num1, num2);}
}
