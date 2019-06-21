var modalMapBlock = document.querySelector(".modal--map-location");
var modalMap = document.querySelector(".modal--location-content");
var mapLink = document.querySelector(".contacts__map-location");
var buttonClose = document.querySelectorAll(".modal__button-close");

var openModal = function () {
  modalMapBlock.classList.add("overlay-active");
  modalMap.classList.add("modal--location-open");
  buttonClose[1].focus();
};

var closeModal = function () {
  modalMapBlock.classList.remove("overlay-active");
  modalMap.classList.remove("modal--location-open");
};

mapLink.addEventListener("click", function () {
  openModal();
});

mapLink.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    openModal();
  }
});

buttonClose[1].addEventListener("click", function () {
  closeModal();
})

buttonClose[1].addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    closeModal();
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModal();
  }
});
