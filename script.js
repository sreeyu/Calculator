const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const evaluate = document.querySelector('[data-evaluate]');
const del = document.querySelector('[data-delete]');
const allClear = document.querySelector('[data-all-clear]');
const previousInput = document.querySelector('[data-prev-input]');
const currentInput = document.querySelector('[data-current-input]');

class Calculator {
    constructor(previousInput, currentInput){
        this.previousInput = previousInput;
        this.currentInput = currentInput;
        this.clear()
    }

    clear(){
        this.prevInput = '';
        this.currInput = '';
        this.operation = undefined;
    }

    delete(){
        this.currInput = this.currInput.slice(0, -1);
    }

    appendNumber(num){
        if(num === '.' && this.currInput.includes('.')) return ;
        this.currInput = this.currInput.toString() + num.toString();
    }

    selectOperations(operation){
        if(this.currInput === '') return
        if(this.prevInput !== ''){
            this.solve();
        }
        this.operation = operation;
        this.prevInput = this.currInput;
        this.currInput = '';
    }

    solve(){
        let ans;
        const prev = parseFloat(this.prevInput);
        const curr = parseFloat(this.currInput);
        if(isNaN(prev) || isNaN(curr)) return
        switch(this.operation){
            case '+':
                ans = prev + curr;
                break;
            
            case '-':
                ans = prev - curr;
                break;

            case '*':
                    ans = prev * curr;
                    break;
                
            case '/':
                    ans = prev / curr;
                    break;
        }
        this.currInput = ans;
        this.prevInput = '';
        this.operation = undefined;
    }

    updateDisplay() {
        this.currentInput.value = this.currInput;
        this.previousInput.value = this.prevInput;
    }

    
}

const calculator = new Calculator(previousInput, currentInput);

number.forEach(num => {
    num.addEventListener('click', event => {
        calculator.appendNumber(event.target.value);
        calculator.updateDisplay();
    })
})

operation.forEach(opp => {
    opp.addEventListener('click', event => {
        calculator.selectOperations(event.target.value);
        calculator.updateDisplay();
    })
})

evaluate.addEventListener('click', () => {
    calculator.solve();
    calculator.updateDisplay();
})

allClear.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

del.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})