// Importação de banco de questões
import questions from './quetions.js'

// Adquirindo principais botões e sessões pelo DOM
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

// Recursos / Habilidades
const btnSkip = document.getElementById('hability1')
const btnEliminate = document.getElementById('hability2')
const btnHint = document.getElementById('hability3')

// Garantindo que cada recurso seja usado apenas uma vez
let usedSkip = false
let usedEliminate = false
let usedHint = false

// Índice de questões
let currentIndexQuestion = 0
let rightAnswers = 0

// Adicionando eventos aos botões
btnStartGame.addEventListener('click', startGame)
btnHelp.addEventListener('click', initHelp)
btnBackHome.addEventListener('click', backHome)
btnNext.addEventListener('click', nextQuestion)

// Inicializa o quiz
function startGame() {
    initContainer.classList.add('hidden')
    gameContainer.classList.remove('hidden')
    btnSkip.disabled = false
    btnEliminate.disabled = false
    btnHint.disabled = false
    nextQuestion()
}

// Reseta as questões anteriores
function resetStates() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextContainer.classList.add('hidden')
}

// Passa para a próxima questão
function nextQuestion() {
    resetStates()

    if (currentIndexQuestion >= questions.length) {
        finishGame()
        return
    }

    answerText.textContent = questions[currentIndexQuestion].question
    questions[currentIndexQuestion].options.forEach(option => {
        const newAnswer = document.createElement('button')
        newAnswer.classList.add('answer')
        newAnswer.textContent = option.text
        if (option.correct) {
            newAnswer.dataset.correct = "true"
        } 
        answersContainer.appendChild(newAnswer)
        newAnswer.addEventListener('click', selectAnswer)
    })
}

// Verifica se a resposta está certa ou errada
function selectAnswer(event) {
    const answerClicked = event.target
    const isCorrect = answerClicked.dataset.correct === "true"

    if (isCorrect) {
        document.body.classList.add('correct')
        rightAnswers++ // Agora só incrementa se a resposta for correta
    } else {
        document.body.classList.add('error')
    }

    document.querySelectorAll('.answer').forEach(answer => {
        if (answer.dataset.correct === "true") {
            answer.classList.add('correct')
        } else {
            answer.classList.add('error')
        }
        answer.disabled = true
    })

    nextContainer.classList.remove('hidden')
    currentIndexQuestion++
}

// Finaliza o jogo e exibe a mensagem final
function finishGame() {
    const totalQuestions = questions.length
    const performance = Math.floor((rightAnswers * 100) / totalQuestions)
    
    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Bem demais!'
            break
        case (performance >= 70):
            message = 'Na média da turma'
            break
        case (performance >= 30):
            message = 'Tá mal ainda'
            break
        default:
            message = 'Horrível'
    }

    createFinalMessage(rightAnswers, totalQuestions, message)
}

// Cria a mensagem final do jogo
function createFinalMessage(rightAnswers, totalQuestions, message) {
    const p = document.createElement('p')
    p.classList.add('paragraph')
    p.innerHTML = `
        Você acertou ${rightAnswers} de ${totalQuestions} questões!<br>
        Resultado do Jogo: <span class="resultado-jogo">${message}</span>
    `

    const button = document.createElement('button')
    button.classList.add('button', 'centerButton')
    button.textContent = 'Início'
    button.onclick = function () {
        window.location.reload()
    }

    gameContainer.innerHTML = ''
    gameContainer.appendChild(p)
    gameContainer.appendChild(button)
}

// Verifica se a sessão de ajuda deve ser mostrada
function initHelp() {
    if (helpContainer.classList.contains('hidden')) {
        initContainer.classList.add('hidden')
        helpContainer.classList.remove('hidden')
    }
}

// Volta para a tela inicial
function backHome() {
    if (initContainer.classList.contains('hidden')) {
        helpContainer.classList.add('hidden')
        initContainer.classList.remove('hidden')
    }
}

// Botão de pular questão
btnSkip.addEventListener('click', () => {
    if (!usedSkip) {
        usedSkip = true
        btnSkip.disabled = true
        currentIndexQuestion++
        nextQuestion()
    }
})

// Botão de eliminar duas opções falsas
btnEliminate.addEventListener('click', () => {
    if (!usedEliminate) {
        usedEliminate = true
        btnEliminate.disabled = true
        const incorrectAnswers = Array.from(document.querySelectorAll('.answer')).filter(
            answer => !answer.dataset.correct
        )

        incorrectAnswers.slice(0, 2).forEach(answer => {
            answer.classList.add('hidden')
        })
    }
})

// Botão de dica
btnHint.addEventListener('click', () => {
    if (!usedHint) {
        usedHint = true
        btnHint.disabled = true

        const allAnswers = Array.from(document.querySelectorAll('.answer'))
        const correctAnswer = allAnswers.find(answer => answer.dataset.correct)

        const correctProbability = Math.floor(Math.random() * 21) + 70 // Entre 70% e 90%
        const remainingProbability = 100 - correctProbability

        const incorrectAnswers = allAnswers.filter(answer => !answer.dataset.correct)
        const sharedProbability = Math.floor(remainingProbability / incorrectAnswers.length)
        const leftover = remainingProbability % incorrectAnswers.length

        allAnswers.forEach((answer, index) => {
            let probability = answer === correctAnswer ? correctProbability : sharedProbability
            if (index === allAnswers.length - 1 && incorrectAnswers.includes(answer)) {
                probability += leftover
            }
            answer.textContent += ` (${probability}%)`
        })
    }
})
