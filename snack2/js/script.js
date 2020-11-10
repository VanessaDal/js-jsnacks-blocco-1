// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
// ci vediamo a 11.18 così facciamo anche intervallo in mezzo
// lista bc come detto di almeno 4-5 items

var bikes=[
    {'nome':'Bianchi Aria Disc','peso': 100},
    {'nome':'Bottecchia Rd Domina Disc', 'peso':50},
    {'nome':'BTwin Ultra 920', 'peso':120},
    {'nome':'Carrera ER-01', 'peso':110}
]
console.log(bikes)

lighterbike=bikes[0]

for (var i = 0; i < bikes.length; i++){
if (bikes[i].peso<lighterbike.peso){
    lighterbike=bikes[i];
    console.log("La bici più leggera è la " + lighterbike.nome + " con un peso di " + lighterbike.peso + "kg")
}}
