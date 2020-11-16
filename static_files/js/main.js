var dialog = document.querySelector('dialog');
var headSec = document.querySelector('#header');
var showDialogButton = document.querySelector('#head-btn');
if (!dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}
showDialogButton.addEventListener('click', function () {
  headSec.classList.add('modal-open');
  dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function () {
  headSec.classList.remove('modal-open');
  dialog.close();
});


(function ($) {
})(jQuery);
