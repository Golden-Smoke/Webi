const nav = document.querySelector('.nav-wrapper')
const nav_links = document.querySelectorAll('.nav-link')
const ham_cont = document.querySelector('.ham-wrapper > svg')
const hamburger = document.querySelector('.ham-menu')
const ham_close = document.querySelector('.ham-menu svg')
const login_btn = document.querySelector('.nav-link.reg.space')
const login_box = document.querySelector('.login')
const login_close = document.querySelector('.login button')

nav_links.forEach(link =>{
    const copiedLink = link.cloneNode(true)
    copiedLink.classList.remove('nav-link')
    copiedLink.classList.add('ham-link')
    hamburger.appendChild(copiedLink)
})

const login_mobile_link = document.querySelector('.ham-link.reg.space')

function Login_Link(param){
    param.addEventListener('click',() =>{
        login_box.classList.add('show')
    })
}

Login_Link(login_btn)
Login_Link(login_mobile_link)

login_close.addEventListener('click',() =>{
    login_box.classList.remove('show')
    document.body.style.overflow = 'initial'
    document.body.style.paddingInlineStart = 'initial'
})

ham_close.addEventListener('click',() =>{
    hamburger.classList.remove('open')
})
ham_cont.addEventListener('click',() =>{
    hamburger.classList.add('open')
})

let lastScroll = 0;

window.addEventListener('scroll',() =>{
    let currentScroll = window.pageYOffset

    if(currentScroll > lastScroll){
        nav.classList.add('scroll-down')
        nav.classList.remove('scroll-up')
        hamburger.classList.remove('open')
    }
    if(currentScroll < lastScroll){
        nav.classList.add('scroll-up')
        nav.classList.remove('scroll-down')
    }
    lastScroll = currentScroll

})

 



