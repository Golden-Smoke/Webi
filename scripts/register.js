const fields = document.querySelectorAll('.form-field')

fields.forEach(field =>{
    const placeholder = field.querySelector('.placeholder')
    const input_value = field.querySelector('.input-field').value
    field.addEventListener('focusin',() =>{
        placeholder.classList.add('focused')
    })

    field.addEventListener('focusout',() =>{
        if(input_value)  placeholder.classList.remove('focused')
    })
})