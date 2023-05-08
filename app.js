    document.getElementById('lap').disabled = true;
    var seconds = "00"; 
    var tens = "00"; 
    var mins = "00";
    var appendmin = document.getElementById("mins")
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');
    var Interval ;

    const secDiv = document.getElementById('sec');
    const miDiv = document.getElementById('min');
    const lapDiv = document.getElementById('hour');
    setInterval(updateClock, 1000);


    var Lap = document.getElementById('lap');
    var Laps = document.getElementById('laps');
    var vid = document.querySelector("video");


    function updateClock(){
      let sec = seconds/ 60;
      let mi = (mins + sec) / 60;
      secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
	    miDiv.style.transform = "rotate(" + (mi * 360) + "deg)";
    }
  
    buttonStart.onclick = function() {
      document.getElementById('lap').disabled = false;
      vid.play();
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
      document.getElementById('start').disabled = true;
      updateClock();
    }
    
    buttonStop.onclick = function() {
      vid.pause();
      clearInterval(Interval);
      document.getElementById('lap').disabled = true;
      document.getElementById('start').disabled = false;
    }
    
    Lap.onclick = function() {
      Laps.innerHTML += "<li>" + appendmin.innerHTML + ":" + appendSeconds.innerHTML + ":" + appendTens.innerHTML + "</li>";
      laprun();
    }

    function laprun() {
      tens++; 
      let hr = 0;
      if (tens > 99) {
        console.log("seconds");
        hr++;
        tens = 0;
      }
      if(hr > 59 ){
        lapDiv.style.transform = "rotate(" + (hr * 360) + "deg)";
      }
    }


    buttonReset.onclick = function() {
      vid.pause();
      document.getElementById('lap').disabled = true;
      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      mins = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      appendmin.innerHTML = mins;
      Laps.innerHTML = '';
      document.getElementById('start').disabled = false;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
      
      if(seconds > 59 ){
        mins++;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
        appendmin.innerHTML = "0" + mins;
      }
    
    }
    
    
  


/* cursor ###### */

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let left = e.offsetX;
    let top = e.offsetY;
    blob.style.left = (left + 30) + 'px';
    blob.style.top = (top + 30) + 'px';
});