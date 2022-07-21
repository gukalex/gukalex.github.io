function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

videoId = findGetParameter('videoId');
type = findGetParameter('type');
start = findGetParameter('start');
end = findGetParameter('end');

if ('69420' == type) { // regular video
  randomNum = randomIntFromInterval(parseInt(start), parseInt(end));
  newUrl = 'https://www.youtube.com/embed/' +  videoId + '?autoplay=1&start=' + randomNum;
  window.location.replace(newUrl);
}
if ('42069' == type) { // playlist
  randomNum = randomIntFromInterval(parseInt(start), parseInt(end));
  newUrl = 'https://www.youtube.com/embed?list=' +  videoId + '&autoplay=1&playnext=1&index=' + randomNum;
  window.location.replace(newUrl);
}
if ('commit' == type) {
  // do nothing - stay at default page with iframe
}
