// TODO use setInterval/setTimeout/clearInterval/ClearTimeout
//TODO Start button to start the timer.
// TODO need counter to show every 10th seconds
// TODO after clicking start... change text to pause
//TODO timer is running.. click the pause button and turn it into continue.  to restart.
//TODO if timer remains paused for 15 secs. reset the timer to zero.
//TODO if pause button is double-clicked, reset the timer to zero.
//TODO for every sec, change the timer text color.

var timer
var counter = 0;

function start() {timer = setInterval(doThis, 1000);}
function doThis() {
    counter++;
    var hour = Math.floor(counter /3600);
    var minute = Math.floor((counter - hour*3600)/60);
    var seconds = counter - (hour*3600 + minute*60);

    timerbox.innerHTML = hour + ":" + minute + ":" + seconds;
}

var actionButton = document.getElementById('action')
var after15 = setInterval(reset, 15000)
actionButton.addEventListener('click', function()
    {clearInterval(timer)

        if (this.innerHTML === 'Pause'){
            clearInterval(timer)
            this.innerHTML = 'Continue'
            }
        else if ( this.innerHTML === 'Continue'){
            start()
            this.innerHTML = "Pause"
        }
        else if (this.innerHTML === 'START'){
            //clearInterval(timer)
            start()
            this.innerHTML = "Pause"
        }
        else {
            this.innnerHTML = 'continue'
            clearInterval(after15)
        }
    })

//function is double-clicked.  reset to zero.

actionButton.addEventListener('dblclick', function(){
 if
     (this.innerHTML === 'Pause'){
         setInterval(reset, 100)

     }
 })

var timerbox =  document.getElementById("timer")
 function reset(){
     clearInterval(timer)

     timerbox.innerHTML = "00"+ ":" + '00' + ":" + '00';
     counter = 0
      actionButton.innerHTML = 'START'
     }
