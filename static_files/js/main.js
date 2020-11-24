// Get the modal
var modal = document.getElementById("headModal");
var updateModal = document.getElementById("updateModal");

// Get the button that opens the modal
var btn = document.getElementById("head-btn");
var updateBtn = document.getElementById("update-btn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var updateSpan = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
updateBtn.onclick = function () {
  updateModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
updateSpan.onclick = function () {
  updateModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
window.onclick = function (event) {
  if (event.target === updateModal) {
    updateModal.style.display = "none";
  }
};

(function ($) {
  $("#subscribe-form_top").submit(function (event) {
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $(this),
      email = $form.find("input[name='email']").val(),
      url = $form.attr("action");

    // Send the data using post
    var posting = $.post(url, {email: email, is_subscriber: true});

    // Put the results in a div
    posting.done(function (data) {
      $.cookie('s_uid', data.token, {expires: 10});
      $("#diatitle1").fadeOut(1000);
      $("#diacon1").fadeOut(600);
      $("#diaac1").fadeOut(200);
      $("#modalcon1").delay(950).animate({minHeight: "15%"}, 1000);
      $("#submsg1").delay(1200).fadeIn(600);
      $("#subcon1").delay(1500).fadeIn(600);


    });
  });

  $("#subscribe-form_bottom").submit(function (event) {
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $(this),
      email = $form.find("input[name='email']").val(),
      url = $form.attr("action");

    // Send the data using post
    var posting = $.post(url, {email: email, is_subscriber: true});

    // Put the results in a div
    posting.done(function (data) {
      $.cookie('s_uid', data.token, {expires: 10});
      $("#diatitle2").fadeOut(1000);
      $("#diacon2").fadeOut(600);
      $("#diaac2").fadeOut(200);
      $("#modalcon2").delay(950).animate({minHeight: "15%"}, 1000);
      $("#submsg2").delay(1200).fadeIn(600);
      $("#subcon2").delay(1500).fadeIn(600);


    });
  });
})(jQuery);
