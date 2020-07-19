var time = 0;
var started;
var run = 0;
function startWatch() {
  if (run == 0) {
    run = 1;
    $('#start').removeClass('btn-outline-success')
    $('#start').addClass('btn-outline-danger')
    document.getElementById('start').innerHTML = 'Stop'
    timeIncrement();

  } else {
    run = 0;
    $('#start').addClass('btn-outline-success')
    $('#start').removeClass('btn-outline-danger')
    document.getElementById('start').innerHTML = 'Start'

  }
}
function watchReset() {
  run = 0;
  time = 0;
  document.getElementById("timer").innerHTML = "00:00:00";


}
function timeIncrement() {
  if (run == 1) {


    setTimeout(function () {

      time++;
      console.log(time)
      document.getElementById("timer").innerHTML = [
        Math.floor(time/100/60 % 60),
        Math.floor(time/100 % 60),
        time % 100
      ].map(formatNumber).join(':')
      timeIncrement();
    },10);
  }
}
function formatNumber(n){
  return (n < 10 ? "0" : "") + n;
}
