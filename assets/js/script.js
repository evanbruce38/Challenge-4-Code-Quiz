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
var currentHighScore = 0;
var highScores = [];

// Array of questions //
var questionList = [
    
]