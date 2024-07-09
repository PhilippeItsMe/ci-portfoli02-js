// To list all questions in an array

const questions = [
    ["Question 1/6 : What innovative technique is Eddie Van Halen famous for ?", "Slide guitar", "Tapping", "Fingerpicking", "Tapping", "q2"],
    ["Question 2/6 : What is Jimmy Page best known band?", "Led Zepplin", "The Who", "Kiss", "Led Zepplin", "q3"],
    ["Question 3/6 : For what is Steve Vai renowned in the 80s ?", "Slide Guitar", "Floyd Rose Use", "Blues", "Floyd Rose Use", "q4"],
    ["Question 4/6 : How did Jimmy Hendrix played sometime his guitar ?", "With His Feet", "With His Elbow", "With His Teeth", "With His Teeth", "q5"],
    ["Question 5/6 : What is Tony Iommi, the guitarist of Black Sabbath, famous for?", "His Aircut", "Distortion", "Heavy Riffs", "Heavy Riffs", "q6"],
    ["Question 6/6 : What musical genre is Yngwie Malmsteen credited with ?", "Neoclassical Metal", "Blues", "Rock", "Neoclassical Metal", "over"]
];

// To react to the mouse going over the answer buttons

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
    getAnswer();
});

// To capture the user answer when his mouse is clicking on an answer button

function getAnswer() {

    let buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener('click', () => {
            let answer = this.textContent;
            checkAnswer(answer);
        })
    };
};

//To check if the answer is correct

function checkAnswer() {

    let questionDomText = document.getElementById('questiontext');

    for (let i = 0; i < questions.length; i++) {
        let question = questions[i];
        let questionText = question[0];


    };
};

function incrementGoodAnswer() {

};

function incrementBadAnswer() {

};

function updateYouAre() {

};

function displayQuestion() {

};