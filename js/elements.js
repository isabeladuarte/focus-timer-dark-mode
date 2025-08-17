// Buttons
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')

// Buttons Sounds
const forest = document.querySelector('.forest')
const rain = document.querySelector('.rain')
const cafeteria = document.querySelector('.cafeteria')
const fire = document.querySelector('.fire')

// Audios
const btnForest = new Audio('/audio/Floresta.mp3') 
const btnRain = new Audio('/audio/Chuva.mp3') 
const btnCafeteria = new Audio('/audio/Cafeteria.mp3') 
const btnFire = new Audio('/audio/Lareira.mp3') 

const volume = document.getElementById('volume')

// Seconds and Minutes
const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')

// Dark Mode
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const html = document.querySelector('html')

export {
    buttonPlay,
    buttonStop,
    buttonMore,
    buttonLess,
    btnForest,
    btnRain,
    btnCafeteria,
    btnFire,
    forest,
    rain,
    cafeteria,
    fire,
    secondsDisplay,
    minutesDisplay,
    sun,
    moon,
    html,
    volume
} 