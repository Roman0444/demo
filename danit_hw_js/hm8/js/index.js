const pCollection = document.querySelectorAll("p");
console.log(pCollection);

const elemById = document.getElementById("optionsList");
console.log(elemById);
const parentElement = elemById.parentElement;
console.log(parentElement);

const childElement = elemById.childNodes;
console.log(childElement);

const elemParagraph = document.getElementById("testParagraph");
elemParagraph.innerText = "This is a paragraph";
console.log(elemParagraph);

const headerChilds = document.querySelector(".main-header").childNodes;
console.log(headerChilds);
headerChilds.forEach((elem) => {
  elem.className = "nav-item";
});

const title = document.querySelectorAll(".section-title");
title.className = "";
