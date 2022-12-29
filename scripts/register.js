const fields = document.querySelectorAll('.form-field')
const input_fields = document.querySelectorAll('.input-field')

window.addEventListener('load',()=>{
    input_fields.forEach(field =>{
        field.value = ''
    })
})
fields.forEach(field =>{
    const placeholder = field.querySelector('.placeholder')
   
    field.addEventListener('focusin',() =>{
        placeholder.classList.add('focused')
    })

    field.addEventListener('focusout',() =>{
        let input_value = field.querySelector('.input-field').value
        if(input_value.trim() == "")
        {
            placeholder.classList.remove('focused')
            field.querySelector('.input-field').value = ''
        }
        else return
    })
})