const form = document.getElementById('reg-form')
const passwordField = document.querySelector('.input-field[type="password"]')
const passErrMessage = document.querySelector('.error-msg')


passwordField.addEventListener('input',() =>{
  if(passwordField.value.length == 0){
    passErrMessage.textContent = ''
  }
  else if(passwordField.value.length < 10)
  {
    passErrMessage.textContent = 'Password is too short. Must be at least 10 characters'
  }
  else if(passwordField.value.length >= 10){
    passErrMessage.textContent = ''
  }
})

form.addEventListener('submit',e =>{
  input_fields.forEach(field =>{
    localStorage.setItem(`${field.name}`,field.value)
  })
  e.preventDefault()
  alert('Successfully registered!')
  window.location.assign('./index.html')
})
