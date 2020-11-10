//Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale


var arrayObj = [
    {name: 'Poppy', type: 'tshirt', color: 'red'},
    {name: 'Jumping', type: 'occhiali', color: 'blue'},
    {name: 'CrissCross', type: 'scarpe', color: 'black'},
    {name: 'Jenny', type: 'borsa', color: 'pink'},
  ];

  document.getElementById("first").innerHTML="test primo array: " + arrayObj[0].name +" " + arrayObj[0].type +" " + arrayObj[0].color + " " + arrayObj[0].position

  var newArray=[];

  for (i = 0; i < arrayObj.length; i++) {
    newArray.push(arrayObj[i]);
  }
  console.log(newArray)

function generateRandomLetter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
  

  for (key in newArray){
  newArray[key].position=generateRandomLetter()}

  console.log(newArray)
  document.getElementById("second").innerHTML="test secondo array: " + newArray[0].name +" " + newArray[0].type +" " + newArray[0].color + " " + newArray[0].position

  document.getElementById("third").innerHTML="test primo array: " + arrayObj[0].name +" " + arrayObj[0].type +" " + arrayObj[0].color + " " + arrayObj[0].position