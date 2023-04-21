/*
creare una griglia 10 x 10 
generare i quadratini della presenti all'interno della griglia
*/

const eleGrid = document.querySelector('.grid');

// generare la griglia


// applicare gli event listner a tutte le celle della griglia

const listCells = document.querySelectorAll('.cell');

let eleButton = document.querySelector('#play');

eleButton.addEventListener('click', function () {
    createGrid (100);

    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', 
        function colorCell() {
            console.log(this);
            this.classList.toggle('clicked');
        }
        ) 
     }
     
     for (let i = 1; i <= 100; i++) {
        console.log(i);
     }

     
})

/*

for (let i = 0; i < listCells.length; i++) {
   const cell = listCells[i];
   cell.addEventListener('click', 
   function colorCell() {
       console.log(this);
       this.classList.toggle('clicked');
   }
   ) 
}

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

*/


// functions

function createGrid(numCells) {
    for (let i = 0; i < numCells; i++) {

        eleGrid.innerHTML += `<div class="cell">${i + 1}<div>`
    }
}


   


