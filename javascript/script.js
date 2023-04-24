/*
creare una griglia 10 x 10 
generare i quadratini della presenti all'interno della griglia
*/

let eleGrid = document.querySelector('.grid');

let mainTitle = document.querySelector('.hidden');

let eleButton = document.querySelector('#play');

mainTitle.innerHTML = 'Seleziona il livello di difficoltà e genera la griglia';

/* DA QUI CODICE GIUSTO

eleButton.addEventListener('click', function () {
    mainTitle.innerHTML = '';

    createGrid (100);

    const listCells = document.querySelectorAll('.cell');

    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', function () {
            this.classList.toggle('clicked');
        }) 
     }
     
     for (let i = 1; i <= 100; i++) {
        console.log(i);
     }
})

// functions

function createGrid(numCells) {
    eleGrid.innerHTML = '';
    for (let i = 0; i < numCells; i++) {

        eleGrid.innerHTML += `<div class="cell">${i + 1}<div>`
    }
}

*/


eleButton.addEventListener('click', function () {
    const eleDifficulty = document.getElementById("difficulty");
    let value = eleDifficulty.options[eleDifficulty.selectedIndex].value;
    console.log(value);
    
    mainTitle.innerHTML = '';

    createGrid (100);

    const listCells = document.querySelectorAll('.cell');

    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', function () {
            this.classList.toggle('clicked');
        }) 
     }
     
     for (let i = 1; i <= 100; i++) {
        console.log(i);
     }
})

// functions

function createGrid(numCells) {
    eleGrid.innerHTML = '';
    for (let i = 0; i < numCells; i++) {

        eleGrid.innerHTML += `<div class="cell">${i + 1}<div>`
    }
}




   


