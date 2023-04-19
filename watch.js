let hr = min = sec = ms = "0" + 0,
    startTimer;

const
    millisecond = document.querySelector(".millisecond"),
    startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    startBtn.classList.add("active");
    millisecond.classList.add("g_active");
    millisecond.classList.remove("w_active");
    millisecond.classList.remove("r_active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {
        ms++
        ms = ms < 10 ? "0" + ms : ms;

        if (ms == 100) {
            sec++;
            ms = "0" + 0;
            sec = sec < 10 ? "0" + sec : sec;

        }


        if (sec == 60) {
            min++;
            sec = "0" + 0;
            min = min < 10 ? "0" + min : min;


        }

        if (min == 60) {
            hr++;
            min = "0" + 0;
            hr = hr < 10 ? "0" + hr : hr;


        }
        putValue();
    }, 10);
}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    millisecond.classList.add("r_active");
    millisecond.classList.remove("g_active");
    millisecond.classList.remove("w_active");
    clearInterval(startTimer);
}

function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    millisecond.classList.add("w_active");
    millisecond.classList.remove("g_active");
    millisecond.classList.remove("r_active");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0,
        putValue();
}

function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("pause");
var btn = document.getElementById("resume");


function pauseFunction() {
  if (video.paused) {

  } else {
    video.pause();
  }
}

function resumeFunction() {
    if (video.paused) {
            video.play();
  
    } else {
      
    }
  }