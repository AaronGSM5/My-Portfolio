const blur = document.querySelector('.blur')
const container = document.querySelector('.container')

window.addEventListener('DOMContentLoaded', () =>{
  blur.style.opacity = 1

  setTimeout(() => {
    container.style.opacity = 1
  }, 1000);
})