//Variables for DOM elements
const timerEL = document.querySelector('timer')
const startScreenEL = document.querySelector('startScreen')
const startBtnEL = document.querySelector('startBtn')
const questionsEL = document.querySelector('questions')
const choicesEl = document.querySelector('choices')
const questionHeadEl = document.querySelector('questionHead')


//Timer
let time = questions.length * 10
let timer

//Start Screen
function startQuiz() {
    startScreenEL.setAttribute('class', 'hide')
    questionsEL.removeAttribute('class')
    timer = setInterval(clockTick, 1000)
    timerEL.textContent = time
    findQuestions()
}

//Get Questions from Array
function findQuestions() {
    questionHeadEl.textContent = currentQuestion.title
    choicesEl.innerHTML = ''

    currentQuestion.choices.forEach(function(choice, i){
        
    })

    var currentQuestion = questions[currentQuestionIndex]

}