import questions from './quetions.js'

const btnStartGame = document.getElementById('btn-init')
const btnHelp = document.getElementById('btn-help')
const btnBackHome = document.getElementById('btn-back')
const btnNext = document.getElementById('btn-next')

const initContainer = document.getElementById('introduction')
const helpContainer = document.getElementById('help')
const gameContainer = document.getElementById('game')
const nextContainer = document.getElementById('next')

const answersContainer = document.getElementById('answers')
const answerText = document.getElementById('question')

let currentIndexQuestion = 0
let rigthAnswers = 0

btnStartGame.addEventListener('click', startGame)
btnHelp.addEventListener('click', initHelp)
btnBackHome.addEventListener('click', backHome)
btnNext.addEventListener('click', nextQuestion)

function startGame(){
    initContainer.classList.add('hidden')
    gameContainer.classList.remove('hidden')
    nextQuestion()
}

function resetStates(){
    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextContainer.classList.add('hidden')
}

function nextQuestion(){
    resetStates()

    if (questions.length === currentIndexQuestion) {
        return finishGame()
    }

    answerText.textContent = questions[currentIndexQuestion].question
    questions[currentIndexQuestion].options.forEach(question => {
        const newAnswer = document.createElement('button')
        newAnswer.classList.add('answer')
        newAnswer.textContent = question.text
        if(question.correct) {
            newAnswer.dataset.correct = question.correct
        } 
        answersContainer.appendChild(newAnswer)
        newAnswer.addEventListener('click', selectAnswer)
    })
}

function selectAnswer(event){
    const answerClicked = event.target
    if(answerClicked.dataset.correct){
        document.body.classList.add('correct')
    } else {
        document.body.classList.add('error')
    }

    document.querySelectorAll('.answer').forEach(answer => {
        if(answer.dataset.correct){
            answer.classList.add('correct')
            rigthAnswers++
        } else {
            answer.classList.add('error')
        }

        answer.disabled = true
    })

    nextContainer.classList.remove('hidden')
    currentIndexQuestion++
}

function finishGame(){
    const totalQuestions = questions.length
    const performance = Math.floor(rigthAnswers * 100 / totalQuestions)
    
    let message = ''

    switch (true) {
        case (performance >= 90):
            message += 'Resultado excelente!'
            break
        case (performance >= 70):
            message += 'Na média'
            break
        case (performance >= 30):
            message += 'Precisa melhorar'
            break
        default:
            message += 'Horrível'
    }

    createFinalMessage(rigthAnswers, totalQuestions, message)
}

function createFinalMessage(rigthAnswers, totalQuestions, message) {
    const p = document.createElement('p')
    p.innerHTML = `
        Você acertou ${rigthAnswers} de ${totalQuestions} questões!
        <span>Resultado do Jogo: ${message}</span>
    `

    const button = document.createElement('button')
    button.classList.add('button', 'centerButton')
    button.textContent = 'Início'
    button.onclick = function() {
        window.location.reload()
    }

    gameContainer.innerHTML = ''
    gameContainer.appendChild(p)
    gameContainer.appendChild(button)
}


function initHelp(){
    if(helpContainer.classList.contains('hidden')){
        initContainer.classList.add('hidden')
        helpContainer.classList.remove('hidden')
    }
}

function backHome(){
    if(initContainer.classList.contains('hidden')){
        helpContainer.classList.add('hidden')
        initContainer.classList.remove('hidden')
    }
}