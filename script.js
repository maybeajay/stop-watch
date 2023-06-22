// getting the action function
let seconds = document.getElementById("se");
let minutes = document.getElementById("mi");
let hours = document.getElementById("hr");
let isActive = true;
let degree =0;
let degreemin =0;
let degreehr=0; 
let min = 0, hr = 0;
let myInterval = 0,value = 0;
const startTimer = () => {
  myInterval = setInterval(() => {
    seconds.innerHTML = value++;
    degree = value*6;
    document.getElementById('rotate').style.transform='rotate('+ degree +'deg)';
    if (value>60) {
      value = 0;
      seconds.innerHTML=value;
      min++;
      minutes.innerHTML = min +":";
    } 
    if (min==60) {
      min = 0;
      minutes.innerHTML = min +":";
      hr++;
      hours.innerHTML = hr+":";
    }
    degreemin=min*6;
    document.getElementById('rotatemin').style.transform='rotate('+ degreemin +'deg)';

    degreehr=hr*6;
    document.getElementById('rotatehr').style.transform='rotate('+ degreehr +'deg)';
  }, 1000);
  isActive = false;
};

const resetTimer = () => {
  if (!isActive) {
    seconds.innerHTML = 0;
    minutes.innerHTML = 0 + ":";
    hours.innerHTML = 0 + ":";
    value = 0;
    min = 0;
    hr = 0;
  }
  clearInterval(myInterval)
};

const stopTimer = () => {
  if (!isActive) {
    clearInterval(myInterval);
  }
};
