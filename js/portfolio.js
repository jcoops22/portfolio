console.log("portfolio");
const frame = document.querySelector("#frame");
const frameH1 = document.querySelector("#frame h1");
const scrollLabel = document.querySelector("#scrollLabel");
const engaged = document.querySelector("#engaged");
var appStarted = false;
const container = document.querySelector(".container");

frame.addEventListener("scroll", () => {
  console.log(frame.scrollTop);

  frameH1.style.opacity = `${1 - frame.scrollTop / 177}`;
  frame.style.backgroundColor = `rgb(${220 -
    Math.floor(frame.scrollTop * 0.255 * 5.65)},
  ${20 - Math.floor(frame.scrollTop * 0.255 * 5.65)},
  ${60 - Math.floor(frame.scrollTop * 0.255 * 5.65)})`;
  frame.scrollTop > 0
    ? (scrollLabel.style.opacity = 0)
    : (scrollLabel.style.opacity = 1);

  if (frame.scrollTop >= 176) {
    setTimeout(() => {
      engaged.style.opacity = 1;
      frame.style.borderColor = "#39ff14";
      appStarted = true;
    }, 300);
    setTimeout(() => {
      container.style.display = "block";
      window.scrollTo(0, 1000);
      reset();
    }, 1000);
  }

  // frame.scrollTo(0, 0);
});

function reset() {
  console.log("things should have reset");
  if (appStarted) {
    frame.scrollTop = 0;
    engaged.style.opacity = 0;
    frame.style.borderColor = "moccasin";
  }
}
