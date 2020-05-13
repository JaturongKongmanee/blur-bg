let blurLevel = 0;

function addBorder(e) {
  e.target.classList.add("border-element");
}

function removeBorder(e) {
  e.target.classList.remove("border-element");
}

function toggleBlur(e) {
  if (e.target.dataset.blur === "false") {
    e.target.dataset.blur = "true";
    e.target.classList.add("blur-element");
    e.target.style.setProperty(`--blur`, blurLevel + "px");
  } else {
    e.target.dataset.blur = "false";
    e.target.classList.remove("blur-element");
  }
}

let addEvent = () => {
  let elements = document.body.querySelectorAll("*");
  elements.forEach((ele) => {
    if (ele.dataset.ig === "true") {
      return;
    }
    ele.dataset.blur = "false";
    ele.addEventListener("mouseenter", addBorder, true);
    ele.addEventListener("mouseleave", removeBorder, true);
    ele.addEventListener("click", toggleBlur, true);
  });
};

let removeEvent = () => {
  let elements = document.body.querySelectorAll("*");
  elements.forEach((ele) => {
    console.log("removing listener...", ele);
    ele.removeEventListener("mouseenter", addBorder, true);
    ele.removeEventListener("mouseleave", removeBorder, true);
    ele.removeEventListener("click", toggleBlur, true);
  });
};

let removeAllBlurEle = () => {
  let elements = document.body.querySelectorAll("*");
  elements.forEach((ele) => {
    if (ele.dataset.blur === "true") {
      ele.classList.remove("blur-element");
      ele.dataset.blur = "false";
    }
  });
};

let enableEvent = document.querySelector(".enableEvent");
let disableEvent = document.querySelector(".disableEvent");
let removeAllBlur = document.querySelector(".removeAllBlur");

enableEvent.addEventListener("click", addEvent);
disableEvent.addEventListener("click", removeEvent);
removeAllBlur.addEventListener("click", removeAllBlurEle);

var imgTest = document.getElementById("imageTest");
// output.innerHTML = slider.value; // Display the default slider value
imgTest.style.setProperty(`--blur`, blurLevel + "px");

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function () {
//   output.innerHTML = this.value;
//   blurLevel = this.value;
//   imgTest.style.setProperty(`--blur`, this.value + "px");
// };

var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value / 10;
  var bulletPosition = rangeSlider.value / rangeSlider.max;
  rangeBullet.style.left = bulletPosition * 578 + "px";
  blurLevel = rangeSlider.value / 10;
  imgTest.style.setProperty(`--blur`, rangeSlider.value / 10 + "px");
}