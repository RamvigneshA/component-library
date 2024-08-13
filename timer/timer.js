let count = 10;
let slideValue = 100 - (count / 10) * 100;
const timer = document.getElementById("timer");
const slider = document.getElementById("sliderId");
const change = document.getElementById("startchng");
timer.innerHTML = count;
slider.style.top = slideValue + "%";
let isPaused=false;
let itervalId;

function start() {
if(isPaused){  
  clearInterval(itervalId);
  intervalId = null;
  change.innerText = "resume";
}else{
  itervalId = setInterval(() =>{
    if (count === 0) {
        clearInterval(itervalId);
        intervalId= null;
        change.innerText = "click resume";
        isPaused = false;
        return;
    }
    count--;
    slideValue = 100 - (count / 10) * 100;
    slider.style.top = slideValue + "%";
    timer.innerHTML = count;
  }, 1000);
  change.innerText = "pause";
}
isPaused =! isPaused;
}

function reset() {
  clearInterval(itervalId);
  count = 10;
  slideValue = 100 - (count / 10) * 100;
  slider.style.top = slideValue + "%";
  timer.innerHTML = count;
  change.innerText = "start";
  
  isPaused = false;
  itervalId = null;
}

// function start(){
//   setInterval(() => {startTimer()}, 1000);
// }
// function startTimer(){
//     const slider = document.getElementById('sliderId');
//     const tim =document.getElementById('timer');

//      count=count+1;
//     let slideValue = ((count/60)*100)*-1;
//     tim.innerHTML=count;
//     slider.style.bottom= slideValue +"%";

// }
