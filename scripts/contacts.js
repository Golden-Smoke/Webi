const form = document.getElementById('form')
const fieldNameValue = document.getElementById('name')
const fields = document.querySelectorAll('input')
const message = document.getElementById('message')

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    alert(`Thank you for your message,${fieldNameValue.value}`)
    fields.forEach(field =>{
        field.value = ''
    })
    message.value = ''
})