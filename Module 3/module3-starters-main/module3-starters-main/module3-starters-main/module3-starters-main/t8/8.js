'use strict';
document.getElementById('start').addEventListener('click', function (){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');

    let result;
    switch (operation){
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            reuslt = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 !==0){
                result = num1 / num2;
            }else{
                result = 'Cannot divide the expression';
            }
            break;
        default:
            result = 'Select an operation';
    }

    resultElement.textContent = 'Result: ' + result;
});