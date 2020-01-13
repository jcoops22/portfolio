const pic = document.getElementById("pic");
const box1 = document.getElementsByClassName("box1");
const box2 = document.getElementsByClassName("box2");
const box3 = document.getElementsByClassName("box3");
const box4 = document.getElementsByClassName("box4");
const box5 = document.getElementsByClassName("box5");
const box6 = document.getElementsByClassName("box6");
const box7 = document.getElementsByClassName("box7");
const box8 = document.getElementsByClassName("box8");
const nav = document.getElementsByTagName("nav");
const navh4 = document.getElementById("navh4");
const links = document.querySelectorAll("a");
const navLinks = document.querySelectorAll("nav div li a");
const footer = document.getElementsByTagName("footer");
const focusBar = document.querySelectorAll("focusBar");

function loadPic() {
  setTimeout(() => {
    pic.style.opacity = 1;
    setTimeout(() => {
      nav[0].style.opacity = 1;
      nav[0].style.height = "80px";
    }, 1000);
  }, 4800);
}

function grow(box) {
  let width = 100;
  let rate = setInterval(() => {
    width > 0 ? width-- : clearInterval(rate);
    box[0].style.width = width + "%";
    box[0].style.height = width + "vh";
  }, 2);
}
function shrink(box) {
  let trans = 0;
  let rate = setInterval(() => {
    trans <= 99 ? trans++ : clearInterval(rate);
    box[0].style.transform = `translate(${trans}%,${-trans}%)`;
    setTimeout(() => {
      box[0].style.display = "none";
    }, 1000);
  }, 1);
}

window.onload = function timingScheme() {
  setTimeout(() => {
    grow(box1);
    console.log("first box");
  }, 0);
  setTimeout(() => {
    shrink(box2);
    console.log("second box");
  }, 500);
  setTimeout(() => {
    grow(box3);
    console.log("third box");
  }, 1000);
  setTimeout(() => {
    shrink(box4);
    console.log("fourth box");
  }, 1500);
  setTimeout(() => {
    grow(box5);
    console.log("fifth box");
  }, 2000);
  setTimeout(() => {
    shrink(box6);
    console.log("sixth box");
  }, 2500);
  setTimeout(() => {
    grow(box7);
    console.log("seventh box");
  }, 3000);
  setTimeout(() => {
    shrink(box8);
    console.log("eighth box");
  }, 3500);
  loadPic();
};

window.addEventListener("scroll", () => {
  window.pageYOffset > 0
    ? nav[0].classList.add("scrollNav")
    : nav[0].classList.remove("scrollNav");
  window.pageYOffset > 0
    ? (nav[0].style.height = "40px")
    : (nav[0].style.height = "80px");
  window.pageYOffset > 0
    ? (navh4.style.transform = "translateX(-80px)")
    : (navh4.style.transform = "translateX(40px)");

  links.forEach(link => {
    if (window.pageYOffset > 0 && link.classList.contains("active")) {
      link.style.borderLeft = "3px solid crimson";
    }
  });
  links.forEach(link => {
    window.pageYOffset > 0
      ? (link.style.color = "crimson")
      : (link.style.color = "moccasin");
  });
});

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    if (window.pageYOffset > 0) {
      link.classList.contains("active")
        ? null
        : (link.style.borderLeft = "3px solid crimson");
    } else {
      link.classList.contains("active")
        ? null
        : (link.style.borderTop = "3px solid moccasin");
    }
  });
  link.addEventListener("mouseout", () => {
    if (window.pageYOffset > 0) {
      link.classList.contains("active")
        ? null
        : (link.style.borderLeft = "none");
    } else {
      link.classList.contains("active")
        ? null
        : (link.style.borderTop = "none");
    }
  });
});

console.log(footer[0].scrollTop);
