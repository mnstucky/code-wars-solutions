// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    (hours < 10) ? hours = '0' + hours : hours = '' + hours;
    let minutes = Math.floor(seconds / 60) - (hours * 60);
    (minutes < 10) ? minutes = '0' + minutes : minutes = '' + minutes;
    seconds = seconds % 60;
    (seconds < 10) ? seconds = '0' + seconds : seconds = '' + seconds;
    return hours + ':' + minutes + ':' + seconds;
  }