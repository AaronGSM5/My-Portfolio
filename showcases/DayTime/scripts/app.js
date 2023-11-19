dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)

const time = document.querySelector('.time')
const date = document.querySelector('.date')
const input = document.querySelector('input')
const currentTimezone = document.getElementById('current-timezone')
const searchInput = document.querySelector(".searchInput");

const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')

let timezone = dayjs.tz.guess()
currentTimezone.innerHTML = timezone
updateTime()

setInterval(() => {
  updateTime()
}, 500);

function updateTime() {
  seconds.innerText = dayjs().tz(`${timezone}`).format('ss')
  minutes.innerText = dayjs().tz(`${timezone}`).format('mm')
  hours.innerText = dayjs().tz(`${timezone}`).format('HH')

  date.innerText = dayjs().tz(`${timezone}`).format('DD.MM.YYYY')
}

function changeTimeZone() {
  for (const timeZone of Intl.supportedValuesOf('timeZone')) {
    if (input.value === timeZone) {
      currentTimezone.innerText = input.value
      timezone = input.value
      closePopup()
      return;
    }

    else {
      document.querySelector('.error')
        .style.opacity = 1
    }
  }
}

function closePopup() {
  document.querySelector('.timezone-popup').style.zIndex = 99
  input.value = ''
  searchInput.classList.remove("active");
  document.querySelector('.error')
  .style.opacity = 0
}







//EVENTS
document.querySelector('.edit').addEventListener('click', () => {
  document.querySelector('.timezone-popup').style.zIndex = 101
})

document.querySelector('.close-icon').addEventListener('click', () => {
  closePopup();
})

document.getElementById('checkmark').addEventListener('click', () => {
  changeTimeZone()
})
//EVENTS



