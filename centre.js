let layer = document.querySelectorAll(".layer");
let lay1 = document.querySelector(".lay1");
let lay2 = document.querySelector(".lay2");
let lay3 = document.querySelector(".lay3");
let h3h = document.querySelectorAll(".pr");
let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let h3 = document.querySelector(".h3");
window.addEventListener("scroll", (e) => {
  let mediaMin = window.matchMedia("(min-width:701px");
  let media = window.matchMedia("(max-width:700px)");
  if (mediaMin.matches) {
    if (window.scrollY > 1150 && window.scrollY <= 1455) {
      layer.forEach((ele) => {
        ele.classList.add("laybg");
      });
      h3h.forEach((ele) => {
        ele.classList.add("hbg");
      });
    } else {
      layer.forEach((ele) => {
        ele.classList.remove("laybg");
      });
      h3h.forEach((ele) => {
        ele.classList.remove("hbg");
      });
    }
  } else if (media.matches) {
    if (window.scrollY > 1700 && window.scrollY <= 2260) {
      lay1.classList.add("laybg");
      h1.classList.add("hbg");
    } else {
      lay1.classList.remove("laybg");
      h1.classList.remove("hbg");
    }
    if (window.scrollY > 2260 && window.scrollY <= 2730) {
      lay2.classList.add("laybg");
      h2.classList.add("hbg");
    } else {
      lay2.classList.remove("laybg");
      h2.classList.remove("hbg");
    }
    if (window.scrollY > 2730 && window.scrollY <= 3230) {
      lay3.classList.add("laybg");
      h3.classList.add("hbg");
    } else {
      lay3.classList.remove("laybg");
      h3.classList.remove("hbg");
    }
  }
});
