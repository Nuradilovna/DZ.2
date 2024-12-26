// // RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}



//STOP WATCH

const seconds = document.querySelector('#seconds')

let intervalId;
let secondsValue = 0;
let Run = false ;

const startTimer = () => {
    if(!Run) {
        intervalId = setInterval(() => {
            secondsValue++
            seconds.innerHTML = secondsValue
        }, 1000)
    }
    Run = true
}
document.querySelector('#start').addEventListener('click', startTimer)

const stopTimer = () => {
    clearInterval(intervalId)
    Run = false
}
document.querySelector('#stop').addEventListener('click', stopTimer)

const resetTimer = () => {
    clearInterval(intervalId)
    secondsValue = 0
    seconds.innerHTML = secondsValue
    Run = false
}
document.querySelector('#reset').addEventListener('click', resetTimer)

