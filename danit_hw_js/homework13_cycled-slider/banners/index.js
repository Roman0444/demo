const images = document.querySelectorAll(".image-to-show");
const slide = document.querySelector(".slide");
const buttons = document.querySelectorAll(".buttons");

let imgSrcArray = [];
let i = 0;
images.forEach((img) => {
  imgSrcArray.push(img.src);
});

const slideImage = () => {
  slide.src = imgSrcArray[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
};

const startSlide = setInterval(slideImage, 3000);

const stopSlide = () => {
  clearInterval(startSlide);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Stop") {
      stopSlide();
    } else if (e.target.innerHTML === "Continue") {
      setInterval(slideImage, 3000);
    }
  });
});
