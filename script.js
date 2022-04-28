"strict mode";

// HIDING SHOWING FOR WEEKDAYS WEEKEND AND IF THE CURRENT HOUR IS PAST 12

// getDay() method returns the day of the week (0 to 6)
// Way of showing / hiding code based on the day in the week
const d = new Date();
let dayOfWeek = d.getDay();
console.log(`The day of the week is ${dayOfWeek}`);

var currentHour = new Date().getHours();
console.log(`Hour is ${currentHour}`);

// If day is saturday or sunday
if (dayOfWeek === 6 || dayOfWeek === 0 || currentHour >= 12) {
  //display none
  document.getElementById("same").style.display = "none";
  console.log(`Hide countdown`);
} else {
  //display block
  document.getElementById("same").style.display = "block";
  // document.querySelector(".woocommerce-breadcrumb").style.margin = "4em 0 1em";
  console.log(`Show countdown`);
}

// https://vincoding.com/weekly-repeating-countdown-timer-javascript/

var curday;
var secTime;
var ticker;

function getSeconds() {
  var nowDate = new Date();
  var dy = 1; //Sunday through Saturday, 0 to 6
  var countertime = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate(),
    12,
    0,
    0
  );

  var curtime = nowDate.getTime(); //current time
  var atime = countertime.getTime(); //countdown time
  var diff = parseInt((atime - curtime) / 1000);
  if (diff > 0) {
    curday = dy - nowDate.getDay();
  } else {
    curday = dy - nowDate.getDay() - 1;
  } //after countdown time
  if (curday < 0) {
    curday += 1;
  } //already after countdown time, switch to next week
  if (diff <= 0) {
    diff += 86400 * 7;
  }
  startTimer(diff);
}

function startTimer(secs) {
  secTime = parseInt(secs);
  ticker = setInterval("tick()", 1000);
  tick(); //initial count display
}

function tick() {
  var secs = secTime;
  if (secs > 0) {
    secTime--;
  } else {
    clearInterval(ticker);
    getSeconds(); //start over
  }

  var days = Math.floor(secs / 86400);
  secs %= 86400;
  var hours = Math.floor(secs / 3600);
  secs %= 3600;
  var mins = Math.floor(secs / 60);
  secs %= 60;

  //update the time display
  // document.getElementById("days").innerHTML = curday;
  document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
  document.getElementById("minutes").innerHTML = (mins < 10 ? "0" : "") + mins;
  document.getElementById("seconds").innerHTML = (secs < 10 ? "0" : "") + secs;
}

$(document).ready(function () {
  getSeconds();
});

// If scroll position is greater than 15px, hide dispatch timer, otherwise show it e.g at the top
$(window).scroll(function () {
  if ($(this).scrollTop() > 15) {
    // your code
    $("#same").css("top", "-75px");
  } else {
    // your code
    $("#same").css("top", "140px");
  }
});
