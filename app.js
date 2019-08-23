/*var { Timer } = require('node_modules/easytimer/dist/easytimer.js');

var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});
*/
//-----------------------------------------------------------------------------------------------------
var active = false;


function startTimer(){
  if(active){
		var timer = document.getElementById("my_timer").innerHTML;
		var arr = timer.split(":");
		var hour = arr[0];
		var min = arr[1];
		var sec = arr[2];
alert("one");
		if(sec == 59){
			if(min == 59){
				hour++;
				min = 0;
				if (hour < 10) hour = "0" + hour;
				} else{
					min++;
				}
				if (min < 10) min = "0" + min;
				sec = 0;
				} else{
					sec++;
				
				if(sec < 10) sec = "0" + sec;
				}
				
				document.getElementById("my_timer").innerHTML = hour + ":" + min + ":" + sec;
				setTimeout(start_timer, 1000);
			}
		}
  


function changeState(){
	alert("two");
	if(active == false){
		active = true;
		startTimer();
		console.log("Timer has been started");
		document.getElementById("control").innerHTML = "PAUSE";
	}
	else{
		active = false;
		console.log("Timer has been paused");
		document.getElementById("control").innerHTML = "START";
	}
}


function reset(){
	alert("three");
	document.getElementById("my_timer").innerHTML = "00" + ":" + "00" + ":" + "00";
}

//-----------------------------------------------------------------------------------------------------

const btn = document.querySelector('#button');
if (btn)
  btn.addEventListener('click', loadTabs);function loadTabs() {
    // This is the request to obtain an array of active tabs. It returns a promise.
    // It accepts a config object (see docs)
    browser.tabs.query({ currentWindow:true })
        .then(tabs => {
            const results = document.querySelector('#results');
            parts = [];            
            for (let tab of tabs) {
              parts.push(`<li>${tab.title}: ${tab.url}</li>`);
            }            
            results.innerHTML = parts.join('');
        });
  }
