const frame = document.querySelector("#frame");
const frameH1 = document.querySelector("#frame h1");
const scrollLabel = document.querySelector("#scrollLabel");
const engaged = document.querySelector("#engaged");
var appStarted = false;
const container = document.querySelector(".container");
var viewDemoLink = document.querySelector(".viewDemoLink");
var viewCodeLink = document.querySelector(".viewCodeLink");
var description = document.querySelector(".description");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const vid = document.querySelector("#vid");
var currentProject = 0;

var projects = [
  {
    vid: "./resources/Project Thumbnails/hbssc.mov",
    desc:
      "Static, local business website. Built with GSAP TweenLite and ScrollMagic Libraries.",
    viewCode: "https://github.com/jcoops22",
    viewDemo: "https://github.com/jcoops22",
  },
  {
    vid: "./resources/Project Thumbnails/notebooksc.mov",
    desc:
      "Notebook App. Single page app build with VueJS. Just a project I made to familiarize myself with VueJS.",
    viewCode: "https://github.com/jcoops22/notebookApp",
    viewDemo: "https://github.com/jcoops22/notebookApp",
  },
  {
    vid: "./resources/Project Thumbnails/pwdsc.mov",
    desc:
      "Password manager. Single page app built to familiarize myself with building and using my own REST API. Uses MongoDB database and NodeJS backend. The rest is just HTMl CSS and Vanilla JS",
    viewCode: "https://github.com/jcoops22/pwdManager",
    viewDemo: "https://github.com/jcoops22/pwdManager",
  },
  {
    vid: "./resources/Project Thumbnails/drumfinder.mov",
    desc:
      "Drumfinder App (work in progress). Single page app. User answers a few quesitons about what they find desireable in a drumset(tones, design, style).Built with VueJS and some ScrollMagic animations.",
    viewCode: "https://github.com/jcoops22/drumFinder",
    viewDemo: "https://github.com/jcoops22/drumFinder",
  },
];

frame.addEventListener("scroll", () => {
  frameH1.style.opacity = `${1 - frame.scrollTop / 177}`;
  frame.style.backgroundColor = `rgb(${
    220 - Math.floor(frame.scrollTop * 0.255 * 5.65)
  },
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
});

function reset() {
  // console.log("things should have reset");
  if (appStarted) {
    frame.scrollTop = 0;
    engaged.style.opacity = 0;
    frame.style.borderColor = "moccasin";
  }
}
window.addEventListener("load", () => {
  renderProject();
});
function renderProject() {
  description.textContent = projects[currentProject].desc;
  viewDemoLink.href = projects[currentProject].viewDemo;
  viewCodeLink.href = projects[currentProject].viewCode;
  vid.src = projects[currentProject].vid;
}
next.addEventListener("click", () => {
  currentProject++;
  if (currentProject > projects.length - 1) {
    currentProject = 0;
    renderProject();
  } else {
    renderProject();
  }
});
prev.addEventListener("click", () => {
  currentProject--;
  if (currentProject < 0) {
    currentProject = projects.length - 1;
    renderProject();
  } else {
    renderProject();
  }
});
