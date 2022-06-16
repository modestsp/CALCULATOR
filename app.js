

let value1 = 0;
let value2 = 0;
let operator = '';

// Function add: Number Number -> Number
function add(a, b) {
    return (a + b);
}

// Function subtract: Number Number -> Number
function subtract(a, b) {
    return (a - b)
}

// Function multiply: Number Number -> Number
function multiply(a, b) {
    return (a * b)
}

// Function divide: Number Number -> Number || String
function divide (a, b) {
    if (b === 0) return "Can't divide by 0"
    return (a / b);
}

// Function operate: Char Number Number -> Number || String
function operate(char, a, b) {
    let result;
    switch(char) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
             break;
        default:
            result = 'Unknown operator'
    }
    console.log(char)
    return result;
}


// Buttons and display functionalities
const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.textContent.length > 10) return display.textContent;
        display.textContent += "" + `${btn.textContent}`;
        
    })
})

// Clear functionality
const clearButton = document.querySelector('.clearButton')

function clear(){
    clearButton.addEventListener('click', () => {
        display.textContent = ''
        value1 = 0;
        value2 = 0;
    })
}
clearButton.addEventListener('click', () => {
    display.textContent = ''
})

// Operators functionalities
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equal');

operators.forEach(op => {
    op.addEventListener('click', () => {
        let displayContent = display.textContent;
        value1 = parseInt(displayContent.substring(0,displayContent.length - 1));
        operator = displayContent.substring(displayContent.length - 1)
        console.log(display.textContent);
        console.log(value1);
        console.log(operator);
        return (display.textContent = '');
    })
})

// operators.forEach(op)

equal.addEventListener('click', () => {
    let displayContent = display.textContent;
    value2 = parseInt(displayContent.substring(0,displayContent.length - 1));
    console.log(operator, value1, value2);
    display.textContent = operate(operator, value1, value2);
})