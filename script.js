//Variables for DOM elements
const timerEL = document.querySelector('#timer')
const startScreenEL = document.querySelector('#startScreen')
const startBtnEL = document.querySelector('#startBtn')
const questionsEL = document.querySelector('#questions')
const choicesEl = document.querySelector('#choices')
const questionHeadEl = document.querySelector('#questionHead')
const feedbackEl = document.querySelector('#feedback')


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
    const currentQuestion = questions[currentQuestionIndex]
    questionHeadEl.textContent = currentQuestion.title
    choicesEl.innerHTML = ''


    currentQuestion.choices.forEach(function (choice, i) {
        const choiceButton = document.createElement('button')
        choiceButton.setAttribute('id', 'choices')
        choiceButton.setAttribute('value', choice)
        choiceButton.textContent = i + 1 + '.' + choice
        choiceButton.onclick = questionClick
        choicesEl.appendChild(ChoiceButton)
    })
}