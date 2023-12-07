'use strict';
const p = document.querySelector('#trigger');
const img = document.querySelector('#target');

function changeImg(event){
    img.src = "img/picB.jpg";
}
function returnImg(event){
    img.src = "img/picA.jpg";
}
p.addEventListener('mousein', changeImg);
p.addEventListener('mouseout', returnImg);