// Here your functions Victor
let suit = ["club","diamond","spade","heart"];
var cardSortDet = [];
cardtimes=0;

cardTimes = document.querySelector("#row").innerHTML.value


const cards = () => {  
  for (let i=0; i < cardtimes; i++) {
      let colorC = getcolor() ;
      let suitC = getSuites() ;
      let cardC = getCard() ;

      document.querySelector("#cards").innerHTML= `${colorC} ${suitC} ${csuitC}` ;

  }


}

const getColor = () => {
    let colorCardNumber = Math.floor(Math.random() * 2) + 1;
    let colorCard;
     switch(colorCardNumber) {
     case 1:
       colorCard="red"
       break;
     case 2:
        colorCard="black"
       break;
     }  
    return colorCard;
}

const getSuites = () => {
    let random = Math.floor(Math.random() * suit.length);
    return suit[random];
}

const getCard = () => {
    let randomCard = Math.floor(Math.random() * 14) +1;
    return randomCard
}
