function add(num1, num2) {
    return num1 + num2
} // adds, returns result

function subtract(num1, num2) {
    return num1 - num2
} // subtracts, returns result

function multiply(num1, num2) {
    return num1 * num2
} // multiplys, returns result

function divide(num1, num2) {
    return num1 / num2
} // divides, returns result


function operation(num1, num2, operator) {
    let result;

    switch(operator) {
        case '+':
            result = add(num1, num2)
            return result
            break
        case '-':
            result = subtract(num1, num2)
            return result
            break
        case '*':
            result = multiply(num1, num2)
            return result
            break
        case '/':
            result = divide(num1, num2)
            return result
            break
    }
}