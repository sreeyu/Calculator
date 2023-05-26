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
    }
}