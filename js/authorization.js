var userLogIn = document.querySelector(".main-header__user-navigation-link--enter");
var userLogOut = document.querySelector(".main-header__profile-exit");
var unregisteredPanel = document.querySelector(".main-header__unregistered-user");
var loggedPanel = document.querySelector(".main-header__logged-user");

userLogIn.addEventListener("click", function () {
  unregisteredPanel.classList.add("main-header__unregistered-user--off");
  loggedPanel.classList.add("main-header__logged-user--on");
});

userLogOut.addEventListener("click", function () {
  loggedPanel.classList.remove("main-header__logged-user--on");
  unregisteredPanel.classList.remove("main-header__unregistered-user--off");
});
