

const timer = document.getElementById('stopwatch');
var audio = new Audio( 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3');

/*

Start with timer at 0
Timer will go to 30 mins
Trigger the alarm sound, which will last for 5 secs
After that the time will reset to 0
Then the timer will go to 5 mins
Trigger the alarm sound, which will last for 5 secs

*/

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var ifAlarmTriggered = false;
var secondaryTimer = false;
var timer30Min = true;
var timer5Min = false;

function playAudio(){
  audio.play();
}

function stopAudio(){
  audio.pause();
  audio.currentTime = 0;
}

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    resetTimer();
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      timerSwitch();
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}


function resetTimer() {
    hr = 0;
    min = 0;
    sec = 0;
    stoptime = true;

    timer.innerHTML = '00:00:00';
    stopAudio();
}

function timerSwitch(){
  if(min == 30 && timer30Min)
    { //30 mins
    stoptime = true;
    playAudio();


    setTimeout("stopAudio()", 9000);
    setTimeout("resetTimer()", 9000);
    setTimeout("startTimer()", 9000);

    timer5Min = true;
    timer30Min = false;
  }



  if(min == 30 && timer5Min){ //5 mins
    stoptime = true;
    //startTimer();
    playAudio();


    setTimeout("stopAudio()", 9000);
    setTimeout("resetTimer()", 9000);
    setTimeout("startTimer()", 9000);


    timer30Min = true;
    timer5Min == false;
  }
}
