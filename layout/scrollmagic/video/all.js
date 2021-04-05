const intro = document.querySelector('.intro')
const video = document.querySelector('video')
const text = document.querySelector('h1')

const section = document.querySelector('section')
const end = section.querySelector('h1')


// scrollMagic

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators()
.setPin(intro) 
.addTo(controller)


// video animation

let acceMount = 0.1  // 慣性。若值為 1 ，當停止滑動時影片則停止。數字越小慣性越大
let scrollPos = 0
let delay = 0

scene.on('update', e => {
  scrollPos = e.scrollPos / 1000
})

setInterval(() => {
  delay += (scrollPos - delay) * acceMount
  video.currentTime = delay
}, 50)