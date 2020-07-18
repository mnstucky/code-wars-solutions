// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    const times = new Map()
    let result = ''
    times.set('year', Math.floor(seconds / 31536000));
    seconds -= times.get('year') * 31536000;
    times.set('day', Math.floor(seconds / 86400));
    seconds -= times.get('day') * 86400;
    times.set('hour', Math.floor(seconds / 3600));
    seconds -= times.get('hour') * 3600;
    times.set('minute', Math.floor(seconds / 60));
    seconds -= times.get('minute') * 60;
    times.set('second', seconds);
    for (const time of times) {
      if (time[1] === 0);
      else if (time[1] === 1) result += time[1] + ' ' + time[0] + ', ';
      else result += time[1] + ' ' + time[0] + 's, '
    }
    result = result.substring(0, result.length - 2);
    const indexOfLastComma = result.lastIndexOf(',');
    if (indexOfLastComma === -1) return result;
    return result.substring(0, indexOfLastComma) + ' and' + result.substring(indexOfLastComma + 1, result.length);
  }