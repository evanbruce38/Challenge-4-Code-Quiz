// Variables //
var mainScreen = document.getElementById("main-screen");
var questionPages = document.getElementById("question-pages");
var startBtn = document.getElementById("start-btn");
var highScoreBtn = document.getElementById("high-score-btn");
var highScoresScreen = document.getElementById("high-scores-screen");
var timerText = document.getElementById("timer");
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
var correctQuestionsIndex = 0;
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

// grade question function //
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

// build quiz elements function //
var buildQuizElements = function() {
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);

    var questionTag = "h3";
    var OrederedListTag = "ol";
    var listItemTag = "li";
    var quTag = "qu"
    var pTag = "p";
    var buttonTag = "button";

    var questionEl = document.createElement(questionTag);
    questionEl.innerHTML = currentQuestion.question;

    var quEl = document.createElement(quTag);
    var pEl = document.createElement(pTag);

    quEl.setAttribute("id", "hr" + currentQuestion.questionNumber); 
    quEl.setAttribute("style", "display: none;");
    pEl.setAttribute("id", "p" + currentQuestion.questionNumber); 
    pEl.setAttribute("style", "display: none;");

    var orderedListEl = document.createElement(OrederedListTag);

    for (i = 0; i < currentQuestion.options.length; i++) {
        var optionText = currentQuestion.options[i]; 
        var listItemEl = document.createElement(listItemTag);
        listItemEl.setAttribute("style", "list-style-type: none;");
        var buttonEl = document.createElement(buttonTag);
        buttonEl.innerHTML = optionText;
        buttonEl.addEventListener("click", evaluateAnswer);
        buttonEl.setAttribute("class", "btn btn-primary");
        listItemEl.appendChild(buttonEl);
        orderedListEl.appendChild(listItemEl);
      }

    var questionContainer = document.getElementById("question-pages");
    questionContainer.appendChild(questionEl); 
    questionContainer.appendChild(orderedListEl);
    questionContainer.appendChild(quEl);
    questionContainer.appendChild(pEl);
};

// high scores button function //
var viewHighScores = function () {
    highScores = JSON.parse(localStorage.getItem("highScores"));
    if (highScores === null) {
        highScores = [];
    }

    var sortedHighScores = highScores.sort((a, b) =>
    a. score < b.score 1 : -1
    );

    highScores = sortedHighScores;
    timerText.setAttribute("style", "display: none;");
    highScoreBtn.setAttribute("style", "display: none;");
    mainScreen.setAttribute("style", "display: none;");
    highScoresScreen.setAttribute("style", "display: none;");
    questionPages.setAttribute("style", "display: none;");
    finalScoreScreen.setAttribute("style", "display: none;");

    for (var i = 0; i < sortedHighScores.length; i++) {
        var currentUserScore = sortedHighScores[i];

        var tdRankEL = document.createElement("td");
        tdRankEL.innerHTML = i + 1;

        var tdInitialsEl = document.createElement("td");
        tdInitialsEl.innerHTML = currentUserScore.initials;

        var tdScoresEl = document.createElement("td");
        tdScoresEl.innerHTML = currentUserScore.score;

        var trEl = document.createElement("tr");

        trEl.appendChild(tdRankEl);
        trEl.appendChild(tdInitialsEl);
        trEl.appendChild(tdScoresEl);
        highScoresTable.appendChild(trEl);
    }
};

highScoreBtn.addEventListener("click", viewHighScores);

// go back button //
var goBack = function () {
    timerText.setAttribute("style", "display: block;");
    highScoreButton.setAttribute("style", "display: block;");
    mainScreen.setAttribute("style", "display: block;");
    finalScoreScreen.setAttribute("style", "display: none;");
};

goBackBtn.addEventListener("click", goBack);





