// This class will take all inputs and functions for our calculator
class Calculator {

    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement

        //this.clear() calls a blank calculator with no inputs everytime we create a new calculator
        this.clear()
    }

    // function that clears everything every time a user clicks All Clear-AC
    clear() {
        this.currentOperandTextElement = ''
        this.previousOperandTextElement = ''
        this.operation = undefined
    }

    // function that deletes a number every time a user clicks delete-DEL
    delete(){

    }

    // function that adds number every time a user clicks on a number
    appendNumber(number){

    }

    //function that determines which operation will take place when an operation is clicked
    chooseOperation(operation) {

    }

    // function that shows a single number ater all operations are done
    compute() {

    }

    // function that updates values in our output
    updateDisplay() {
        // this allows us to set text in the current display section
        this.currentOperandTextElement.innerText = this.currentOperand

    }

}


// constant variables for all number buttons
const numberButtons = document.querySelectorAll('[data-number]')

// constant variables for all operation buttons like *,+,-,/
const operationButtons = document.querySelectorAll('[data-operation]')

// constant variables for equals buttons
const equalsButton = document.querySelector('[data-equals]')

// constant variables for delete button
const deleteButton = document.querySelector('[data-delete]')

// constant variables for all clear button
const allClearButton = document.querySelector('[data-all-clear]')

// constant variables for previous Operand Text Element where previous text goes
const previousOperandTextElement = document.querySelector('[data-previous-operand]')

// constant variables for equals buttons
const currentOperandTextElement = document.querySelector('[data-current-operand]')


// makes all our variables created work in our calculator
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
    // everytime we click a button, it appends the number clicked
    button.addEventListener('click', ()=> {
        calculator,appendNumber(button.innerText)
        calculator.updateDisplay()
    } )
})

