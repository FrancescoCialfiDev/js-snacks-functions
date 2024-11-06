/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function list(array, lettera) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith(lettera)) {
             newArray.push(array[i])
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
list(names, "A");
console.log(list(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
['Anna', 'Adele', 'Alessandra']