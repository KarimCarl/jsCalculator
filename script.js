    //FIX ISSUES
    // 1.  FIND DISPLAY ERROR

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
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    // function that deletes a number every time a user clicks delete-DEL
    delete(){

    }

    // function that adds number every time a user clicks on a number
    appendNumber(number){
        //This checks whether the dot/period . already exists and stops it from being added more than once
        if((number === '.') && (this.currentOperand.includes('.'))) return
        // Instead of changing the current operand, we can the make it the number
        //This converts the current number to a string so that javascript appends the numbers instead of adding the numbers
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    //function that determines which operation will take place when an operation is clicked
    chooseOperation(operation) {
        //This checks whether the current operand is empty, if it is, it return nothing
        if (this.currentOperand === '') return

        //This checks if the previous operand is not eual to empty and then computes it
        //This code also prepends any operation added to a completed one 
        if (this.previousOperand !== '') {
            this.compute()
        }
    
        //This sets the operation we passed in
        this.operation = operation
        //This pushes the current operan to the previous operand after operation
        this.previousOperand = this.currentOperand
        //Then this line of code clears the current operand 
        this.currentOperand = ''
    }

    // function that shows a single number ater all operations are done
    compute() {

    }


    // function that updates values in our output
    updateDisplay() {
        // this allows us to set text in the current display section
        this.currentOperandTextElement.innerText = this.currentOperand
        // this alupdates the text in the previous display section
        this.previousOperandTextElement.innerText = this.previousOperand

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
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    } )
})


// Copied the numberButtons but modified it to create operation functionality   
operationButtons.forEach(button => {
    // everytime we click an operation button, it chooses the operation clicked
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    } )
})