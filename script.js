const allButtons = document.querySelectorAll('button')
const numButtons = document.querySelectorAll('.num')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector('#clear')
const decimalButton = document.querySelector('#decimal')
const enterButton = document.querySelector('#calculate')

// prevents interference from enter key
allButtons.forEach((button) => {
    button.addEventListener('keydown', (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
        }
    })
});