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
    document.body.style.background = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    document.getElementById('background').style.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    var hour = Math.floor(counter /3600);
    var minute = Math.floor((counter - hour*3600)/60);
    var seconds = counter - (hour*3600 + minute*60);

    timerbox.innerHTML = hour + ":" + minute + ":" + seconds;
}

var actionButton = document.getElementById('action')
var timerbox =  document.getElementById("timer")
//
actionButton.addEventListener('click', function(){
        //clearInterval(timer)

        if (this.innerHTML === 'Pause'){
            clearInterval(timer)
            this.innerHTML = 'Continue'
            setInterval(after15, 15000)
        }
        else if ( this.innerHTML === 'Continue'){
            start()
            this.innerHTML = "Pause"
        }
        else if (this.innerHTML === 'START'){
            clearInterval()
            start()
            this.innerHTML = "Pause"
        }
})
//whoooo it works.  I had this in the wrong section the whole time.
function after15 () {
    clearInterval(timer)
    actionButton.innerHTML = 'START'
    timerbox.innerHTML = "0"+ ":" + '0' + ":" + '0';
    counter = 0
}

//function is double-clicked.  reset to zero.  This did not work the longest time.  Changed the innerHTMl from continue to pause and i had a seperate function for the clearInterval and just put it into this one.
actionButton.addEventListener('dblclick', function(){
     (this.innerHTML === 'Pause')
        clearInterval()
        actionButton.innerHTML = 'START'
        timerbox.innerHTML = "0"+ ":" + '0' + ":" + '0';
        counter = 0
    })
