// Variables //
var mainScreen = document.getElementById("main-screen");
var questionPages = document.getElementById("question-pages");
var startBtn = document.getElementById("start-btn");
var highScoreBtn = document.getElementById("high-score-btn");
var highScoresScreen = document.getElementById("high-scores-screen");
var timer = document.getElementById("timer");
var goBackBtn = document.getElementById("go-back-btn");
var finalScoreScreen = document.getElementById("final-score-screen");
var highScoresTable = document.getElementById("high-scores-table");
var timeLimit = 60 * 1;
var interValId = null;
var gameOver = false;
var display = document.querySelector("#time-display");
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var masterTimer = null;
var correctQuestions = 0;
var delayInMilliseconds = 2500;
var minutes = 0;
var seconds = 0;
var timer = null;
var currentUserScore = 0;
var highScores = [];

// Array of questions //
var questionList = [
    {
        questionNumber: 1
        question: "What is github?"
        options: [
            "An online repository".
            "A blog",
            "A travel agency",
            "An online computer store",
        ],
        correctAnswer: "An online repository",
    },
    {
        questionNumber: 2
        question: "What does (ul) stand for in HTML?"
        options: [
            "Uneven lanes".
            "Urgent lead",
            "Unequal levels",
            "Unordered list",
        ],
        correctAnswer: "Unordered list",
    },
    {
        questionNumber: 3
        question: "What does CSS stand for"
        options: [
            "Careful string series".
            "Cascading style sheets",
            "Casual surge storage",
            "Clashing source standards",
        ],
        correctAnswer: "Cascading style sheets",
    }, 
    {
        questionNumber: 4
        question: "Which command creates a file in the command line?"
        options: [
            "cd".
            "touch",
            "mkdir",
            "git init",
        ],
        correctAnswer: "mkdir",
    }, 
    {
        questionNumber: 5
        question: "What is Chrome devtools?"
        options: [
            "An in browser web developer system".
            "An email website",
            "A serach engine",
            "An online map",
        ],
        correctAnswer: "An in browser web developer system",
    },
];

var gradeQuestion = function (event) {
    event.target.disabled = true;

    var pickAnswer = event.target.innerHTML;
    var question = questions[currentQuestionIndex];
    var quEl = document.getElementById("qu" + question.questionNumber);

    if (quEl = !== null) {
        quEl.style = "display: block;";
    }

    var pEl = document.getElementById("p" + question.questionNumber);

    if (pEl !== null) {
        pEl.style = "display: block;";
    }

    if (pickAnswer === question.correctAnswer) {
        if (pEl !== null) {
            pEl.innerHTML = "Correct!";
            currentUserScore = currentUserScore + 10;
        }
    } else {
        is (pEl !== null) {
            pEl.innerHTML = "Wrong!"
        }

        timer = timer - 20;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;

        setTimeout(function () {

            var nextQuestion = document.getElementById("questions-pages");
            nextQuestion.innerHTML = "";
            buildQuizElements();
        }, delayInMilliseconds);
    } else {
        endQuiz();
    }
};