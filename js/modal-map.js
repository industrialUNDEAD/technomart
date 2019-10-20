var modalMapBlock = document.querySelector(".modal--map-location");
var modalMap = document.querySelector(".modal--location-content");
var mapLink = document.querySelector(".contacts__map-location");
var buttonCloseMap = modalMap.querySelector(".modal__button-close");
var interactiveCart = document.querySelector(".modal--map-location__map-yandex");
var YandexMapsLink = document.querySelector(".modal--map-service");
var mapSection = document.querySelector(".modal--map-location");

var openModalMap = function () {
  modalMapBlock.classList.add("overlay-active");
  modalMap.classList.add("modal--location-open");
  // buttonCloseMap.focus();
  interactiveCart.focus();
  document.body.style.overflow = 'hidden';
};

var closeModalMap = function () {
  modalMapBlock.classList.remove("overlay-active");
  modalMap.classList.remove("modal--location-open");
  document.body.style.overflow = 'auto';
};

mapLink.addEventListener("click", function () {
  openModalMap();
});

mapLink.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    openModalMap();
  }
});

buttonCloseMap.addEventListener("click", function () {
  closeModalMap();
})

buttonCloseMap.addEventListener("keydown", function (KeyboardEvent) {
  debugger;
  if (KeyboardEvent.keyCode === 13) {
    closeModalMap();
  }
  if (KeyboardEvent.keyCode === 9) {
    interactiveCart.focus();
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModalMap();
  }
});

mapSection.addEventListener("keydown", function (KeyboardEvent) {
  if (KeyboardEvent.shiftKey) {
    if (KeyboardEvent.keyCode === 9) {
      buttonCloseMap.focus();
    };
  };
})
