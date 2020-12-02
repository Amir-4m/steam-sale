// Get the modal
var modal = document.getElementById("headModal");
var updateModal = document.getElementById("updateModal");
var giveawayModal = document.getElementById("giveawayModal");

// Get the button that opens the modal
var btn = document.getElementById("head-btn");
var updateBtn = document.getElementById("update-btn");
var giveawayBtn = document.getElementById("giveaway-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var updateSpan;

if (giveawayBtn !== null) {
  updateSpan = document.getElementsByClassName("close")[2];
  var giveawaySpan = document.getElementsByClassName("close")[1];

  giveawayBtn.onclick = function () {
    giveawayModal.style.display = "block";
  };
  giveawaySpan.onclick = function () {
    giveawayModal.style.display = "none";
  };

} else {
  updateSpan = document.getElementsByClassName("close")[1];

}

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
window.onclick = function (event) {
  if (event.target === giveawayModal) {
    giveawayModal.style.display = "none";
  }
};

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  console.log($(element).text());
  document.execCommand("copy");
  $temp.remove();
}

(function ($) {
  $(document).ready(function () {
    if (navigator.userAgent.indexOf("iPad") !== -1 || navigator.userAgent.indexOf('iPhone') !== -1) {
      $('#bgVideo').css('display', 'none');
      $('#headgif').css('display', 'inline-block');
    }
  });
  $(window).on('load', function () {
    $('.loader').fadeOut(600);
    $('.site-wrapper').css('display', 'block')
  });
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

  $("#giveaway-form").submit(function (event) {
    var $crf_token = $('[name="csrfmiddlewaretoken"]').attr('value');
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $(this),
      email = $form.find("input[name='email']").val(),
      url = $form.attr("action");

    // Send the data using post
    var posting = $.post(url, {email: email, is_subscriber: true, csrfmiddlewaretoken: $crf_token});

    // Put the results in a div
    posting.done(function (data) {
      $.cookie('s_uid', data.token, {expires: 10});
      $.post(url, {email: email, is_subscriber: true, csrfmiddlewaretoken: $crf_token});
      $("#givdiatitle").fadeOut(1000);
      $("#givdiacon").fadeOut(600);
      $("#givdiaac").fadeOut(200);
      $("#submsg3").delay(1200).fadeIn(600);
      $("#subcon3").delay(1500).fadeIn(600);


    });
  });
})(jQuery);
// helper functions
const PI2 = Math.PI * 2
const random = (min, max) => Math.random() * (max - min + 1) + min | 0
const timestamp = _ => new Date().getTime()

// container
class Birthday {
  constructor() {
    this.resize()

    // create a lovely place to store the firework
    this.fireworks = []
    this.counter = 0

  }

  resize() {
    this.width = canvas.width = window.innerWidth
    let center = this.width / 2 | 0
    this.spawnA = center - center / 4 | 0
    this.spawnB = center + center / 4 | 0

    this.height = canvas.height = window.innerHeight
    this.spawnC = this.height * .1
    this.spawnD = this.height * .5

  }

  onClick(evt) {
     let x = evt.clientX || evt.touches && evt.touches[0].pageX
     let y = evt.clientY || evt.touches && evt.touches[0].pageY

     let count = random(3,5)
     for(let i = 0; i < count; i++) this.fireworks.push(new Firework(
        random(this.spawnA, this.spawnB),
        this.height,
        x,
        y,
        random(250, 360),
        random(30, 110)))

     this.counter = -1

  }

  update(delta) {
    ctx.globalCompositeOperation = 'hard-light'
    ctx.fillStyle = `rgba(20,20,20,${ 7 * delta })`
    ctx.fillRect(0, 0, this.width, this.height)

    ctx.globalCompositeOperation = 'lighter'
    for (let firework of this.fireworks) firework.update(delta)

    // if enough time passed... create new new firework
    this.counter += 0.017 // each second
    if (this.counter >= 1) {
      this.fireworks.push(new Firework(
        random(this.spawnA, this.spawnB),
        this.height,
        random(0, this.width),
        random(1, this.spawnD),
        random(250, 360),
        random(1, 70)))
      this.counter = 0
    }

    // remove the dead fireworks
    if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

  }
}

class Firework {
  constructor(x, y, targetX, targetY, shade, offsprings) {
    this.dead = false
    this.offsprings = offsprings

    this.x = x
    this.y = y
    this.targetX = targetX
    this.targetY = targetY

    this.shade = shade
    this.history = []
  }
  update(delta) {
    if (this.dead) return

    let xDiff = this.targetX - this.x
    let yDiff = this.targetY - this.y
    if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
      this.x += xDiff * 2 * delta
      this.y += yDiff * 2 * delta

      this.history.push({
        x: this.x,
        y: this.y
      })

      if (this.history.length > 20) this.history.shift()

    } else {
      if (this.offsprings && !this.madeChilds) {

        let babies = this.offsprings / 2
        for (let i = 0; i < babies; i++) {
          let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
          let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

          birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

        }

      }
      this.madeChilds = true
      this.history.shift()
    }

    if (this.history.length === 0) this.dead = true
    else if (this.offsprings) {
        for (let i = 0; this.history.length > i; i++) {
          let point = this.history[i]
          ctx.beginPath()
          ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
          ctx.arc(point.x, point.y, 1, 0, PI2, false)
          ctx.fill()
        }
      } else {
      ctx.beginPath()
      ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
      ctx.arc(this.x, this.y, 1, 0, PI2, false)
      ctx.fill()
    }

  }
}

let canvas = document.getElementById('birthday')
let ctx = canvas.getContext('2d')

let then = timestamp()

let birthday = new Birthday
window.onresize = () => birthday.resize()
document.onclick = evt => birthday.onClick(evt)
document.ontouchstart = evt => birthday.onClick(evt)

  ;(function loop(){
  	requestAnimationFrame(loop)

  	let now = timestamp()
  	let delta = now - then

    then = now
    birthday.update(delta / 1000)


  })()