//Scrivere un programma che chieda all’utente:
//- Il numero di chilometri da percorrere
//- Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
//secondo le seguenti regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.

//MILESTONE 1:
//Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input
// e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale
// (o output) sarà anch’essa da scrivere in console.

//MILESTONE 2:
//Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form 
//in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
//Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
//(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
//Questo richiederà un minimo di ricerca.


// button che raccoglierà dati passeggeri.
const buttonPrice = document.querySelector("#button-Price");
buttonPrice.addEventListener ('click', function () {

    // input nome del passeggero.
    const userName = (document.querySelector("#user-Name").value);
   
    // input km percorsi dal passeggero.
    const userKm = parseInt(document.querySelector("#user-Km").value);
   
    // input età selezionata dal passeggero
    const userAge = parseInt(document.querySelector("#user-Age").value);

    // Imposto prezzo del biglietto
    const priceTicket = 0.21; 

    // Moltiplico i km percorsi dai passeggeri per il prezzo del biglietto.
    const TotalPrice = priceTicket * userKm;

    // Calcolo sconti:

    // sconto 20 under 18.  
    let discountedPrice;
    if (userAge < 18) {
        discountedPrice = TotalPrice - (TotalPrice * 0.2);
    }

    // sconto 40 over 65. 
    else if (userAge > 65) {
        discountedPrice = TotalPrice - (TotalPrice * 0.4);;
    }
    else {
        discountedPrice = TotalPrice;
    }
    
    // Stampo risultati degli input con sconti applicati nella card del biglietto.   
    document.querySelector(".user-name-message").innerHTML = userName;
    document.querySelector(".total-price-message").innerHTML = discountedPrice.toFixed(2) + "€";

    // Rimuovo la classe "d-none" per fare comparire il biglietto.
    const msCardElement = document.querySelector('.ms-card');
    msCardElement.classList.remove('d-none');

});

// button clear per cancellare dati senza refresh.
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    document.querySelector('#user-Name').value = '';
    document.querySelector('#user-Age').value = '';
    document.querySelector('#user-Km').value = '';
    document.querySelector('.total-price-message').innerHTML = '';
    document.querySelector('.user-name-message').innerHTML= '';

     // Riapplico classe d-none per fare scomparire biglietto al clear.
     const msCardElement = document.querySelector('.ms-card');
     msCardElement.classList.add('d-none');
});

