'use strict';
const form = document.querySelector('#source');
const first_name = document.querySelector('input[name = firstname]');
const last_name = document.querySelector('input[name = lastname]');
const p = document.querySelector('#target');

form.addEventListener('submit', function (event){
    event.defaultPrevented;
    p.innerHMTL = `Your name is ${first_name} ${last_name}`;
});
