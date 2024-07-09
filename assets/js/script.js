// Creating an array of questions (objects)

const questions = [{ //Question 1
        question: "Question 1/6 : What innovative technique is Eddie Van Halen famous for ?",
        answers: ["Slide guitar", "Tapping", "Fingerpicking"],
        correctAnswer: 1 //Index of the correct answer
    },
    { //Question 2
        question: "Question 2/6 : What is Jimmy Page best known band?",
        answers: ["Led Zepplin", "The Who", "Kiss"],
        correctAnswer: 0 //Index of the correct answer
    },
    { //Question 3
        question: "Question 3/6 : For what is Steve Vai renowned in the 80s ?",
        answers: ["Slide Guitar", "Floyd Rose Use", "Blues"],
        correctAnswer: 1 //Index of the correct answer
    },
    { //Question 4
        question: "Question 4/6 : How did Jimmy Hendrix played sometime his guitar ?",
        answers: ["Slide guitar", "Tapping", "Fingerpicking"],
        correctAnswer: 1 //Index of the correct answer
    },
    { //Question 5
        question: "Question 5/6 : What is Tony Iommi, the guitarist of Black Sabbath, famous for?",
        answers: ["His Aircut", "Distortion", "Heavy Riffs"],
        correctAnswer: 2 //Index of the correct answer
    },
    { //Question 6
        question: "Question 6/6 : What musical genre is Yngwie Malmsteen credited with ?",
        answers: ["Neoclassical Metal", "Blues", "Rock"],
        correctAnswer: 0 //Index of the correct answer
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
    } else {
        incorrectAnswer++;
        let incorrectContent = document.getElementById("badanswer");
        incorrectContent.textContent = "Bad answer : " + incorrectAnswer;
    }

    currentQuestionIndex++;
    updateYouAre(correctAnswer, incorrectAnswer);
    displayQuestion(currentQuestionIndex);
}

function updateYouAre() {

};

function displayNextQuestion() {

};