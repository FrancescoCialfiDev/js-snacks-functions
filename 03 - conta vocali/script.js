/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function numeroVocali(stringa) {
    const vocali = ["a", "e", "i", "o", "u"];
    let somma = 0;

    for (let i = 0; i < stringa.length; i++) {
        if (vocali.includes(stringa[i])) {
            somma++;
        }
    }
    return somma;


}

// Invoca la funzione qui e stampa il risultato in console
let totaleVocali = numeroVocali(word)
console.log(totaleVocali);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

