const container1 = document.querySelector('.container1') 
const text1 = document.querySelector('#text1') 

const totalTime1 = 7500
const breatheTime1 = (totalTime1 / 5) * 2
const holdTime1 = (totalTime1 / 5) 

inhaleFigure1 ()

function inhaleFigure1 () {
    text1.innerHTML = 'Inhale'
    container1.className = 'container1 grow'

    setTimeout( () => {
            text1.innerText = 'Relax'

            setTimeout ( () => {
                text1.innerText = 'Exhale'
                container1.className = 'container1 shrink'
            }, holdTime1) 
    }, breatheTime1)
}

setInterval(inhaleFigure1, totalTime1) 

const container2 = document.querySelector('.container2') 
const text2 = document.querySelector('#text2') 

const totalTime2 = 7500
const breatheTime2 = (totalTime2 / 5) * 2
const holdTime2 = (totalTime2 / 5) 

inhaleFigure2 ()

function inhaleFigure2 () {
    text2.innerHTML = 'Inhale'
    container2.className = 'container2 grow'

    setTimeout( () => {
            text2.innerText = 'Relax'

            setTimeout ( () => {
                text2.innerText = 'Exhale'
                container2.className = 'container2 shrink'
            }, holdTime2) 
    }, breatheTime2)
}

setInterval(inhaleFigure2, totalTime2)

const container3 = document.querySelector('.container3') 
const text3 = document.querySelector('#text3') 

const totalTime3 = 7500
const breatheTime3 = (totalTime3 / 5) * 2
const holdTime3 = (totalTime3 / 5) 

inhaleFigure3 ()

function inhaleFigure3 () {
    text3.innerHTML = 'Inhale'
    container3.className = 'container3 grow'

    setTimeout( () => {
            text3.innerText = 'Relax'

            setTimeout ( () => {
                text3.innerText = 'Exhale'
                container3.className = 'container3 shrink'
            }, holdTime3) 
    }, breatheTime3)
}

setInterval(inhaleFigure3, totalTime3) 
   
