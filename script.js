//Variables for DOM elements
const timerEl = document.querySelector('#timer')
const startScreenEL = document.querySelector('#startScreen')
const startBtnEL = document.querySelector('#startBtn')
const questionsEL = document.querySelector('#questions')
const choicesEl = document.querySelector('#choices')
const titleEl = document.querySelector('#title')
const feedbackEl = document.querySelector('#feedback')
const submitBtn = document.querySelector('#submit')
let currentQuestionIndex = 0

var questions = [
    {
      title: "What is the best kind of dog?",
      choices: ["Small dogs", "Big Dogs", "All Dogs", "No dogs"],
      answer: "Big Dogs"
    },
    {
      title: "Who's a good boy?",
      choices: ["I am", "You are", "He is", "She is"],
      answer: "You are"
    },
    {
      title: "What is a dog's favorite treat?",
      choices: [
        "bacon",
        "eggs",
        "ice cream",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "How many dog's should I own?",
      choices: ["1", "2", "3", "All of them"],
      answer: "All of them"
    },
    {
      title:
        "This whole quiz is my opinion it seems like right?",
      choices: ["Probably", "You made it not me", "Who's you in this instance", "Customer is always right"],
      answer: "Probably"
    }
  ];
  
let time = questions.length * 15
let timerId;

function startQuiz() {
   
    startScreenEL.setAttribute('class','hidden')
    questionsEL.removeAttribute('class','hidden')
    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = time
    findQuestions()
}

function findQuestions() {
    let currentQuestion = questions[currentQuestionIndex]
    titleEl.textContent = currentQuestion.title
    choicesEl.textContent = ''


    currentQuestion.choices.forEach(function (choice, i) {
        var choiceButton = document.createElement('button')
        choiceButton.setAttribute('class', 'choices')
        choiceButton.setAttribute('value', choices)
        choiceButton.textContent = i + 1 + '.' + choice
        choiceButton.onclick = questionClick
        choicesEl.appendChild(choiceButton)
    })
}

function questionClick() {
 
  if (this.value !== questions[currentQuestionIndex].answer) {
  
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    findQuestions();
  }
}

function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

function quizEnd() {
  clearInterval(timerId);
   var endScreenEl = document.getElementById("end-screen");
   endScreenEl.removeAttribute("class");
   var finalScoreEl = document.getElementById("final-score");
   finalScoreEl.textContent = time;
  questionsEL.setAttribute("class", "hidden");
}

function saveHighscore() {
  var initials = initialsEl.value.trim();
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      initials: initials
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
  }
}

submitBtn.onclick = saveHighscore;

startBtnEL.onclick = startQuiz

