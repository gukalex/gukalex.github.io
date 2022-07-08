function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

randomNum = randomIntFromInterval(0, 3600);
newUrl = "https://www.youtube.com/embed/EColTNIbOko?autoplay=1&start=" + randomNum; 
window.location.replace(newUrl);
