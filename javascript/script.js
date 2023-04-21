/*
creare una griglia 10 x 10 
generare i quadratini della presenti all'interno della griglia
*/

const eleGrid = document.querySelector('.grid');

// generare la griglia
createGrid (100);


// applicare gli event listner a tutte le celle della griglia

const listCells = document.querySelectorAll('.cell');

for (let i = 0; i < listCells.length; i++) {
   const cell = listCells[i];
   cell.addEventListener('click', 
   function colorCell() {
       console.log(this);
       this.classList.toggle('clicked');
   }
   ) 
}



// functions

function createGrid(numCells) {
    for (let i = 0; i < numCells; i++) {

        const value = getNumber;
        eleGrid.innerHTML += `<div class="cell">${value}</div>`
    }
}

