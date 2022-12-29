const faq_questions = document.querySelectorAll(".faq-question-cont");
const grid_cards = document.querySelector(".recipes-grid");
const button_next = document.getElementById("next");
const button_prev = document.getElementById("prev");

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
