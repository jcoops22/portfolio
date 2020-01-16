console.log("about.html");

const para = document.querySelector("#introHeader");
const span1 = document.querySelectorAll("span")[0];
const span2 = document.querySelectorAll("span")[1];
const span3 = document.querySelectorAll("span")[2];
const underline = document.querySelector("#underline");

// console.log(span);

window.addEventListener("scroll", () => {
  let rate = window.pageYOffset;

  rate >= 99
    ? (underline.style.width = `${rate * 0.5}%`)
    : (underline.style.width = `${rate * 0.5}%`);

  if (window.pageYOffset >= 0) {
    span1.style.right = `${rate * 0.5}px`;
    span1.style.top = `${rate * 0.5}px`;
    span2.style.left = `${rate * 0.5}px`;
    span2.style.top = `${rate * 0.5}px`;
    span3.style.right = `${rate * 0.8}px`;
    span3.style.top = `${rate}px`;
  }

  console.log(window.pageYOffset);
});
