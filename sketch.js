var playerTotal = 0
var dealerTotal = 0
var cards = {}
var cardList = require("../Blackjack Project/Images/Cards")


function preload(){
  for (i=0;i<52;i++){
    // cards.push(imageName:getTotal(imageName))
  }
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

 
}

function draw() {
drawSprites();
console.log (cardList.length)

}


function getTotal (imageName){
  try{
    if (imageName.charAt(1) == 0){
      total = 10
    }
    else{
      total = parseInt( imageName.charAt(0))
    }
  }
  catch (NaN){
    if (imageName.charAt(0) == "a"){
      total = 11
    }
    else{
      total = 10
    }

  }


  }

