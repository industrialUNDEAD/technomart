var modalMapBlock=document.querySelector(".modal--map-location"),modalMap=document.querySelector(".modal--location-content"),mapLink=document.querySelector(".contacts__map-location"),buttonCloseMap=modalMap.querySelector(".modal__button-close"),interactiveCart=document.querySelector(".modal--map-location__map-yandex"),YandexMapsLink=document.querySelector(".modal--map-service"),mapSection=document.querySelector(".modal--map-location"),openModalMap=function(){modalMapBlock.classList.add("overlay-active"),modalMap.classList.add("modal--location-open"),interactiveCart.focus(),document.body.style.overflow="hidden"},closeModalMap=function(){modalMapBlock.classList.remove("overlay-active"),modalMap.classList.remove("modal--location-open"),document.body.style.overflow="auto"};mapLink.addEventListener("click",function(){openModalMap()}),mapLink.addEventListener("keydown",function(o){13===o.keyCode&&openModalMap()}),buttonCloseMap.addEventListener("click",function(){closeModalMap()}),buttonCloseMap.addEventListener("keydown",function(o){13===o.keyCode&&closeModalMap(),9===o.keyCode&&interactiveCart.focus()}),window.addEventListener("keydown",function(o){27===o.keyCode&&(o.preventDefault(),closeModalMap())}),mapSection.addEventListener("keydown",function(o){o.shiftKey&&9===o.keyCode&&buttonCloseMap.focus()});
