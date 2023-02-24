const city = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
const array = ["1", "2", "3", "sea", "user", 23];

const showList = (arr, container = document.body) =>
  arr.map((elem) => `<li>${elem}</li>`);
const ulElem = document.querySelector("#list");
ulElem.insertAdjacentHTML("afterbegin", showList(city).join(""));
