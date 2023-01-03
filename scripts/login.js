const form = document.getElementById('log-form')
let IsLog = false
let count = 1

form.addEventListener('submit',e =>{
    e.preventDefault()
    const name = localStorage.getItem('First-Name') + ' ' + localStorage.getItem('Last-Name')
    input_fields.forEach(field =>{
        const item = localStorage.getItem(`${field.name}`)
        if(field.value != item){
            alert('Invalid Attempt!')
            return
        }
        else{
            if(count === input_fields.length){
                alert(`Successfull login! Hello,${name}!`)
                window.location.assign('./index.html')
            }
            count++
        }

    })
})
