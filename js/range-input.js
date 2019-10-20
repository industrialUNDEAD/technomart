var rangeLine = document.querySelector(".setup-product__range-settings-line");
var valueLine = document.querySelector(".setup-product__line-depth");
var minToggle = document.querySelector(".setup-product__range-handle--min-value");
var maxToggle = document.querySelector(".setup-product__range-handle--max-value");

minToggle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX
    };

    startCoords = {
      x: moveEvt.clientX
    };

    minToggle.style.left = (minToggle.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
