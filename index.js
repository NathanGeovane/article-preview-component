"use strict";

const shareBtn = document.querySelector(".btn-share");
const shareBtnExit = document.querySelector(".btn-share--exit");
const shareOverlay = document.querySelector(".btn-share--overlay");
const shareBtns = [shareBtn, shareBtnExit];

shareBtns.map((btn) =>
  btn.addEventListener("click", () => {
    shareOverlay.classList.toggle("active");
    if (shareOverlay.classList.contains("active") && window.innerWidth < 870) {
      shareBtn.classList.add("hidden");
    } else {
      shareBtn.classList.remove("hidden");
    }
    if (window.innerWidth > 870 && shareOverlay.classList.contains("active")) {
      shareBtn.classList.add("active");
      shareBtn.classList.remove("hidden");
    } else {
      shareBtn.classList.remove("active");
    }
  })
);
