//Inizializzazione variabili globali
let ticketPriceReduced;
let ticketPriceSenior;
let priceMessage;
//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
let userKm = parseInt(prompt("Inserisci quanti chilometri vuoi percorrere"));
let userAge = parseInt(prompt("Inserisci la tua eta"));
console.log("L'utente percorre",userKm,"km ed ha",userAge,"anni");
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km
let ticketPrice = (userKm * 0.21).toFixed(2);
console.log("Il prezzo intero del biglietto è €",ticketPrice);

if(userAge < 18){ //va applicato uno sconto del 20% per i minorenni
    ticketPriceReduced = (ticketPrice - ((ticketPrice * 20) / 100)).toFixed(2);
    console.log("Biglietto ridotto €",ticketPriceReduced);
    priceMessage = `Il costo del tuo biglietto è di €${ticketPriceReduced}`;
} else if(userAge >= 65){ //va applicato uno sconto del 40% per gli over 65.
    ticketPriceSenior = (ticketPrice - ((ticketPrice * 40) / 100)).toFixed(2);
    console.log("Biglietto senior €",ticketPriceSenior);
    priceMessage = `Il costo del tuo biglietto è di €${ticketPriceSenior}`;
} else{
    priceMessage = `Il costo del tuo biglietto è di €${ticketPrice}`;
}

//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
document.getElementById("ticket-price").innerHTML = priceMessage;


document.getElementById("user-info").innerHTML = `Il biglietto è utilizzabile per ${userKm}km`;

const now = new Date();
document.getElementById("current-date").innerHTML = now;