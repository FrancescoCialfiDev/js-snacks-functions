/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let primaLettera = firstLetter (names)

console.log(primaLettera);

function firstLetter (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].charAt(0));
    }
    return newArray;
}

// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]