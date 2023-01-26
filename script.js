/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let StoryPart2montain = document.querySelector(".option-one-screen");
let StoryPart2bridge = document.querySelector(".option-two-screen");
let StoryPart3montain = document.querySelector(".option-one-end");
let StoryPart3brige = document.querySelector(".option-two-end");

let OpeningMessage = document.querySelector(".story-opening");
let MountainButton = document.querySelector(".option-one");
let BridgeButton = document.querySelector(".option-two");
let cabinpicture = document.querySelector(".option-one-end");
let darkforest = document.querySelector(".option-two-end");
let body = document.querySelector("body");
let changeColor = document.querySelector(".changeColor");
let endGame = document.querySelector(".end-game");
//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

changeColor.onkeydown = function() {
    body.style.background = "blue";

};
endGame.onclick = function() {
    title.innerHTML = "Game Over";
};
MountainButton.onclick = function() {
    StoryPart2montain.style.display = "block";
    StoryPart2bridge.style.display = "none";
};
//
BridgeButton.onclick = function() {
    StoryPart2bridge.style.display = "block";
    StoryPart2montain.style.display = "none";
};
//
cabinpicture.style.display = "block";
darkforest.style.display = "none";

//
//
darkforest.style.display = "block";
cabinpicture.style.display = "none";




//