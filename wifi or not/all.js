const wrapper = document.querySelector('.wrapper')
const toast = wrapper.querySelector('.toast')
const icon = wrapper.querySelector('.icon')
const title = wrapper.querySelector('span')
const word = wrapper.querySelector('p')

window.onload = () => {
  function ajax() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)  // sending GET request to this URL
    xhr.onload = () => { // once ajax load
      if(xhr.status == 200 && xhr.status < 300){
      }else{
        //  isn't online or get something else error
        toast.classList.add("offline")
      }
    }
    xhr.onerror = () => {  // if the path is running 404 or other error
      offline()
    }
    xhr.send()
  }

  function offline() {
    toast.classList.add("offline")
    title.innerHTML = "You're offline now"
  }

  setInterval(() => {
    ajax()
  }, 1000)
}