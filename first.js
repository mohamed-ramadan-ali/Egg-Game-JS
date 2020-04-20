


  // all eggs top position  
  var pos1 = 145;
  var pos2 = 145;
  var pos3 = 145;


 

  // Dom variables  
var startGameBtn =document.getElementById("startGameBtn");
var startDiv= document.querySelector(".startDiv") 
var startH1 = document.querySelector(".startDiv h1") 

var basket = document.getElementById("basket")
var egg1 = document.getElementById("egg1")
var egg2 = document.getElementById("egg2")
var egg3 = document.getElementById("egg3")

var eggBroke1=document.querySelector(".eggbrok")
var eggBroke2=document.querySelector(".eggbrok2")
var eggBroke3=document.querySelector(".eggbrok3")

var scoreH2 =document.querySelector("#basket h2")  // score in the basket
var scoreH1 =document.querySelector(".scoreH1")  // score in the top 
var lifeH1 =document.querySelector(".lifeH1")    // life in the top 

// start game btn 
startGameBtn.addEventListener("click",function(){
  playBackgroundSong()
  startGame() 
  startDiv.style.display="none"


}
);

// gameOver
function gameOver (num)
{
  startDiv.style.display="block"
  startH1.style.fontSize="52"
  startH1.innerHTML="Game Over           Score:"+num+""
  


}











 // score var &function

 var score = 0;

 function addScore(){

  score++;
  scoreH2.innerHTML=score;
  scoreH1.innerHTML= "Score : " + score+"";
 };



// life var & function

var life = 10 ; 

function minusLife(){

  life--;
 
  lifeH1.innerHTML= " "+life + " : life ";
 };




  // game sounds var & function 
var coinAudio=document.getElementById("coinAudio");
var backgroundSong=document.getElementById("backgroundSong")
var gameOverTune=document.getElementById("gameOverTune")

function playCoin(){
 
  coinAudio.play();
}

function playBackgroundSong(){
 
 backgroundSong.play();
}

function pauseBackgroundSong(){
 
  backgroundSong.pause();

backgroundSong.currentTime = 0;

gameOverTune.play();
 }







  // Basket Move  
document.addEventListener("mousemove", function (e) {
  var basketPos = basket.style.left = e.clientX;

})








// Functions showBrokenEggs

function showBrokenEgg1(){
  eggBroke1.style.display="block";
  setTimeout(function(){eggBroke1.style.display="none"}, 500)
  
  }
  
  function showBrokenEgg2(){
    eggBroke2.style.display="block";
    setTimeout(function(){eggBroke2.style.display="none"}, 500)
    
    }
  
    function showBrokenEgg3(){
      eggBroke3.style.display="block";
      setTimeout(function(){eggBroke3.style.display="none"}, 500)
      
      }
////////////////////////////////////////////////////////////////////

// Function startGame
function startGame(){

// Function myGame
var myGame = setInterval( function  (){


  var speed=1

if(score>=15 && score<30)
{
  speed=1.5
}
else if (score>=30 && score<45)
{
speed=2

}

else if (score>=45 && score<60)
{
speed=2.5

}

else if (score>=60 && score<75)
{
speed=3

}

else if (score>=75 && score<100)
{
speed=3.5

}
else if (score>=100 )
{
speed=4

}



  // egg1 dimantions 
var egg1Top= Math.round(egg1.getBoundingClientRect().top);
var egg1Left= Math.round(egg1.getBoundingClientRect().left);
var egg1Hight= Math.round(egg1.getBoundingClientRect().height);
var egg1Width= Math.round(egg1.getBoundingClientRect().width);
  var egg1Y=egg1Top+egg1Hight;
  var egg1X=egg1Left+egg1Width;
////////////////////////////////////////////


  // egg2 dimantions 
  var egg2Top= Math.round(egg2.getBoundingClientRect().top);
  var egg2Left= Math.round(egg2.getBoundingClientRect().left);
  var egg2Hight= Math.round(egg2.getBoundingClientRect().height);
  var egg2Width= Math.round(egg2.getBoundingClientRect().width);
    var egg2Y=egg2Top+egg2Hight;
    var egg2X=egg2Left+egg2Width;
////////////////////////////////////////////


      // egg3 dimantions 
var egg3Top= Math.round(egg3.getBoundingClientRect().top);
var egg3Left= Math.round(egg3.getBoundingClientRect().left);
var egg3Hight= Math.round(egg3.getBoundingClientRect().height);
var egg3Width= Math.round(egg3.getBoundingClientRect().width);
  var egg3Y=egg3Top+egg3Hight;
  var egg3X=egg3Left+egg3Width;
  ////////////////////////////////////////////


  // basket dimantions 
  var basketTop= Math.round(basket.getBoundingClientRect().top);
  var basketLeft= Math.round(basket.getBoundingClientRect().left);
  var basketHight= Math.round(basket.getBoundingClientRect().height);
  var basketWidth= Math.round(basket.getBoundingClientRect().width);
    var basketY=basketTop+basketHight;
    var basketX=basketLeft+basketWidth;
  ////////////////////////////////////////////

// check egg1 in basket
    if ((egg1Y>basketTop && egg1Top<basketY && egg1X>=basketLeft && egg1X<basketX || egg1X==basketX && egg1Y>basketTop ))
{
  pos1 = 145
  playCoin()
  addScore()

}

// check egg2 in basket
if ((egg2Y>basketTop && egg2Top<basketY && egg2X>=basketLeft && egg2X<basketX || egg2X==basketX && egg2Y>basketTop ))
{
  pos2 = 145
  playCoin()
  addScore()
}

// check egg3 in basket
if ((egg3Y>basketTop && egg3Top<basketY && egg3X>=basketLeft && egg3X<basketX || egg3X==basketX && egg3Y>basketTop ))
{
  pos3 = 145
  playCoin()
  addScore()
}


// check egg1 in the floor
  if (pos1 >= 560 ) {
    pos1 = 145
    showBrokenEgg1()
    minusLife()
  } else {
    pos1+=speed;

    egg1.style.top = pos1 + "px";
  }


// check egg2 in the floor
  if (pos2 >= 560 ) {
    pos2 = 145
    showBrokenEgg2()
    minusLife()
  } else {
    pos2+=speed;

    egg2.style.top = pos2 + "px";
  }


// check egg3 in the floor
  if (pos3 >= 560 ) {
    pos3 = 145
    showBrokenEgg3()
    minusLife()
  } else {
    pos3+=speed;

    egg3.style.top = pos3 + "px";
  }

// game over Check 

  if ( life<0)
  {

   
    clearInterval(myGame);
    gameOver (score) ;
    pauseBackgroundSong()
    life=10
    score=0
    scoreH2.innerHTML=score;
    scoreH1.innerHTML= "Score : " + score+"";
    lifeH1.innerHTML= " "+life + " : life ";
  }


 

}, 12)
}







