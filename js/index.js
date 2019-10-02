let suit = ["Club","Diamond","Spade","Heart"];
let cardArr = [];
let log = [];

const howManyCards = () => {
  document.body.querySelector('#cards').innerHTML ="";
  document.body.querySelector('#cardsSortDetail').innerHTML = '';
  document.body.querySelector('#detail').innerHTML ="";
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

    cardArr.push({"suit": suit[random], "color": colorCard, "number": randomCard});
    document.body.querySelector('#cards').innerHTML += `<div class="PlayingCard mt-3"><span class="topLeft${suit[random]} ${colorCard}"></span>  ${randomCard} <span class="bottomRight${suit[random]} ${colorCard}"></span></div>`;
  }

  return cardArr;
}


function sortBubble() {
  log = [];

  var swapped;
    do {
        swapped = false;
        for (var i = 0; i < cardArr.length - 1; i++) {
            if (cardArr[i].number > cardArr[i + 1].number) {
                var temp = cardArr[i];
                cardArr[i] = cardArr[i + 1];
                cardArr[i + 1] = temp;
                swapped = true;
                log.push(cardArr.slice(0));
            }
        }
    } while (swapped);


  for (num in cardArr) {
    document.body.querySelector('#cardsSortDetail').innerHTML += `<div class="PlayingCard mt-3"><span class="topLeft${cardArr[num].suit} ${cardArr[num].color}"></span> ${cardArr[num].number} <span class="bottomRight${cardArr[num].suit} ${cardArr[num].color}"></span></div>`;
  }


  for (swap in log) {
    document.body.querySelector('#detail').innerHTML += '<br>';
    for (card in log[swap]) {
      document.body.querySelector('#detail').innerHTML += `<div class="PlayingCard mt-3"><span class="topLeft${log[swap][card].suit} ${log[swap][card].color}"></span> ${log[swap][card].number} <span class="bottomRight${log[swap][card].suit} ${log[swap][card].color}"></span></div>`;
    }
  }

}

  
  

