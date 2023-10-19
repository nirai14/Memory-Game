const cardsArray=[
    {
    name:'apple',
    icon:'<i class="fa-brands fa-apple"></i>'
},
{
    name:"paw",
    icon:'<i class="fa-solid fa-paw"></i>'
},
{
    name:"ice-cream",
    icon:'<i class="fa-solid fa-ice-cream"></i>'
},
{
    name:"leaf",
    icon:'<i class="fa-solid fa-seedling"></i>',
},
{
    name:"burger",
    icon:'<i class="fa-solid fa-burger"></i>'
},
{
    name:"pizza",
    icon:'<i class="fa-solid fa-pizza-slice"></i>',
},
{
    name:'apple',
    icon:'<i class="fa-brands fa-apple"></i>'
},
{
    name:"paw",
    icon:'<i class="fa-solid fa-paw"></i>'
},
{
    name:"ice-cream",
    icon:'<i class="fa-solid fa-ice-cream"></i>'
},
{
    name:"leaf",
    icon:'<i class="fa-solid fa-seedling"></i>',
},
{
    name:"burger",
    icon:'<i class="fa-solid fa-burger"></i>'
},
{
    name:"pizza",
    icon:'<i class="fa-solid fa-pizza-slice"></i>',
}


]
let matched=0
let flipped=[]

shuffleCards()
let gameBoard=document.getElementById('gameBoard')
displayCards()

//shuffle
function shuffleCards(){
for(let i=cardsArray.length-1;i>=0;i--){
    const randomIndex=Math.floor(Math.random()*(i));
   [ cardsArray[i],cardsArray[randomIndex]]=[cardsArray[randomIndex],cardsArray[i]]
}
}
//display cards
 function displayCards(){
   cardsArray.forEach((currentElement,index)=>{
   const card=document.createElement('div');
   card.setAttribute("id",index);
   card.classList.add('active')
   card.classList.add('cardBack');
   gameBoard.append(card);
   card.addEventListener('click',flipCard)
})
}
function flipCard(){
    if(flipped.length<2 && this.classList.contains('active')){
let cardId=this.getAttribute('id')
flipped.push(this);
this.classList.remove('cardBack');
this.innerHTML = cardsArray[cardId].icon;
    }
    if(flipped.length===2){
setTimeout(checkMatch,1000)
    }
}
function checkMatch(){
   let card1=flipped[0].getAttribute("id")
   let card2=flipped[1].getAttribute("id")
  if(cardsArray[card1].name===cardsArray[card2].name){
flipped[0].style.background="none"
flipped[0].innerHTML=''
flipped[0].style.border="none"
flipped[0].classList.remove('active')

flipped[1].style.background="none"
flipped[1].innerHTML=''
flipped[1].style.border="none"
flipped[1].classList.remove('active')
matched++
if (matched === cardsArray.length / 2) {
    gameOver();
}
  }
  else{
    flipped[0].innerHTML=''
    flipped[0].classList.add('cardBack')

    flipped[1].innerHTML=''
    flipped[1].classList.add('cardBack')
  }
  flipped=[]
}
function gameOver(){
        
        gameBoard.classList.remove('game')
        gameBoard.classList.add('won')
        gameBoard.innerHTML="YOU WON!"
        let button=document.createElement('button')
        button.innerText="START NEW GAME"
        gameBoard.append(button)
        button.addEventListener('click',start)
}

function start(){
    matched=0
    gameBoard.classList.remove('won')
     gameBoard.classList.add('game')
    gameBoard.innerHTML=""
    displayCards()

}
