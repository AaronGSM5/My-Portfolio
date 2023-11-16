//VARS
//VARS
const inputSeconds = document.querySelector('.input-second')
const inputMinutes = document.querySelector('.input-minute')
const title = document.querySelector('title')

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
    
                updateTimer();
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

function updateTimer() {
  document.querySelector('.timer-show').innerHTML =
  `${timerMin} : ${timerSek}`
  title.textContent = `${timerMin} : ${timerSek}`
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

    updateTimer();
    document.querySelector('.start').innerHTML = 'Start'

})

inputSeconds.addEventListener('input', () => {
    if (inputSeconds.value <= 60 && isIntervalRunning === false && inputSeconds.value >= 0) {
        timerSek = inputSeconds.value || 0
        updateTimer();
    }
    else {
      inputSeconds.value = 0
      timerSek = 0
      updateTimer();
    }
})

inputMinutes.addEventListener('input', () => {
    if (isIntervalRunning === false) {
      if (inputMinutes.value >= 0) {
        timerMin = inputMinutes.value || 0
        updateTimer();
      }
      else {
        inputMinutes.value = 0
        timerMin = 0
        updateTimer();
      }
    }
})
//EVENTS
//EVENTS




