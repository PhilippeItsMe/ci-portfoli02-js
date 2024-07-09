let q1 = ["Question 1/6 : What innovative technique is Eddie Van Halen famous for ?", "Slide guitar", "Tapping", "Fingerpicking", "Tapping", "q2"];
let q2 = ["Question 2/6 : What is Jimmy Page best known band?", "Led Zepplin", "The Who", "Kiss", "Led Zepplin", "q3"];
let q3 = ["Question 3/6 : For what is Steve Vai renowned in the 80s ?", "Slide Guitar", "Floyd Rose Use", "Blues", "Floyd Rose Use", "q4"];
let q4 = ["Question 4/6 : How did Jimmy Hendrix played sometime his guitar ?", "With His Feet", "With His Elbow", "With His Teeth", "With His Teeth", "q5"];
let q5 = ["Question 5/6 : What is Tony Iommi, the guitarist of Black Sabbath, famous for?", "His Aircut", "Distortion", "Heavy Riffs", "Heavy Riffs", "q6"];
let q6 = ["Question 6/6 : What musical genre is Yngwie Malmsteen credited with ?", "Neoclassical Metal", "Blues", "Rock", "Neoclassical Metal", "q7"];
let q7 = ["You know now if you fully lived the 80' and if you are a rock dude!", "Game Over", "Game Over", "Game Over", "Game Over", "q7"];

// To watch and react to the mouse going over the three answer buttons

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener('mouseover', () => {
            button.style.background = "#FBB03B"
        });
        button.addEventListener('mouseout', () => {
            button.style.background = "white"
        });
    }
});






function answerAnimation() {
    let buttonStyle = windows.getComputedStyle("button");
    console.log(buttonStyle);
}


function getAnswer() {

};

function checkAnswer() {

};

function incrementGoodAnswer() {

};

function incrementBadAnswer() {

};

function updateYouAre() {

};

function displayQuestion() {

};