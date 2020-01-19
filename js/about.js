console.log("about.html");

const nav = document.getElementsByTagName("nav");
const navh4Link = document.querySelector("#navh4 a");
const navLinks = document.querySelectorAll("nav div li a");
const navLi = document.querySelectorAll("nav div li");
const navDiv = document.querySelectorAll("nav div");
const burger = document.querySelector("#burger");
const active = document.querySelector(".active");
var burgerFlag = true;
var scrolled = false;
const para = document.querySelector("#introHeader");
const span1 = document.querySelectorAll("span")[0];
const span2 = document.querySelectorAll("span")[1];
const span3 = document.querySelectorAll("span")[2];
const xboxImgs = document.querySelectorAll("#xboxList img");
const switchImgs = document.querySelectorAll("#switchList img");
const caroselPics = document.querySelectorAll("#carosel img");
const previewDiv = document.querySelector("#preview");
const preview = document.querySelector("#preview img");
var visisble = false;

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 832) {
    let rate = window.pageYOffset - 80;
    window.pageYOffset > 0 ? (scrolled = true) : null;

    if (window.pageYOffset >= 50 && window.pageYOffset <= 234) {
      span1.style.left = `${rate * 0.07}%`;
      span1.style.top = `${rate * 0.4}px`;
      span2.style.right = `${rate * 0.5}px`;
      span2.style.top = `${rate * 1.2}px`;

      span3.style.right = `${rate * 0.8}px`;
      span3.style.top = `${rate * 1.8}px`;
      nav[0].style.opacity = 0;
    } else if (window.pageYOffset >= 235 && window.pageYOffset < 820) {
      nav[0].style.backgroundColor = "moccasin";
      span1.style.left = "5%";
      span1.style.top = "296.8px";
      span2.style.left = "0%";
      span2.style.top = "417.8px";
      span3.style.right = "4%";
      span3.style.top = "490.4px";
    } else if (window.pageYOffset >= 820) {
      scrolled ? (active.style.borderBottom = "3px solid crimson") : null;
      nav[0].style.position = "fixed";
      nav[0].style.opacity = 1;
      nav[0].classList.add("scrollNav");
      navh4Link.style.color = "crimson";
      navh4.style.transform = "translateX(-15%)";
      navLinks.forEach(link => {
        window.pageYOffset > 0
          ? (link.style.color = "crimson")
          : (link.style.color = "moccasin");
      });
    } else {
      active.style.borderBottom = "3px solid moccasin";
      nav[0].style.backgroundColor = "crimson";
      span1.style.left = 0;
      span2.style.left = 0;
      span2.style.top = 0;
      span3.style.right = 0;
      span3.style.top = 0;
      nav[0].style.opacity = 1;
      nav[0].classList.remove("scrollNav");
      navh4Link.style.color = "moccasin";
      navh4.style.transform = "translateX(5%)";
      navLinks.forEach(link => {
        scrolled ? (link.style.color = "moccasin") : null;
      });
    }
  }
});

burger.addEventListener("click", () => {
  if (burgerFlag) {
    burger.src = "./resources/lettuce.svg";
    burgerFlag = false;
  } else {
    burger.src = "./resources/burger.svg";
    burgerFlag = true;
  }
  navDiv[0].classList.toggle("flex");

  navLi.forEach(li => {
    li.classList.remove("hide");
    li.classList.toggle("show");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 832) {
    if (scrolled) {
      console.log("we scrolled");
      nav[0].style.background = "moccasin";
    }
    navDiv[0].classList.contains("flex")
      ? navDiv[0].classList.remove("flex")
      : null;
    navLi.forEach(link => {
      link.classList.remove("hide");
    });

    xboxImgs.forEach((img, ind) => {
      if (ind !== 0) {
        img.style.display = "initial";
      }
    });
    switchImgs.forEach((img, ind) => {
      if (ind !== 0) {
        img.style.display = "initial";
      }
    });
  } else {
    scrolled ? (nav[0].style.position = "initial") : null;
    scrolled ? nav[0].classList.remove("scrollNav") : null;
    scrolled ? (nav[0].style.height = "80px") : null;
    scrolled ? (navh4Link.style.color = "moccasin") : null;
    scrolled ? (nav[0].style.backgroundColor = "crimson") : null;
    navLinks.forEach(link => {
      scrolled ? (link.style.color = "moccasin") : null;
    });
    navLi.forEach(link => {
      link.classList.add("hide");
    });
    navDiv[0].classList.contains("flex")
      ? navDiv[0].classList.remove("flex")
      : null;
    navLi.forEach(link => {
      link.classList.remove("show");
      link.classList.add("hide");
    });
    burger.src = "./resources/burger.svg";
    burgerFlag = true;

    xboxImgs.forEach((img, ind) => {
      if (ind !== 0) {
        img.style.display = "none";
      }
    });
    switchImgs.forEach((img, ind) => {
      if (ind !== 0) {
        img.style.display = "none";
      }
    });
  }
});

window.onload = function pictureCheck() {
  if (window.innerWidth < 832) {
    xboxImgs.forEach((img, ind) => {
      if (ind !== 0) {
        img.style.display = "none";
      }
    });
    switchImgs.forEach((img, ind) => {
      if (ind !== 0) {
        img.style.display = "none";
      }
    });
  }
};
console.log(preview);
caroselPics.forEach(pic => {
  pic.addEventListener("mouseover", e => {
    previewDiv.style.opacity = 0.6;
    preview.src = e.target.src;
  });
  pic.addEventListener("mouseout", () => {
    previewDiv.style.opacity = 0;
  });
});
