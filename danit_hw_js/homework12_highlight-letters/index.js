// const buttons = document.querySelectorAll(".btn");

// document.addEventListener("keydown", (e) => {
//   buttons.forEach((btn) => {
//     btn.classList.remove("btn-pressed");
//     if (e.key.toUpperCase() == btn.innerHTML || e.code == btn.innerHTML) {
//       btn.classList.add("btn-pressed");
//     } else {
//       null;
//     }
//   });
// });

const buttons = document.querySelectorAll(".btn");
document.addEventListener("keydown", (e) => {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-pressed");
    if (e.key.toUpperCase() == btn.innerHTML || e.code == btn.innerHTML) {
      btn.classList.add("btn-pressed");
    } else {
      null;
    }
  });
});
