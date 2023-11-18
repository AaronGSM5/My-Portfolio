
const intro = document.querySelector('.intro')

const page = document.querySelector('.page')
const title = document.querySelector('.header-title')

const content = document.querySelector('.content')
const hallo = document.getElementById("hallo")
const text = document.getElementById("text")

const navLinks = document.querySelector('.nav-links-container')
const about = document.querySelector('.about')
const work = document.querySelector('.work')
const contact = document.querySelector('.contact')


const rBorder = document.querySelector('.right-right-border')
const bBorder = document.querySelector('.right-bottom-border')
const lBorder = document.querySelector('.left-left-border')
const tBorder = document.querySelector('.left-top-border')

window.addEventListener('DOMContentLoaded', () =>{

  setTimeout(() => {
    rBorder.style.height = '300px'
    rBorder.style.right = '-30px'
    rBorder.style.bottom = '-30px'

    bBorder.style.width = '300px'
    bBorder.style.right = '-30px'
    bBorder.style.bottom = '-30px'

    lBorder.style.height = '300px'
    lBorder.style.top = '-30px'
    lBorder.style.left = '-30px'

    tBorder.style.width = '300px'
    tBorder.style.top = '-30px'
    tBorder.style.left = '-30px'

    intro.style.opacity = 0
  }, 1000);

setTimeout(() => {
  page.style.opacity = '1'
}, 2000);


setTimeout(() => {
  title.style.left = '0'
  navLinks.style.margin = '0'

  setTimeout(() => {
    title.style.opacity = '1'
    navLinks.style.opacity = '1'

    setTimeout(() => {
      about.style.opacity = '1'
      work.style.opacity = '1'

      setTimeout(() => {
        content.style.opacity = '1'
        setTimeout(() => {
          hallo.style.textShadow = '0 0 50px white'
          setTimeout(() => {
            hallo.style.textShadow = '0 0 10px white'
          }, 200);
        }, 500);
      }, 1000);
    }, 500);
  }, 500);
}, 2200);
})