var drillsSlide = document.querySelector(".product-slider__drills-slide");
var perforatorsSlide = document.querySelector(".product-slider__perforators-slide")
var buttonsToogle = document.querySelectorAll(".product-slider__button");
var perforatorToggle = document.querySelector(".product-slider__toggle-slide--perforator-toggle");
var drillToggle = document.querySelector(".product-slider__toggle-slide--drill-toggle");
var perforatorRadio = document.querySelector("#perforator-slide");
var drillRadio = document.querySelector("#drill-slide");



var toogleSlider = function (toggleEl) {
  toggleEl.addEventListener("click", function () {
    perforatorsSlide.classList.toggle("active");
    drillsSlide.classList.toggle("active");
    editRender(perforatorsSlide);
    editRender(drillsSlide);
  })
};

for(var i = 0; i < buttonsToogle.length; i++) {
  toogleSlider(buttonsToogle[i]);
};

var editRender = function (node) {
  if (node.classList.contains("active")) {
    node.style.display = "block";
  } else {
    node.style.display = "none";
  }
};

var toggleButton = function (slideRemove, slideAdd) {
  slideRemove.style.display = "none";
  slideAdd.style.display = "block";
};

perforatorToggle.addEventListener("click", function () {
  toggleButton(drillsSlide, perforatorsSlide);
});

perforatorToggle.addEventListener("focus", function () { /* для переключения вспомогательных кнопок клавиатурой */
  toggleButton(drillsSlide, perforatorsSlide);
  drillRadio.removeAttribute("checked");
  perforatorRadio.setAttribute("checked", "checked");
});

drillToggle.addEventListener("click", function () {
  toggleButton(perforatorsSlide, drillsSlide);
});

drillToggle.addEventListener("focus", function () { /* для переключения вспомогательных кнопок клавиатурой */
  toggleButton(perforatorsSlide, drillsSlide);
  perforatorRadio.removeAttribute("checked");
  drillRadio.setAttribute("checked", "checked");
});
