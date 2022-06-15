const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

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
    console.log(char);
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
    return result;
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.textContent)
        if (display.textContent.length > 10) return display.textContent;
        display.textContent += "" + `${btn.textContent}`;
        
    })
})