//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
let userKm = parseInt(prompt("Inserisci quanti chilometri vuoi percorrere"));
let userAge = parseInt(prompt("Inserisci la tua eta"));
console.log("L'utente percorre",userKm,"km ed ha",userAge,"anni");
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km
//va applicato uno sconto del 20% per i minorenni
///va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
//Questo richiederà un minimo di ricerca.