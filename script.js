let [seconds, minutes, hours] = [0, 0, 0];
let displyTime = document.getElementById("displyTime");
let startWatch = document.getElementById("startBtn");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displyTime.innerHTML = h + ":" + m + ":" + s;
}
startWatch.addEventListener("click", function () {
  timer = setInterval(stopwatch, 1000);
});
function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displyTime.innerHTML = "00:00:00";
}
