// import questions from "./quetions"

const init = document.getElementById('btn-init')
const help = document.getElementById('btn-help')
const back = document.getElementById('btn-back')
const introContainer = document.getElementById('introduction')
const helpContainer = document.getElementById('help')
const gameContainer = document.getElementById('game')

init.addEventListener('click', initGame)
help.addEventListener('click', initHelp)
back.addEventListener('click', backIntro)

function initGame(){
    if (!introContainer.classList.contains('hidden')){
        introContainer.classList.add('hidden')
        gameContainer.classList.remove('hidden')
    }
}

function initHelp(){
    if (!introContainer.classList.contains('hidden')){
        introContainer.classList.add('hidden')
        helpContainer.classList.remove('hidden')
    }
}

function backIntro(){
    if (!helpContainer.classList.contains('hidden')){
        helpContainer.classList.add('hidden')
        introContainer.classList.remove('hidden')
    }
}