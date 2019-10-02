// Here your functions Victor
let suit = ["club","diamond","spade","heart"];
let cardArr = [];

const howManyCards = () => {
  document.body.querySelector('#cards').innerHTML ="";
  cardArr = [];
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
    cardArr.push(randomCard);
    document.body.querySelector('#cards').innerHTML += `<div class="PlayingCard mt-3">${colorCard} ${suit[random]} ${randomCard}</div>`;
  }
  return cardArr;
}


log = [];

function sortBubble() {
  document.body.querySelector('#cardsSortDetail').innerHTML = '';
  var len = cardArr.length,i, j, stop;

  for (i=0; i < len; i++){
    for (j=0, stop=len-i; j < stop; j++){
        if (cardArr[j] > cardArr[j+1]){
            var temp = cardArr[j];
            cardArr[j] = cardArr[j+1];
            cardArr[j+1] = temp;
            log.push(cardArr.slice(0));
        }
    }
  }

  for (num in cardArr) {
    document.body.querySelector('#cardsSortDetail').innerHTML += `<div class="PlayingCard mt-3">${cardArr[num]}</div>`;
  }
  for (swap in log) {
    for (card in log[swap]) {
      document.body.querySelector('#detail').innerHTML += `<div class="PlayingCard mt-3">${log[swap][card]}</div>`;
    }
  }
}

  
  

