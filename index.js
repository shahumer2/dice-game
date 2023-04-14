var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImages="dice" +randomNumber1+ ".png";
var imageSource="images/" +randomImages;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImages2="dice" +randomNumber2+ ".png";
var imageSource="images/" +randomImages2;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src", imageSource);
if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML=("PLAYER 1 WINS")
} else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML=("DRAW")
}
else{
    document.querySelector("h1").innerHTML=("PLAYER 2 WINS")
}