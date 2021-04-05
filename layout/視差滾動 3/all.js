let background = document.querySelector('.background')
let moon = document.querySelector('.moon')
let mountain = document.querySelector('.mountain')
let road = document.querySelector('.road')
let title = document.querySelector('.title')

window.addEventListener('scroll', scroll)

function scroll(){
  const value = window.scrollY

  background.style.top = `${value / 2}px`
  moon.style.left = `${-value / 2}px`
  mountain.style.top = `${-value * 0.15}px`
  road.style.top = `${value * 0.15}px`
  title.style.top = `${value}px`
}