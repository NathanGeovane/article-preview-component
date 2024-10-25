"use strict";

const shareBtn = document.querySelector(".btn-share");
const shareBtnExit = document.querySelector(".btn-share--exit");
const shareOverlay = document.querySelector(".btn-share--overlay");
const shareBtns = [shareBtn, shareBtnExit];

shareBtns.map((btn) =>
  btn.addEventListener("click", () => {
    shareOverlay.classList.toggle("active");
    shareBtn.classList.toggle("active");
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
