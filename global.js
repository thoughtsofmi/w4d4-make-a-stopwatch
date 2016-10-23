// TODO use setInterval/setTimeout/clearInterval/ClearTimeout
//TODO Start button to start the timer.
// TODO need counter to show every 10th seconds
// TODO after clicking start... change text to pause
//TODO timer is running.. click the pause button and turn it into continue.  to restart.
//TODO if timer remains paused for 15 secs. reset the timer to zero.
//TODO if pause button is double-clicked, reset the timer to zero.
//TODO for every sec, change the timer text color.

var color
var counter = 0;
var red
var blue
var green







function start() {timer = setInterval(doThis, 1000);}
function doThis() {


    counter++;
document.getElementById('background').style.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';


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
            clearInterval(after15)
        }
        else if (this.innerHTML === 'START'){
            //clearInterval(timer)
            start()
            this.innerHTML = "Pause"
        }
    })

//function is double-clicked.  reset to zero.

actionButton.addEventListener('dblclick', function(){
 if
     (this.innerHTML === 'Continue'){
         setInterval(reset, 1000)

     }
 })

var timerbox =  document.getElementById("timer")
 function reset(){
     clearInterval(timer)
actionButton.innerHTML = 'START'
     timerbox.innerHTML = "0"+ ":" + '0' + ":" + '0';
     counter = 0

     }
