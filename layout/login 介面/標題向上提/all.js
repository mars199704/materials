
const passwordInput = document.querySelector('.password')
const iconUnHide = document.querySelector('.unHide')
const iconHide = document.querySelector('.hide')


function hideOrNot(){
  if(passwordInput.type === 'text'){
    passwordInput.type = 'password'
    iconUnHide.style.display = 'none'
    iconHide.style.display = 'block'
  }else{
    passwordInput.type = 'text'
    iconUnHide.style.display = 'block'
    iconHide.style.display = 'none'
  }
}