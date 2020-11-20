var dialog = document.querySelector('dialog');
var headSec = document.querySelector('#header');
var updateSec = document.querySelector('#update');
var showDialogButton = document.querySelector('#head-btn');
var dialogUpdate = document.querySelector('dialog');
var showDialogButtonUpdate = document.querySelector('#update-btn');

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


if (!dialogUpdate.showModal) {
  dialogPolyfill.registerDialog(dialogUpdate);
}
showDialogButtonUpdate.addEventListener('click', function () {
  updateSec.classList.add('modal-open');
  dialogUpdate.showModal();
});
dialogUpdate.querySelector('.close').addEventListener('click', function () {
  updateSec.classList.remove('modal-open');
  dialogUpdate.close();
});
