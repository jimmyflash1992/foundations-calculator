// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : 'Error'; // Prevent division by zero
}

// Operate function
function operate(operator, num1, num2) {
    console.log(`Operating: ${num1} ${operator} ${num2}`); // Debugging
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null;
    }
}

// Variables to store the current state
let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let isResultDisplayed = false;

// Select buttons and display
const btn = document.querySelectorAll("button");
const screen = document.querySelector('.result');

// Add event listeners to buttons
btn.forEach(button => {
    button.addEventListener("click", () => {
        const buttonContent = button.innerHTML;

        // Clear the display and reset variables when "AC" is clicked
        if (buttonContent === 'AC') {
            num1 = '';
            num2 = '';
            operator = '';
            result = '';
            isResultDisplayed = false;
            screen.innerHTML = '';
            console.log('Cleared'); // Debugging
            return;
        }

        // Handle number buttons
        if (button.classList.contains('num')) {
            if (isResultDisplayed) {
                num1 = buttonContent;
                isResultDisplayed = false;
                screen.innerHTML = num1;
            } else if (!operator) {
                num1 += buttonContent;
                screen.innerHTML = num1;
            } else {
                num2 += buttonContent;
                screen.innerHTML = num2;
            }
            console.log(`num1: ${num1}, num2: ${num2}`); 
            return;
        }

        // Handle operator buttons
        if (button.classList.contains('operator')) {
            console.log(`Operator clicked: ${buttonContent}`); 
            if (num1 && num2) {
                result = operate(operator, parseFloat(num1), parseFloat(num2));
                result = Math.round(result * 100) / 100; // Round to 2 decimal places
                screen.innerHTML = result;
                num1 = result.toString(); // Use the result as the first number
                num2 = ''; // Reset the second number
            }
            operator = buttonContent; // Update the operator
            console.log(`Operator set to: ${operator}`); 
            return;
        }

        // Handle the equals button
        if (button.classList.contains('equals')) {
            if (num1 && operator && num2) {
                result = operate(operator, parseFloat(num1), parseFloat(num2));
                result = Math.round(result * 100) / 100; // Round to 2 decimal places
                screen.innerHTML = result;
                num1 = result.toString(); // Use the result as the first number
                num2 = ''; // Reset the second number
                operator = ''; // Reset the operator
                isResultDisplayed = true; // Mark that a result is displayed
                console.log(`Result: ${result}`); // Debugging
            }
            return;
        }

        // Handle the +/- button
        if (buttonContent === '+/-') {
            if (!operator) {
                num1 = num1.startsWith('-') ? num1.slice(1) : '-' + num1;
                screen.innerHTML = num1;
            } else {
                num2 = num2.startsWith('-') ? num2.slice(1) : '-' + num2;
                screen.innerHTML = num2;
            }
            return;
        }

        // Handle the decimal button
        if (buttonContent === '.') {
            if (!operator) {
                if (!num1.includes('.')) {
                    num1 += '.';
                    screen.innerHTML = num1;
                }
            } else {
                if (!num2.includes('.')) {
                    num2 += '.';
                    screen.innerHTML = num2;
                }
            }
            return;
        }
    });
});