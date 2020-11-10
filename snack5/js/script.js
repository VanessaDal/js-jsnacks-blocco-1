//Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale


var arrayObj = [
    {name: 'Poppy', type: 'tshirt', color: 'red'},
    {name: 'Jumping', type: 'occhiali', color: 'blue'},
    {name: 'CrissCross', type: 'scarpe', color: 'black'},
    {name: 'Jenny', type: 'borsa', color: 'pink'},
  ];

  document.getElementById("first").innerHTML("arrayObj")

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
