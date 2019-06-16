var drillsSlide = document.querySelector(".product-slider__drills-slide");
var perforatorsSlide = document.querySelector(".product-slider__perforators-slide")
var buttonsToogle = document.querySelectorAll(".product-slider__button");
var subToggles = document.querySelectorAll(".product-slider__toggle-slide");

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

var toogleButton = function (button) {
  button.addEventListener("click", function () {
    perforatorsSlide.classList.toggle("active");
    drillsSlide.classList.toggle("active");
    editRender(perforatorsSlide);
    editRender(drillsSlide);
  });
};

for(var i =0; i < subToggles.length; i++) {
  toogleButton(subToggles[i]);
};
