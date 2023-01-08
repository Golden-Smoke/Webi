const cards = Array.from(document.querySelectorAll(".card"));
const search_btn = document.querySelector(".search-btn");
const errorMessage = document.querySelector('[data-set="error-message"]');
const searchInput = document.querySelector(".recipe-search");
const notFound = document.querySelector('[data-set="not-found-content"]');
const title = notFound.querySelector(".not-found-title");
const errMessage = notFound.querySelector(".not-found-message");
const removeFilterBtn = document.querySelector(".search-btn--rm");

window.addEventListener("load", () => {
  searchInput.value = "";
});

searchInput.addEventListener("focus", () => {
  errorMessage.classList.remove("show");
});

search_btn.addEventListener("click", () => {
  let inputVal = searchInput.value.toLowerCase();

  if (inputVal.trim() == "") {
    searchInput.value = "";
    errorMessage.classList.add("show");
    setTimeout(() => {
      errorMessage.classList.remove("show");
    }, 3000);

    return;
  }

  cards.forEach((card) => {
    card.style.display = "none";
  });

  let filteredCards = cards.filter((card) => {
    const cardTitle = card
      .querySelector(".card-title")
      .textContent.toLowerCase();
    const searchOptions = cardTitle.split(" ");
    let IsContain = false;
    searchOptions.forEach((item) => {
      if (IsContain) return;
      if (item.includes(inputVal)) IsContain = true;
    });
    return inputVal.includes(cardTitle) || IsContain;
  });

  if (filteredCards.length == 0) {
    errMessage.textContent = `"${searchInput.value}"`;
    title.textContent = "Sorry,there are no results for";
    notFound.classList.add("show");
    return;
  } else {
    notFound.classList.remove("show");
  }

  filteredCards.forEach((card) => {
    card.style.display = "block";
  });
});

removeFilterBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.style.display = "flex";
  });
  searchInput.value = "";
  notFound.classList.remove("show");
});
