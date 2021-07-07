function clock() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  m = second(m);
  s = second(s);
  var ampm = " PM ";
  if (h < 12) {
    ampm = " AM ";
  }
  if (h > 12) {
    h -= 12;
  }
  if (h < 10) {
    h = " " + h;
  }

  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s + " " + ampm;
  var t = setTimeout(clock, 1000);
}
function second(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
// code for stop watch//

const timer = document.getElementById("stopwatch");

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

// start button code
function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
// stop button code
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec); // converting string to integer
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }
}

// reset time button code
function resetTimer() {
  timer.innerHTML = "00:00:00";
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}
