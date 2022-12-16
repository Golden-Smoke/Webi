const sliding_img_final = document.querySelector('.img-end')
const sliding_img_start = document.querySelector('.img-start')
const sliding_imgs = document.querySelectorAll('.slide-img')
const rec_steps = document.querySelectorAll('.rec-step')
const rating_cont = document.querySelector('.rating-content')
const rating_img = document.querySelector('.rating-img-cont')

sliding_img_final.addEventListener('animationend',() =>{
    sliding_img_start.style.opacity = '0'
    sliding_imgs.forEach(img =>{
        img.classList.remove('animated')
    })
    setTimeout(() =>{
        sliding_imgs.forEach(img =>{
            img.classList.add('animated')
        })
        sliding_img_start.style.opacity = '1'
    },500)
})
const options = {}

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{

        if(entry.isIntersecting) entry.target.classList.add('show')
        else entry.target.classList.remove('show')
    })
},options)

rec_steps.forEach(step =>{
    observer.observe(step)
})


