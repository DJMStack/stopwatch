let hr = min = sec = ms = "0" + 0,
startTimer;
var vid = document.querySelector("video");

let lapNow = null;

const startBtn = document.querySelector(".start"),
stopBtn = document.querySelector(".stop"),
resetBtn = document.querySelector(".reset");
lapBtn = document.querySelector(".lap")
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener('click', lap);

function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");
        startTimer = setInterval(()=>{
        ms++
        ms = ms < 10 ? "0" + ms : ms;
        if(ms == 100){
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if(sec == 60){
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if(min == 60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        putValue();
        vid.play();
    },10); //1000ms = 1s
}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
    vid.pause();
}

function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
}

function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}

function lap() {
    lapNow = `<div class="lap">${hours} : ${minutes} : ${seconds} : ${miliseconds}</div>`;
    lapRecord.innerHTML += lapNow;
  }

/* cursor ###### */

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let left = e.offsetX;
    let top = e.offsetY;
    blob.style.left = (left + 30) + 'px';
    blob.style.top = (top + 30) + 'px';
})

