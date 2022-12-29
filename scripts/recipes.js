const cards = Array.from(document.querySelectorAll('.card'))
const search_btn = document.querySelector('.search-btn')
const errorMessage = document.querySelector('[data-set="error-message"]')
const searchInput = document.querySelector('.recipe-search')
const notFound = document.querySelector('[data-set="not-found-content"]')

searchInput.addEventListener('focus',() =>{
    errorMessage.classList.remove('show')
})

search_btn.addEventListener('click',() =>{
    let inputVal = document.querySelector('.recipe-search').value.toLowerCase()

    if(inputVal.trim() == ''){
        document.querySelector('.recipe-search').value = ''
        errorMessage.classList.add('show')
        setTimeout(() =>{
            errorMessage.classList.remove('show')
        },3000)

        return
    } 

    cards.forEach(card =>{
        card.style.display = 'none'
    })

    let filteredCards = cards.filter(card =>{
        const cardTitle = card.querySelector('.card-title').textContent.toLowerCase()
        const searchOptions = cardTitle.split(' ')
        let IsContain = false
        searchOptions.forEach(item =>{
            if(IsContain) return
            if(item.includes(inputVal)) IsContain = true
        })
        return inputVal.includes(cardTitle) || IsContain
    })

    if(filteredCards.length == 0){
        notFound.classList.add('show')
        return
    }
    else{
        notFound.classList.remove('show')
    } 

    filteredCards.forEach(card =>{
        card.style.display = 'block'
    })
    
})
