let blurLevel = 5;

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
    // console.log("removing listener...", ele);
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
  removeEvent();
};

let menuDesc = document.querySelector("#menu-desc");

function updateDesc(e) {
  menuDesc.innerHTML = e.target.dataset.name;
  // Add some animation here
}

let enableEvent = document.querySelector("#cursor-blur");
let disableEvent = document.querySelector("#exit-blur");
let removeAllBlur = document.querySelector("#remove-blur");

enableEvent.addEventListener("click", addEvent);
enableEvent.addEventListener("mouseenter", updateDesc);

disableEvent.addEventListener("click", removeEvent);
disableEvent.addEventListener("mouseenter", updateDesc);

removeAllBlur.addEventListener("click", removeAllBlurEle);
removeAllBlur.addEventListener("mouseenter", updateDesc);

let imgTest = document.getElementById("imageTest");
// output.innerHTML = slider.value; // Display the default slider value
imgTest.style.setProperty(`--blur`, blurLevel + "px");

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function () {
//   output.innerHTML = this.value;
//   blurLevel = this.value;
//   imgTest.style.setProperty(`--blur`, this.value + "px");
// };

let rangeSlider = document.getElementById("rs-range-line");
let rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value / 10;
  let bulletPosition = rangeSlider.value / rangeSlider.max;
  // console.log(rangeSlider.value, bulletPosition);
  rangeBullet.style.left = bulletPosition * 292 + "px";
  blurLevel = rangeSlider.value / 10;
  imgTest.style.setProperty(`--blur`, rangeSlider.value / 10 + "px");
}

showSliderValue();

let menuIcon = document.querySelector("#menu-container");
let menuList = menuIcon.querySelectorAll("button");
menuList.forEach((ele) => {
  ele.dataset.clicked = "false";
});

menuIcon.addEventListener("click", (e) => {
  console.log("HHHHH", e.target);
  if (e.target.id === "menu-container") return;
  if (e.target.dataset.clicked === "true") return;

  // Otherwise, Disable others
  menuList.forEach((ele) => {
    if (ele.dataset.clicked === "true") {
      // remove bg
      ele.classList.remove("clicked-menu-bg");
      // set data-clicked == false
      ele.dataset.clicked = "false";
    }
  });

  // Enable
  if (e.target.nodeName === "path") {
    e.target.parentNode.parentNode.classList.add("clicked-menu-bg");
    e.target.parentNode.parentNode.dataset.clicked = "true";
  } else if (e.target.nodeName === "svg") {
    e.target.parentNode.classList.add("clicked-menu-bg");
    e.target.parentNode.dataset.clicked = "true";
  } else {
    e.target.classList.add("clicked-menu-bg");
    e.target.dataset.clicked = "true";
  }
});
