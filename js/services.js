var itemsList = document.querySelectorAll(".services__item");
var deliveryItem = document.querySelector(".services__item--delivery");
var guaranteeItem = document.querySelector(".services__item--guarantee");
var creditItem = document.querySelector(".services__item--credit");
var deliverySlide = document.querySelector(".services__description-item--delivery");
var guaranteeSlide = document.querySelector(".services__description-item--guarantee");
var creditSlide = document.querySelector(".services__description-item--credit");

deliveryItem.addEventListener("click", function () {
  toggleItem(deliveryItem, guaranteeItem, creditItem);
  toggleSlide(deliverySlide, guaranteeSlide, creditSlide);
});

deliveryItem.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    toggleItem(deliveryItem, guaranteeItem, creditItem);
    toggleSlide(deliverySlide, guaranteeSlide, creditSlide);
  }
});

guaranteeItem.addEventListener("click", function () {
  toggleItem(guaranteeItem, deliveryItem, creditItem);
  toggleSlide(guaranteeSlide, deliverySlide, creditSlide);
})

guaranteeItem.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    toggleItem(guaranteeItem, deliveryItem, creditItem);
    toggleSlide(guaranteeSlide, deliverySlide, creditSlide);
  }
})

creditItem.addEventListener("click", function () {
  toggleItem(creditItem, deliveryItem, guaranteeItem);
  toggleSlide(creditSlide, deliverySlide, guaranteeSlide);
})

creditItem.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    toggleItem(creditItem, deliveryItem, guaranteeItem);
    toggleSlide(creditSlide, deliverySlide, guaranteeSlide);
  }
})

var toggleItem = function (activeItem, disabledItem1, disabledItem2) {
  if (!activeItem.classList.contains("services__item--current")) {
    activeItem.classList.add("services__item--current");
    disabledItem1.classList.remove("services__item--current");
    disabledItem2.classList.remove("services__item--current");
  }
};

var toggleSlide = function (activeSlide, disabledSlide1, disabledSlide2) {
  if (!activeSlide.classList.contains("services__description-item--current")) {
    activeSlide.classList.add("services__description-item--current");
    disabledSlide1.classList.remove("services__description-item--current");
    disabledSlide2.classList.remove("services__description-item--current");
  };
};
