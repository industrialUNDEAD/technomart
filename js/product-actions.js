var cartButtons = document.querySelectorAll(".store-product__product-action--add-product");
var cartBlock = document.querySelector(".main-header__cart-block");
var productsCounter = document.querySelector(".main-header__counter--cart-counter");
var bookmarkButtons = document.querySelectorAll(".store-product__product-action--add-bookmark");
var bookmarksCounter = document.querySelector(".main-header__counter--bookmarks-counter");
var bookmarksBlock = document.querySelector(".main-header__bookmarks-block");
var searchInput = document.querySelector(".main-header__search-field");
var modalCartContent = document.querySelector(".modal--cart-add-content");
var modalCartContainer = document.querySelector(".modal--cart-add");
var buttonClose = document.querySelectorAll(".modal__button-close");
var buttonContinue = document.querySelector(".modal--cart-add__continue-select");

var addCountAction = function(button, classContain, classAdd, blockCounter) {
  button.addEventListener("click", function () {
    if (!classContain.classList.contains(classAdd)) {
      classContain.classList.add(classAdd);
    }
    if (button.classList.contains("store-product__product-action--add-product")) {
      modalCartContent.classList.add("modal--cart-show");
      modalCartContainer.classList.add("overlay-active");
      buttonContinue.focus();
    }
    updateCounter(blockCounter);
  });
}

var updateCounter = function(counter) {
  var contNumber = counter.innerHTML;
  contNumber = +contNumber + 1;
  counter = counter.innerHTML = contNumber;
};


for(var i = 0; i < cartButtons.length; i++) {
  addCountAction(cartButtons[i], cartBlock, "main-header__cart-block--product-add", productsCounter);
}

for(var i = 0; i < bookmarkButtons.length; i++) {
  addCountAction(bookmarkButtons[i], bookmarksBlock, "main-header__bookmarks-block--bookmark-add", bookmarksCounter);
}

searchInput.addEventListener("focusout", function () { /* для удобства пользованием полем поиска */
  if (searchInput.value) {
    searchInput.classList.add("main-header__search-field--text-add");
  } if (!searchInput.value) {
    searchInput.classList.remove("main-header__search-field--text-add");;
  }
});

var modalClose = function () {
  modalCartContent.classList.remove("modal--cart-show");
  modalCartContainer.classList.remove("overlay-active");
};

buttonClose[2].addEventListener("click", function () {
  modalClose();
});

buttonClose[2].addEventListener("keydonw", function (evt) {
  if (evt.keyCode === 13) {
    modalClose();;
  };
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalClose();
  }
});

buttonContinue.addEventListener("click", function () {
  modalClose();
});

buttonContinue.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    modalClose();;
  };
})
