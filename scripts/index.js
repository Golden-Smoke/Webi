const faq_questions = document.querySelectorAll(".faq-question-cont");
const faq_wholes = document.querySelectorAll('.faq-whole')
const grid_cards = document.querySelector(".recipes-grid");
const button_next = document.getElementById("next");
const button_prev = document.getElementById("prev");
const videoHeader = document.getElementById('video-bg') 

const mediaQuery = window.matchMedia('(max-width:800px)')

mediaQuery.addEventListener('change',() =>{
  if(mediaQuery.matches){
    videoHeader.setAttribute('src','../video/video-bg-mobile.mp4')
  }
  else{
    videoHeader.setAttribute('src','../video/video-bg.mp4')
  }
  
})

// Recipe Card - Gap
let gap = 20;
//------------------
faq_questions.forEach((faq_quest) => {
  const faq_answer = faq_quest.nextElementSibling;
  faq_quest.addEventListener("click", () => {
    faq_quest.classList.toggle("open");

    if (faq_quest.classList.contains("open")) {
      faq_answer.style.height = faq_answer.scrollHeight + "px";
    } else {
      faq_answer.style.height = 0;
    }
  });
});

let card_width;
let countWidth = 0,
  counter = 1;
button_next.addEventListener("click", () => {
  if (counter == grid_cards.childElementCount - 1) {
    counter = 1;
    countWidth = 0;
    grid_cards.style.transform = `translate(0px)`;
    return;
  }
  counter++;
  card_width = grid_cards.firstElementChild.clientWidth + gap;
  countWidth += card_width;
  grid_cards.style.transform = `translate(-${countWidth}px)`;
});
button_prev.addEventListener("click", () => {
  if (counter == 1) {
    counter = grid_cards.childElementCount - 1;
    card_width = grid_cards.firstElementChild.clientWidth + gap;
    countWidth = card_width * (counter - 1);
    grid_cards.style.transform = `translate(-${countWidth}px)`;
    return;
  }
  counter--;
  card_width = grid_cards.firstElementChild.clientWidth + gap;
  countWidth -= card_width;
  grid_cards.style.transform = `translate(-${countWidth}px)`;
});


faq_wholes.forEach(faq =>{
  faq.addEventListener('focus',() =>{
    const faq_quest = faq.querySelector('.faq-question-cont')
    const faq_answer = faq_quest.nextElementSibling 
    faq.addEventListener('keydown',(e) =>{
       if(e.code == 'Enter'){
        faq_quest.classList.toggle("open");

        if (faq_quest.classList.contains("open")) {
          faq_answer.style.height = faq_answer.scrollHeight + "px";
        } else {
          faq_answer.style.height = 0;
        }
       }
    })
  })
})

window.addEventListener('load',() =>{
  if(mediaQuery.matches){
    videoHeader.setAttribute('src','../video/video-bg-mobile.mp4')
    console.log('Smaller Loaded')
  }
  else{
    videoHeader.setAttribute('src','../video/video-bg.mp4')
    console.log('Bigger Loaded')
  }

})