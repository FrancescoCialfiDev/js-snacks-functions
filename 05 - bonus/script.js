/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/


// Dichiara la funzione qui.
const nome = prompt("Inserisci il tuo nome");
saluto(nome)
// Dichiara la funzione qui.
function saluto(stringa) {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    if (hours <= 13) {
        return "Buongiorno" + " " + stringa;
    } else if (hours <= 17 ) {
        return "Buon Pomeriggio" + " " + stringa;
    } else if (hours >= 17 ){
        return   "Buona Sera" + " " + stringa
    }
}

console.log(saluto(nome));

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.