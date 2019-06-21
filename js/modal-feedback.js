var modalFeedBack = document.querySelector(".modal--feedback");
var buttonCloseModal = document.querySelector(".modal__button-close");
var buttonOpenModal = document.querySelector(".contacts__modal-open");
var feedbackForm = document.querySelector(".modal--feedback__feedback-form");
var userNameField = document.querySelector(".modal--feedback__input--name-field");
var userMailField = document.querySelector(".modal--feedback__input--mail-field");
var userMessageField = document.querySelector(".modal--feedback__input--message-area");
var allFormInputs = document.querySelectorAll(".modal--feedback__input");
var isStorageSupport = true;
var storageName = "";
var storageMail = "";

  try {
    storageName = localStorage.getItem("name");
    storageMail = localStorage.getItem("mail");
  } catch (err) {
    isStorageSupport = false;
  }

buttonOpenModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  openModal();
});

buttonOpenModal.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    openModal();;
  }
})

var openModal = function () {
  modalFeedBack.classList.add("overlay-active");
  if (storageName) {
    userNameField.value = storageName;
    if (!userNameField.value) {
      userMailField.focus();
    }
    if (storageMail) {
    userMailField.value = storageMail;
  }
    userMessageField.focus();
  } else {
    userNameField.focus();
  }
};

buttonCloseModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedBack.classList.remove("overlay-active");
  allFormInputs.classList.remove("modal-error");
})

feedbackForm.addEventListener("submit", function (evt) {
  if (!userNameField.value || !userMailField.value || !userMessageField.value) {
    evt.preventDefault();
    validationFieldsRemove(allFormInputs);
    validationFieldsValue(allFormInputs);
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userNameField.value);
      localStorage.setItem("mail", userMailField.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalFeedBack.classList.contains("overlay-active")) {
      modalFeedBack.classList.remove("overlay-active");
      validationFieldsRemove(allFormInputs);
    }
  }
});

var validationFieldsValue = function (fields) {
  for(var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].classList.add("modal-error");
    };
  };
  return fields;
};

var validationFieldsRemove = function (fields) {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].classList.contains("modal-error")) {
      fields[i].classList.remove("modal-error");
    }
  }
  return fields;
};
