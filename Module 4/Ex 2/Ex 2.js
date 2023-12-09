'use trict';
const actionForm = document.querySelector('#action');
actionForm.addEventListener('submit', async function(e){
    e.preventDefault();
    let searchKey = document.querySelector('#query').value;
    try{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchKey}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
})