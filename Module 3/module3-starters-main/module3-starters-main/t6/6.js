'use strict';
const button = document.querySelector('button');

function buttonClick(event){
    alert('Button clicked!');
}
button.addEventListener('click', buttonClick);
