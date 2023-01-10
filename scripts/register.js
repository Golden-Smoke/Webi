const form = document.getElementById("reg-form");

form.addEventListener("submit", (e) => {
  input_fields.forEach((field) => {
    localStorage.setItem(`${field.name}`, field.value);
  });
  e.preventDefault();
  alert("Successfully registered!");
  window.location.assign("./index.html");
});
