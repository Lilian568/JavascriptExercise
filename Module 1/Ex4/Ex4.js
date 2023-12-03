'use strict';
let name = prompt("What's your name?");
let num = Math.floor(Math.random()*4) + 1;
let classes
switch (num) {
    case 1:
        classes = "Gryffindor";
        break;
    case 2:
        classes = "Ravenclaw";
        break;
    case 3:
        classes = "Hufflepuff";
        break;
    case 4:
        classes = "Slytherin";
        break;
}
document.querySelector('#result').innerHTML = name + ", you are " + classes + "."