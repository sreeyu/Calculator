const container = document.querySelector('.container');

const input = document.getElementById('screen');

//variable to store the input
let clickedValue = '';
//display the input on the screen on button click

container.addEventListener('click', (event) =>{
    clickedValue += event.target.value;
    input.value = clickedValue;
    console.log(clickedValue);
})