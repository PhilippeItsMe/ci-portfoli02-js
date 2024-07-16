// Creating an array of questions (objects)

const questions = [{ //Question 1
        question: "Question 1/6 : What innovative technique is Eddie Van Halen famous for ?",
        answers: ["Slide guitar", "Tapping", "Fingerpicking"],
        correctAnswer: 1, //Index of the correct answer
        illustration: "assets/images/eddievanhalen.webp"
    },
    { //Question 2
        question: "Question 2/6 : What is Jimmy Page best known band?",
        answers: ["Led Zepplin", "The Who", "Kiss"],
        correctAnswer: 0, //Index of the correct answer
        illustration: "assets/images/jimmypage.webp"
    },
    { //Question 3
        question: "Question 3/6 : For what is Steve Vai renowned in the 80s ?",
        answers: ["Slide Guitar", "Floyd Rose Use", "Blues"],
        correctAnswer: 1, //Index of the correct answer
        illustration: "assets/images/stevevai.webp"
    },
    { //Question 4
        question: "Question 4/6 : With what did Jimmy Hendrix played sometime his guitar ?",
        answers: ["Pick", "Theeth", "Feet"],
        correctAnswer: 1, //Index of the correct answer
        illustration: "assets/images/jimmyhendrix.webp"
    },
    { //Question 5
        question: "Question 5/6 : What musical genre is Yngwie Malmsteen credited with ?",
        answers: ["Neoclassical Metal", "Blues", "Rock"],
        correctAnswer: 0, //Index of the correct answer
        illustration: "assets/images/yngwiemalmsteen.webp"
    },
    { //Question 6
        question: "Question 6/6 : What is Tony Iommi, the guitarist of Black Sabbath, famous for?",
        answers: ["His Aircut", "Distortion", "Heavy Riffs"],
        correctAnswer: 2, //Index of the correct answer
        illustration: "assets/images/tonyiommi.webp"
    }
];

// Setting start question and scores

let currentQuestionIndex = 0;
let correctAnswer = 0;
let incorrectAnswer = 0;

// Setting a mouse button hover effect

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

// Capturing the user answer

function getAnswer() {

    let buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener('click', () => {
            let answer = button.nextElementSibling.textContent; //To catch the p below the button
            checkAnswer(answer);
        })
    };
};

//To check if the answer is correct and increment the score

function checkAnswer(answer) {
    let question = questions[currentQuestionIndex];
    let correctAnswerIndex = question.correctAnswer;
    let correctAnswerText = question.answers[correctAnswerIndex];

    if (answer === correctAnswerText) {
        correctAnswer++;
        let correctContent = document.getElementById("goodanswer");
        correctContent.textContent = "Good answer : " + correctAnswer;
        alert(`Well done ! Good answer !`);
    } else {
        incorrectAnswer++;
        let incorrectContent = document.getElementById("badanswer");
        incorrectContent.textContent = "Bad answer : " + incorrectAnswer;
        alert(`No no no ! Wrong answer !`);
    }

    currentQuestionIndex++;
    updateYouAre(correctAnswer, currentQuestionIndex);
    displayNextQuestion(currentQuestionIndex);
}

//To udpate the result box with the current pourcentage of correct answers of the user

function updateYouAre(correctAnswer, currentQuestionIndex) {
    let pourcentage = correctAnswer / (currentQuestionIndex) * 100;
    let floorPourcentage = Math.floor(pourcentage);

    let pourcentageDOM = document.getElementById("goodanswerpourcentage");
    pourcentageDOM.textContent = "Success rate : " + floorPourcentage + "%";

    if (pourcentage > 80) {
        let firstLine = document.getElementById("first");
        let secondLine = document.getElementById("second");
        let thirdLine = document.getElementById("third");
        firstLine.style.color = "#AD0000";
        firstLine.style.fontWeight = "500";
        secondLine.style.color = "#414040";
        secondLine.style.fontWeight = "400";
        thirdLine.style.color = "#414040";
        thirdLine.style.fontWeight = "400";

        let illustration = document.getElementById("resultsillustration");
        illustration.setAttribute("src", "assets/images/star.webp")

        let level = document.getElementById("inred");
        level.textContent = "Rock Star";


    } else if (pourcentage <= 60) {
        let firstLine = document.getElementById("first");
        let secondLine = document.getElementById("second");
        let thirdLine = document.getElementById("third");
        firstLine.style.color = "#414040";
        firstLine.style.fontWeight = "400";
        secondLine.style.color = "#414040";
        secondLine.style.fontWeight = "400";
        thirdLine.style.color = "#AD0000";
        thirdLine.style.fontWeight = "500";

        let illustration = document.getElementById("resultsillustration");
        illustration.setAttribute("src", "assets/images/timeout.webp")

        let level = document.getElementById("inred");
        level.textContent = "Waanebe";

    } else {
        let firstLine = document.getElementById("first");
        let secondLine = document.getElementById("second");
        let thirdLine = document.getElementById("third");
        firstLine.style.color = "#414040";
        firstLine.style.fontWeight = "400";
        secondLine.style.color = "#AD0000";
        secondLine.style.fontWeight = "500";
        thirdLine.style.color = "#414040";
        thirdLine.style.fontWeight = "400";

        let illustration = document.getElementById("resultsillustration");
        illustration.setAttribute("src", "assets/images/old.webp")

        let level = document.getElementById("inred");
        level.textContent = "Cool Person With Memory Issues";
    }
};

//To display the next question

function displayNextQuestion(currentQuestionIndex) {

    if (currentQuestionIndex < questions.length) {
        let challenge = document.getElementById("questiontext");
        let answerOne = document.querySelector("#answer1 p");
        let answerTwo = document.querySelector("#answer2 p");
        let answerThree = document.querySelector("#answer3 p");
        let guitarHero = document.getElementById("guitarhero");

        challenge.textContent = questions[currentQuestionIndex].question;
        answerOne.textContent = questions[currentQuestionIndex].answers[0];
        answerTwo.textContent = questions[currentQuestionIndex].answers[1];
        answerThree.textContent = questions[currentQuestionIndex].answers[2];
        guitarHero.setAttribute("src", questions[currentQuestionIndex].illustration);
    } else {
        let title = document.getElementsByTagName("h1")[0];
        title.innerHTML = "Well done !";
        let challenge = document.getElementById("questiontext");
        challenge.innerHTML = '<h2 onclick="reload();">Your test is over and you know where you stand now !<br>Feel free to <span style="color:#AD0000; font-weight:500;">click here</span> to reload the page in order to do the quizz again.</h2>';

    };
};

//To reload the page in order to do the quizz again

function reload() {
    location.reload();
};