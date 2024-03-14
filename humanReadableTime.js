function humanReadable(sec) {
  let minutes = 0;
  while (sec >= 60) {
    minutes++;
    sec = sec - 60;
  }
  let hours = 0;
  while (minutes > 59) {
    hours++;
    minutes = minutes - 60;
  }
  let seconds = sec;
  let result = `${hours}:${minutes}:${seconds}`;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

najszybciej: function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;

  var pad = function (val) {
    return val < 10 ? "0" + val : val;
  };

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}
