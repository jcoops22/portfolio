const pic = document.getElementById("pic");
const box1 = document.getElementsByClassName("box1");
const box2 = document.getElementsByClassName("box2");
const box3 = document.getElementsByClassName("box3");
const box4 = document.getElementsByClassName("box4");
const box5 = document.getElementsByClassName("box5");
const box6 = document.getElementsByClassName("box6");
const box7 = document.getElementsByClassName("box7");
const box8 = document.getElementsByClassName("box8");
const body = document.getElementsByTagName("body")[0];
const html = document.getElementsByTagName("html")[0];
const nav = document.getElementsByTagName("nav");
const navh4 = document.getElementById("navh4");
const navh4Link = document.querySelector("#navh4 a");
const links = document.querySelectorAll("a");
const navLinks = document.querySelectorAll("nav div li a");
const navLi = document.querySelectorAll("nav div li");
const navDiv = document.querySelectorAll("nav div");
const footer = document.getElementsByTagName("footer");
const focusBar = document.querySelectorAll("focusBar");
const burger = document.querySelector("#burger");
const paraDiv = document.getElementById("paraDiv");
const expandLeft = document.getElementsByClassName("expandLeft")[0];
const expandRight = document.getElementsByClassName("expandRight")[0];
var scrolled = false;

function loadPic() {
  setTimeout(() => {
    pic.style.opacity = 1;
    body.style.overflow = "auto";
    html.style.overflow = "auto";
    setTimeout(() => {
      nav[0].style.opacity = 1;
      nav[0].style.height = "80px";
      paraDiv.style.opacity = 1;
    }, 1000);
    setTimeout(() => {
      expandLeft.style.opacity = 1;
      expandLeft.style.left = 0;
      expandLeft.style.width = "50%";
      expandRight.style.opacity = 1;
      expandRight.style.left = "50%";
      expandRight.style.width = "50%";
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
  if (window.innerWidth > 839) {
    window.pageYOffset > 0 ? (scrolled = true) : (scrolled = false);
    window.pageYOffset > 0
      ? nav[0].classList.add("scrollNav")
      : nav[0].classList.remove("scrollNav");
    window.pageYOffset > 0
      ? (nav[0].style.height = "40px")
      : (nav[0].style.height = "80px");
    window.pageYOffset > 0
      ? (navh4.style.transform = "translateX(-15%)")
      : (navh4.style.transform = "translateX(5%)");

    links.forEach(link => {
      if (window.pageYOffset > 0 && link.classList.contains("active")) {
        link.style.borderLeft = "3px solid crimson";
      }
    });
    window.pageYOffset > 0
      ? (pic.style.border = "35px solid moccasin")
      : (pic.style.border = "15px solid crimson");
    window.pageYOffset > 0
      ? expandLeft.classList.add("scrolledbgLeft")
      : expandLeft.classList.remove("scrolledbgLeft");
    window.pageYOffset > 0
      ? expandRight.classList.add("scrolledbgRight")
      : expandRight.classList.remove("scrolledbgRight");
    window.pageYOffset > 0
      ? (navh4Link.style.color = "crimson")
      : (navh4Link.style.color = "moccasin");
    navLinks.forEach(link => {
      window.pageYOffset > 0
        ? (link.style.color = "crimson")
        : (link.style.color = "moccasin");
    });
  }
});

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    if (window.pageYOffset > 0) {
      link.classList.contains("active")
        ? null
        : (link.style.borderLeft = "3px solid crimson");
    } else {
      link.classList.contains("active") ? null : (link.style.color = "#fff");
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
        : (link.style.color = "moccasin");
    }
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 839) {
    navDiv[0].classList.contains("flex")
      ? navDiv[0].classList.remove("flex")
      : null;
    navLi.forEach(link => {
      link.classList.remove("hide");
    });
  } else {
    scrolled ? nav[0].classList.remove("scrollNav") : null;
    scrolled ? (nav[0].style.height = "80px") : null;
    scrolled ? (pic.style.border = "15px solid crimson") : null;
    scrolled ? expandLeft.classList.remove("scrolledbgLeft") : null;
    scrolled ? expandRight.classList.remove("scrolledbgRight") : null;
    scrolled ? (navh4Link.style.color = "moccasin") : null;
    navLinks.forEach(link => {
      scrolled ? (link.style.color = "moccasin") : null;
    });

    navDiv[0].classList.contains("flex")
      ? navDiv[0].classList.remove("flex")
      : null;
    navLi.forEach(link => {
      link.classList.remove("show");
      link.classList.add("hide");
    });
  }
});
burger.addEventListener("click", () => {
  burger.src = "./resources/back.svg"
    ? (burger.src = "./resources/burger.svg")
    : (burger.src = "./resources/back.svg");
  navDiv[0].classList.toggle("flex");

  console.log(window.innerWidth);
  navLi.forEach(li => {
    li.classList.remove("hide");
    li.classList.toggle("show");
  });
});
