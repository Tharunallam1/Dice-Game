var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomdiceImage = "dice"+randomnumber1+".png";
var randomimagesource = "images/"+randomdiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomdiceImage = "dice"+randomnumber2+".png";
var randomimagesource = "images/"+randomdiceImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource);

if(randomnumber1 > randomnumber2){
    document.querySelectorAll("h1")[0].innerHTML="Player 1 wins!";
}
else if(randomnumber2>randomnumber1){
    document.querySelectorAll("h1")[0].innerHTML ="Player 2 wins!";
}
else{
    document.querySelectorAll("h1")[0].innerHTML=" DRAW!";
}