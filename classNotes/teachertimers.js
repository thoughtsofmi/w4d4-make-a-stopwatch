var name = 'Joe'
function runsLater() {
    alert(name)
}

// Run code 5 seconds in the future
var firstTimeout = setTimeout(runsLater, 5000)
console.log(firstTimeout)

var secondTimeout = setTimeout(function() {
    alert('This comes later.')
}, 5000)
console.log(secondTimeout)

// Stop timeouts from happening
// clearTimeout(firstTimeout)
// clearTimeout(secondTimeout)

// Timeout label change example
var actionTimer
var counter = 0

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

// Animation loop example using requestAnimationFrame
var animationId
function animationLoop() {
    var button = document.getElementById('action')
    var top = Number(getComputedStyle(button).top.replace('px',''))

    if (top >= 600) {
        top = 0
    }

    button.style.position = 'absolute'
    button.style.top = top + 1 + 'px'

    animationId = requestAnimationFrame(animationLoop)
}

animationLoop()

// Color morphing example
// var animationId
// var colorRed = 0
// var colorBlue = 0
// var colorGreen = 0
//
// function animationLoop() {
//     colorRed += 1 * (Math.random() > 0.5 ? 1 : -1)
//     colorGreen += 1 * (Math.random() > 0.5 ? 1 : -1)
//     colorBlue += 1 * (Math.random() > 0.5 ? 1 : -1)
//     if (colorRed > 255) {colorRed = 255}
//     else if (colorRed < 0) {colorRed = 0}
//     if (colorGreen > 255) {colorGreen = 255}
//     else if (colorGreen < 0) {colorGreen = 0}
//     if (colorBlue > 255) {colorBlue = 255}
//     else if (colorBlue < 0) {colorBlue = 0}
//
//     document.body.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`
//
//     animationId = requestAnimationFrame(animationLoop)
// }
//
// animationLoop()


///
