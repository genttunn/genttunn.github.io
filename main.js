function start() {
  document.getElementById("keywords").focus();
  let l = getParameterByName("l");
  $(".main li").css("color", l);

  //   window.setInterval(function() {
  //     updatetime();
  //   }, 200);
  getTitle();
}

function handleKeyPress(e) {
  var key = e.keyCode || e.which;
  if (key == 13) {
    var text = document.getElementById("keywords").value;

    e = getParameterByName("s");
    if (e == "!g") {
      window.location = "https://www.google.com/search?q=" + text;
    } else {
      window.location = "https://duckduckgo.com/?q=" + text;
    }
  }
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    document.getElementById("keywords").focus();
  }
};

function getTitle() {
  //   var d = new Date();
  //   var mins = String(d.getMinutes());
  //   var hours = String(d.getHours());
  //   if (hours.length == 1) {
  //     hours = "0" + hours;
  //   }
  //   if (mins.length == 1) {
  //     mins = "0" + mins;
  //   }
  //   var time = hours + " " + mins;
  document.getElementById("hello").innerHTML = "Hey there.";
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
