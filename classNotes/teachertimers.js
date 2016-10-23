
var actionTimer


// document.getElementById('action').addEventListener('click', function() {
//     counter++
//     this.innerHTML = counter
//
//     clearTimeout(actionTimer)
//     actionTimer = setTimeout(() => {
//         counter = 0
//         this.innerHTML = '0'
//         console.log('Happened once.')
//     }, 2000)
// })

// Timer button example
var counter = 0
function doThis() {
    counter++
    console.log(counter)
}

var timer
function start() {
    timer = setInterval(doThis, 1000)
}

document.getElementById('action').addEventListener('click', function() {
    clearInterval(timer)

    if (this.innerHTML === 'Paused') {
        start()
        this.innerHTML = 'Pause'
    }
    else {
        this.innerHTML = 'Paused'
    }
})

start()

//Color morphing example
var animationId
var colorRed = 0
var colorBlue = 0
var colorGreen = 0

function colorChange() {
colorRed += 1 * (Math.random() > 0.5 ? 1 : -1)
colorGreen += 1 * (Math.random() > 0.5 ? 1 : -1)
colorBlue += 1 * (Math.random() > 0.5 ? 1 : -1)
if (colorRed > 255) {colorRed = 255}
else if (colorRed < 0) {colorRed = 0}
if (colorGreen > 255) {colorGreen = 255}
else if (colorGreen < 0) {colorGreen = 0}
if (colorBlue > 255) {colorBlue = 255}
else if (colorBlue < 0) {colorBlue = 0}

}

colorChange()

// use setInterval/setTimeout/clearInterval/ClearTimeout
// TODO Start button to start the timer.
// TODO need counter to show every 10th seconds
//TODO after clicking start... change text to pause
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
var resetTime
var actionButton = document.getElementById('action')
actionButton.addEventListener('click', function()
    {clearInterval(timer)

        if (this.innerHTML === 'Pause'){
            clearInterval(timer)
            this.innerHTML = 'Continue'
            }
        else if ( this.innerHTML === 'Continue'){
            start(timer)
            //setInterval(reset, 1500)

        this.innerHTML = "Pause"

        }
        else if (this.innerHTML=== 'Start'){
            clearInterval(timer)
            start(timer)
            this.innerHTML = "Pause"
        }

        else{
            this.innerHTML = "Pause"
            start(timer)
        }
    })

//function is double-clicked.  reset to zero.

document.getElementById('action').addEventListener('dblclick', function(){
 if
     (this.innerHTML === 'Pause'){
         setInterval(reset, 100)
          actionButton.innerHTML = 'START'
     }
 })

var timerbox =  document.getElementById("timer")
 function reset(){
     clearInterval(timer)

     timerbox.innerHTML = "00"+ ":" + '00' + ":" + '00';
     counter = 0
      //this.innerHTML = 'START'
     }
