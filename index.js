"use strict";

const shareBtn = document.querySelector(".btn-share");
const shareBtnExit = document.querySelector(".btn-share--exit");
const shareOverlay = document.querySelector(".btn-share--overlay");
const shareBtns = [shareBtn, shareBtnExit];

function btnsLogic() {
  if (shareOverlay.classList.contains("active") && window.innerWidth < 870) {
    shareBtn.classList.add("hidden");
  } else {
    shareBtn.classList.remove("hidden");
    shareBtn.classList.add("active");
  }
  if (window.innerWidth >= 870 && shareOverlay.classList.contains("active")) {
    shareBtn.classList.remove("hidden");
  } else {
    shareBtn.classList.remove("active");
  }
}

shareBtns.map((btn) =>
  btn.addEventListener("click", () => {
    shareOverlay.classList.toggle("active");
    btnsLogic();
  })
);

window.addEventListener("resize", function () {
  btnsLogic();
});
