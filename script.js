//Variables for DOM elements
const timerEL = document.querySelector('#timer')
const startScreenEL = document.querySelector('#startScreen')
const startBtnEL = document.querySelector('#startBtn')
const questionsEL = document.querySelector('#questions')
const choicesEl = document.querySelector('#choices')
const titleEl = document.querySelector('#title')
const feedbackEl = document.querySelector('#feedback')
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
  

//Timer
let time = questions.length * 10
let timer = ''

//Start Screen
function startQuiz() {
   
    startScreenEL.setAttribute('class','hidden')
    questionsEL.removeAttribute('class','hidden')
    timer = setInterval(clockTick, 1000)
    timerEL.textContent = time
    findQuestions()
}

//Get Questions from Array
function findQuestions() {
    let currentQuestion = questions[currentQuestionIndex]
    titleEl.textContent = currentQuestion.title
    choicesEl.textContent = ''


    currentQuestion.choices.forEach(function (choice, i) {
        const choiceButton = document.createElement('button')
        choiceButton.setAttribute('id', 'choices')
        choiceButton.setAttribute('value', choice)
        choiceButton.textContent = i + 1 + '.' + choice
        choiceButton.onclick = questionClick
        choicesEl.appendChild(ChoiceButton)
    })
}

function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }

startBtnEL.onclick = startQuiz