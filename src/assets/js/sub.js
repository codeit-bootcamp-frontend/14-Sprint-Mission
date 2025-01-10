let visible_icon = document.querySelectorAll(".visible-icon");
let inputs = document.querySelectorAll(".form__input");
let formBtn = document.querySelector(".form__button");

visible_icon.forEach(function (value) {
  value.addEventListener("click", function (e) {
    if (e.target.previousElementSibling.getAttribute("type") == "text") {
      e.target.previousElementSibling.setAttribute("type", "password");
      e.target.classList.remove("active");
    } else {
      e.target.previousElementSibling.setAttribute("type", "text");
      e.target.classList.add("active");
    }
  });
});

function Check() {
  let result = [...inputs].some((input) => input.value.trim() === "");
  console.log(result);

  if (result) {
    formBtn.classList.remove("active");
  } else {
    formBtn.classList.add("active");
  }
}

inputs.forEach(function (value) {
  value.addEventListener("input", Check);
});
