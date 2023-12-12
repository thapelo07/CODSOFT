let x = 0;
let y = 0;
let operation = '';

document.addEventListener('DOMContentLoaded', function() {

 let buttons = document.querySelectorAll('button');

 let display = document.getElementById('display');


 buttons.forEach(function(button) {

    button.addEventListener('click', function() {

      let userInput = button.textContent;

      if (userInput === '+' || userInput === '-' 
       || userInput === '*' || userInput === '/') {

         fetchOperation(userInput);

      } else if (userInput === '=') {

         calculate();

      } else if (userInput === 'CLR') {

         clear();

      } else {

         fetchInput(userInput);

      }

    });

 });

});


function fetchOperation(operations) {

    operation = operations;
   
    if (x !== '') {
   
       display.value = x + operation;
   
    }
   
}


function fetchInput(userInput) {

 if (operation === '') {

    x = x*10 + userInput*1;

    display.value = x;

 } else {

    y = y*10 + userInput*1;

    display.value = operation + y;

 }

}


function calculate() {

 switch (operation) {

    case '+':

      x += y;

      break;

    case '-':

      x -= y;

      break;

    case '*':

      x *= y;

      break;

    case '/':

      x /= y;

      break;

 }

 display.value = x;

 operation = '';

 y = 0;

}


function clear() {

 operation = '';

 x = 0;

 x = 0;

 display.value = '';

}