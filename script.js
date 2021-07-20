const menu = document.querySelector(".menu");
const wrappers = document.querySelectorAll(".wrapper");
const targets = document.querySelectorAll(".target");

menu.addEventListener("click", () => {
  targets.forEach((item) => {
    item.classList.toggle("change");
  });
});

wrappers.forEach((item) => {
  item.addEventListener("click", () => {
    targets.forEach((item) => {
      item.classList.remove("change");
    });
  });
});

const videos = document.querySelectorAll(".video");

//refactor this piece of code
videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });

  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
