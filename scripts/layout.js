const nav = document.querySelector(".nav-wrapper");
const nav_links = document.querySelectorAll(".nav-link");
const ham_cont = document.querySelector(".ham-wrapper > svg");
const hamburger = document.querySelector(".ham-menu");
const ham_close = document.querySelector(".ham-menu svg");
const login_btn = document.querySelector(".nav-link.reg.space");
const themes = document.querySelectorAll(".toggle");

window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");
  if (theme == "dark") document.body.classList.add("dark");
  else document.body.classList.remove("dark");
});

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

nav_links.forEach((link) => {
  const copiedLink = link.cloneNode(true);
  copiedLink.classList.remove("nav-link");
  copiedLink.classList.add("ham-link");
  hamburger.appendChild(copiedLink);
});

ham_close.addEventListener("click", () => {
  hamburger.classList.remove("open");
});
ham_cont.addEventListener("click", () => {
  hamburger.classList.add("open");
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    nav.classList.add("scroll-down");
    nav.classList.remove("scroll-up");
    hamburger.classList.remove("open");
  }
  if (currentScroll < lastScroll) {
    nav.classList.add("scroll-up");
    nav.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});
