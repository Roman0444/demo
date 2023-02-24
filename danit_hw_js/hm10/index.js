const tabsLi = document.querySelectorAll(".tabs-title");
const tabsItems = document.querySelectorAll(".tab__item");

tabsLi.forEach((item) => {
  item.addEventListener("click", () => {
    let currentLi = item;
    let tabId = currentLi.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentLi.classList.contains("active")) {
      tabsLi.forEach((item) => {
        item.classList.remove("active");
      });
      tabsItems.forEach((item) => {
        item.classList.remove("active");
      });
      currentLi.classList.add("active");
      currentTab.classList.add("active");
    }
  });
});

document.querySelector(".tabs-title").click();
