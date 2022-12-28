const cards = Array.from(document.querySelectorAll('.card-link'))
const search_btn = document.querySelector('.search-btn')

search_btn.addEventListener('click',() =>{
    let inputVal = document.querySelector('.recipe-search').value

    cards.forEach(card =>{
        card.style.display = 'none'
    })

    let filteredCards = cards.filter(card =>{
        const cardTitle = card.querySelector('.card-title').textContent
        return inputVal.includes(cardTitle)
    })

    filteredCards.forEach(card =>{
        card.style.display = 'block'
    })
})