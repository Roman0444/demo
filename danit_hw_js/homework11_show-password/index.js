// const input = document.querySelectorAll("#password, #repeat_password");

// input.forEach((elem) => {
//   elem.addEventListener("click", (e) => {
//     if (elem.getAttribute("type") === "password") {
//       elem.removeAttribute("type");
//       elem.setAttribute("type", "text");
//       e.target.innerHTML = `<img src="svg/eye-off.svg" alt="Show password"/>`;
//     } else {
//       elem.removeAttribute("type");
//       elem.setAttribute("type", "password");
//       e.target.innerHTML = `<img src="svg/eye-off.svg" alt="Show password" />`;
//     }
//   });
// });

const form = document.querySelector(".password-form");
const alarmText = document.querySelector(".red-text");
const icon = document.querySelectorAll(".icon-password");
const input = document.querySelectorAll("input");

form.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-eye")) {
    e.target.classList.replace("fa-eye", "fa-eye-slash");
  } else if (e.target.classList.contains("fa-eye-slash")) {
    e.target.classList.replace("fa-eye-slash", "fa-eye");
  }

  if (e.target.type === "password") {
    e.target.type = "text";
  } else {
    e.target.type = "password";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target[0].value === e.target[1].value) {
    alarmText.innerHTML = "";
    alert("You are welcome");
  } else {
    alarmText.innerHTML = "Потрібно ввести однакові значення";
  }

  for (let i = 0; i < input.length; i++) {
    e.target[i].value = "";
    e.target[i].type = "password";
    icon[i].classList.replace("fa-eye-slash", "fa-eye");
  }
});
