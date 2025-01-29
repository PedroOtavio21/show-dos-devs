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

// Garantido que cada recurso seja usado apenas uma vez
let usedSkip = false
let usedEliminate = false
let usedHint = false

// Indice de questões
let currentIndexQuestion = 0
let rigthAnswers = 0

// Adicionando eventos aos botões selecionados acima
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

// Reseta todas as questões presentes do questionário
function resetStates(){
    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextContainer.classList.add('hidden')
}

// Passa para a próxima questão
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

// Verifica se questão está certa ou errada
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

// Exibe uma mensagem ao final do jogo, dependendo da performance do jogador
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

// Cria a mensagem que será exibida no final do jogo
function createFinalMessage(rigthAnswers, totalQuestions, message) {
    const p = document.createElement('p')
    p.classList.add('paragraph')
    p.innerHTML = `
        Você acertou ${rigthAnswers} de ${totalQuestions} questões!
        <span class="resultado-jogo">Resultado do Jogo: ${message}</span>
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

// Verifica se sessão de ajuda deverá ser oculta
function initHelp(){
    if(helpContainer.classList.contains('hidden')){
        initContainer.classList.add('hidden')
        helpContainer.classList.remove('hidden')
    }
}

// Volta para a sessão de início ao clicar no botão de voltar
function backHome(){
    if(initContainer.classList.contains('hidden')){
        helpContainer.classList.add('hidden')
        initContainer.classList.remove('hidden')
    }
}

// Botão de passar a questão
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
  
      // Remover até 2 respostas incorretas
      incorrectAnswers.slice(0, 2).forEach(answer => {
        answer.classList.add('hidden')
      })
    }
  })
  
  // Botão de dica (mostra a probabilidade de uma resposta estar certa)
  btnHint.addEventListener('click', () => {
    if (!usedHint) {
      usedHint = true
      btnHint.disabled = true
  
      const allAnswers = Array.from(document.querySelectorAll('.answer'))
      const correctAnswer = allAnswers.find(answer => answer.dataset.correct)
  
      // Definir porcentagem da resposta correta
      const correctProbability = Math.floor(Math.random() * 21) + 70 // Entre 70% e 90%
      const remainingProbability = 100 - correctProbability
  
      // Distribuir a porcentagem restante igualmente entre as respostas incorretas
      const incorrectAnswers = allAnswers.filter(answer => !answer.dataset.correct)
      const sharedProbability = Math.floor(remainingProbability / incorrectAnswers.length)
      const leftover = remainingProbability % incorrectAnswers.length
  
      // Aplicar porcentagens a cada resposta
      allAnswers.forEach((answer, index) => {
        let probability
        if (answer === correctAnswer) {
          probability = correctProbability
        } else {
          probability = sharedProbability
          // Adicionar o "leftover" à última resposta incorreta para completar 100%
          if (index === allAnswers.length - 1 && incorrectAnswers.includes(answer)) {
            probability += leftover
          }
        }
        answer.textContent += ` (${probability}%)`
      })
    }
})