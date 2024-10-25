"use strict";

const shareBtn = document.querySelector(".btn-share");
const shareBtnExit = document.querySelector(".btn-share--exit");
const shareOverlay = document.querySelector(".btn-share--overlay");
const shareBtns = [shareBtn, shareBtnExit];

shareBtns.map((btn) =>
  btn.addEventListener("click", () => {
    shareOverlay.classList.toggle("active");
    console.log(window.innerWidth);
    if (shareOverlay.classList.contains("active") && window.innerWidth < 870) {
      shareBtn.classList.add("hidden");
    } else {
      shareBtn.classList.remove("hidden");
    }
    if (window.innerWidth > 870) {
      shareBtn.classList.toggle("active");
    }
  })
);

/* shareBtn.addEventListener("click", () => {
  shareOverlay.classList.toggle("hidden");
  shareBtn.classList.toggle("hidden");
});
shareBtnExit.addEventListener("click", () => {
  shareOverlay.classList.toggle("hidden");
  shareBtn.classList.toggle("hidden");
}); */
