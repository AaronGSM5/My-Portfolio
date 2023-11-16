// VARIABLES
// VARIABLES
const workContent = document.querySelector('.work-content')
const aboutContent = document.querySelector('.about-content')

const itemContainer = document.querySelector('.item-container')
  const slider1 = document.querySelector('.slider1')
  const slider2 = document.querySelector('.slider2')
  const slider3 = document.querySelector('.slider3')
  const arrowLeft = document.querySelector('.arrowL')
  const arrowRight = document.querySelector('.arrowR')

let onItem = 1
// VARIABLES
// VARIABLES

// FUNCTIONS
// FUNCTIONS
function sliderButtons(num) {
  slider1.style.background = 'white'
  slider2.style.background = 'white'
  slider3.style.background = 'white'
  
  if(num === 1) {
    slider1.style.background = 'rgb(9, 255, 0)'
    itemContainer.scrollLeft = 0
    onItem = 1
  }
  else if(num === 2) {
    slider2.style.background = 'rgb(0, 162, 255)'
    itemContainer.scrollLeft = 1000
    onItem = 2
  }
  else if(num === 3) {
    slider3.style.background = 'rgb(162, 0, 255)'
    itemContainer.scrollLeft = 2000
    onItem = 3
  }
}

function changeContent(content) {
  if (content ==='about') {
    workContent.style.zIndex = '100'
    aboutContent.style.zIndex = '101'
    document.querySelector('.work').style.textShadow = '0 0 2px white'
    document.querySelector('.about').style.textShadow = '0 0 10px white'
  }
  else if(content === 'work') {
    aboutContent.style.zIndex = '100'
    workContent.style.zIndex = '101'
    document.querySelector('.about').style.textShadow = '0 0 2px white'
    document.querySelector('.work').style.textShadow = '0 0 10px white'
  }
}

function scroll(direction) {
  if(direction === 'left') {
    itemContainer.scrollLeft += 1000
    if (onItem < 3) {
      onItem++
    }
  }

  else if(direction === 'right') {
    itemContainer.scrollLeft -= 1000
    if (onItem > 1) {
      onItem--
    }
  }

  slider1.style.background = 'white'
  slider2.style.background = 'white'
  slider3.style.background = 'white'

  if (onItem === 1) {slider1.style.background = 'rgb(9, 255, 0)'}
  if (onItem === 2) {slider2.style.background = 'rgb(0, 162, 255)'}
  if (onItem === 3) {slider3.style.background = 'rgb(162, 0, 255)'}
}
// FUNCTIONS
// FUNCTIONS

// EVENT LISTENERS
// EVENT LISTENERS
document.querySelector('.about').addEventListener('click', () => {changeContent('about')});

document.querySelector('.work').addEventListener('click', () => {changeContent('work')});

document.querySelector('.projekte').addEventListener('click', () => {changeContent('work')});

slider1.addEventListener('click', () => {sliderButtons(1)})
slider2.addEventListener('click', () => {sliderButtons(2)})
slider3.addEventListener('click', () => {sliderButtons(3)})

arrowLeft.addEventListener('click', () => {scroll('right')})
arrowRight.addEventListener('click', () => {scroll('left')})
// EVENT LISTENERS
// EVENT LISTENERS