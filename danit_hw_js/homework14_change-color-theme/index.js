const bgTheme = document.querySelector(".color-theme");
const htmlTheme = document.querySelector(".light");
console.log(bgTheme);
// bgTheme.addEventListener("click", () => {
//   let theme;
//   if (document.documentElement.classList.contains("light")) {
//     document.documentElement.classList.remove("light");
//     theme = document.documentElement.classList.add("dark");
//     localStorage.setItem("theme-black", theme);
//   } else if (document.documentElement.classList.contains("dark")) {
//     document.documentElement.classList.remove("dark");
//     theme = document.documentElement.classList.add("light");
//     localStorage.setItem("theme-white", theme);
//   }
// });
// document.documentElement = localStorage.getItem("theme");
// bgTheme.addEventListener("click", () => {
//   let theme;
//   if (bgTheme.classList.contains("light")) {
//     bgTheme.classList.replace("light", "dark");
//     theme = document.body.style.background = "#373737;";
//     localStorage.setItem("theme", theme);
//   } else if (bgTheme.classList.contains("dark")) {
//     bgTheme.classList.replace("dark", "light");
//     theme = document.body.style.background = "#ffffff;";
//     localStorage.setItem("theme", theme);
//   }
// });
bgTheme.addEventListener("click", () => {
  let theme;
  if (htmlTheme.classList.contains("light")) {
    htmlTheme.classList.replace("light", "dark");
    theme = htmlTheme.className;
    localStorage.setItem("theme", theme);
  } else if (htmlTheme.classList.contains("dark")) {
    htmlTheme.classList.replace("dark", "light");
    theme = htmlTheme.className;
    localStorage.setItem("theme", theme);
  }
});
htmlTheme.className = localStorage.getItem("theme");
