/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const nome = "Filippo";

// Dichiara la funzione qui.
function saluto(stringa) {
    return console.log("Ciao" + " " + stringa);
}

// Invoca la funzione qui e stampa il risultato in console
saluto(nome)


//Risultato atteso se si passa 'Mario': // ciao Mario