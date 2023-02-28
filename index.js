// 1st dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImg = "images/" + randomDiceImage;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg);



// 2nd dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImg2 = "images/" + randomDiceImage2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2);

// output

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw";
}