//BACKGROUND
//BACKGROUND
const button = document.querySelector('.change-background')
const backgroundImg = document.querySelector('.background')

button.addEventListener('click', () => {changeBackground()})

let c = 0

function changeBackground() {
  if (c === 0) {backgroundImg.src = "backgrounds/ocean.jpg"; c++}

  else if (c === 1) {backgroundImg.src = "backgrounds/forest.jpg"; c++}
  else if (c === 2) {backgroundImg.src = "backgrounds/mountains.jpg"; c++}
  else if (c === 3) {backgroundImg.src = "backgrounds/sea.jpg"; c++}
  else if (c === 4) {backgroundImg.src = "backgrounds/street.jpg"; c++}
  else if (c === 5) {backgroundImg.src = "backgrounds/winter.jpg"; c++}

  else {backgroundImg.src = "backgrounds/sky.webp"; c = 0}
}
//BACKGROUND
//BACKGROUND

//INTRO
//INTRO
const blur = document.querySelector('.blur')
const container = document.querySelector('.container')

window.addEventListener('DOMContentLoaded', () =>{
  blur.style.opacity = 1

  setTimeout(() => {
    container.style.opacity = 1
  }, 1000);
})
//INTRO
//INTRO