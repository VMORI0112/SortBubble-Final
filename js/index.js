// Here your functions Victor
let suit = ["club","diamond","spade","heart"];

function howManyCards() {
  document.body.querySelector('#cards').innerHTML ="";
  let InputVal = document.body.querySelector('#inputNumber').value;
  for (let i=0; i<InputVal;i++) {
    let colorCardNumber = Math.floor(Math.random() * 2) + 1;
    switch(colorCardNumber) {
    case 1:
      colorCard="red"
      break;
    case 2:
       colorCard="black"
      break;
    }  
    let random = Math.floor(Math.random() * suit.length);
    let randomCard = Math.floor(Math.random() * 14) +1;

    document.body.querySelector('#cards').innerHTML += `<li>color: ${colorCard} || suit: ${suit[random]} || Cart Number: ${randomCard}</li>`;
  }
}

  
  

