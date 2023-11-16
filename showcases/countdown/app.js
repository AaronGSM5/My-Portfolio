//VARS
//VARS
const inputSeconds = document.querySelector('.input-second')
const inputMinutes = document.querySelector('.input-minute')

let timerSek = 0;
let timerMin = 0;
let interval;
let isIntervalRunning = false;
//VARS
//VARS

//FUNCTIONS
//FUNCTIONS
function timer() {
    if (isIntervalRunning === false) {
        isIntervalRunning = true;
        interval = 
            setInterval(() => {
                if (timerSek > 0) {
                    timerSek--
                }
    
                else if (timerSek == 0 && timerMin >= 1) {
                    timerSek = 59
                    timerMin--
                }
    
                else if(timerMin === 0 && timerSek === 0) {
                    console.log(timerMin)
                    clearInterval(interval)
                }
    
                document.querySelector('.timer-show').innerHTML =
                `${timerMin} : ${timerSek}`
                console.log('ch1')
            }, 1000);
            document.querySelector('.start').innerHTML = 'Stop'
    }

    else if (isIntervalRunning === true) {
        isIntervalRunning = false;
        clearInterval(interval)
        document.querySelector('.start').innerHTML = 'Start'
    }
}
//FUNCTIONS
//FUNCTIONS

//EVENTS
//EVENTS
document.querySelector('.start').addEventListener('click', () => {
    timer();
})

document.querySelector('.clear').addEventListener('click', () => {
    timerSek = 0;
    timerMin = 0;

    inputSeconds.value = ''
    inputMinutes.value = ''

    document.querySelector('.timer-show').innerHTML =
    `${timerMin} : ${timerSek}`
    document.querySelector('.start').innerHTML = 'Start'

})

inputSeconds.addEventListener('input', () => {
    if (inputSeconds.value <= 60 && isIntervalRunning === false) {
        timerSek = inputSeconds.value
        console.log(timerSek)
    }
})
inputMinutes.addEventListener('input', () => {
    if (isIntervalRunning === false) {
        timerMin = inputMinutes.value;
        console.log(timerMin)
    }
})
//EVENTS
//EVENTS




