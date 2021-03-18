// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);

}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);  */


function writeCards(cards, event){  
    for (let i = 0; i < cards.length; i++){
        cards[i] = (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
        
    }
    console.log(cards)
    return cards;
}

function countDown(){
    let i = 10;
    while (i >= 0){
        console.log(i--)
    }
}