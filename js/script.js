document.getElementById('saluto').innerHTML = 'Benvenuto';

//km da percorrere//
var kmTot = prompt("Quanti km devi percorrere?");
//età//
var eta = prompt("Quanti anni hai?");
//1.prezzo del biglietto (0.21 € al km)//
var costoKm = 0.21;
//2. sconto del 20% per i minorenni//
var scontoMinori = 0.8;
//3. sconto del 40% per gli over 65//
var scontoOver = 0.6;
//costo del biglietto//
var costoBiglietto;

if (eta >=18 && eta <=65) {
  costoBiglietto = kmTot * costoKm;
} else if (eta <18) {
  costoBiglietto = kmTot * costoKm * scontoMinori;
} else {
  costoBiglietto = kmTot * costoKm * scontoOver;
}

document.getElementById('Totale').innerHTML = costoBiglietto.toFixed(2) + "&euro;";
