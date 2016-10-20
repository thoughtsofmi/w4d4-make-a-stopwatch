var name ="Christy"
//alert(name)//happens immediately.

function runsLater(){
    alert(name)//computer saves and runs later... still fast
}
var firstTimeout = setTimeout(runsLater, 5000)//number of milisec
//window.setTimeout(runsLater, 5000)
//comes first than the later, cuz above the other one. but if you change out the time
console.log(firstTimeout)//queue # comes out in chrome
var secondTimeout = setTimeout(function() {
    alert('This comes later.')
},5000)
console.log(secondTimeout)
clearTimeout(firstTimeout)//use a function to clear it out.
clearTimeout(secondTimeout)

var actionTimer
var counter = 0

document.getElementById('action').addEventListener('click', function(){
    counter ++
    this.innerHTML = counter++
    //this button.  arrow eliminates scopes on the function. so that the this
    clearTimeout(actionTimer)//created a variable called actionTImer to clear out the previous timer
    actionTimer = setTimeout(() => {
        this.innerHTML = '0'
        console.log('happened once.')
        counter = 0
        }, 2000)
})



function doThis(){
    console.log('Doing Something.....')
}
setInterval(doThis, 1000)

function doThis(){
    counter++
    console.log(counter)
}
setInterval(doThis, 1000)


function doThis(){
    counter++
    console.log(counter)
}

var timer = setInterval(doThis, 1000)

document.getElementById('action').addEventListener('click', function(){
clearInterval(timer)
this.innerHTML = "paused"
})

function doThis(){
    counter++
    console.log(counter)
}

var timer
function start(){//we can use this start variable again after we clear it out.

timer = setInterval(doThis, 1000)//
}//outside the scope, shared variable.
document.getElementById('action').addEventListener('click', function(){
clearInterval(timer)
    if (this.innerHTML === 'Paused') {
start()
this.innerHTML = "pause"
}
else {
    this.innerHTML = 'paused'
}
})

start()

var animationId
function animationLoop(){
    var button = document.getElementById('action')
    var top = Number(getComputedStyle(button).top.replace('px', ''))
    button.style.position ='absolute'
    button.style.top = top + 1 + 'px'
    animationId = requestAnimationFrame(animationLoop)
}
animationLoop()

var animationId
function animationLoop(){
    var button = document.getElementById('action')
    var top = Number(getComputedStyle(button).top.replace('px', ''))
    if(top>= 600) {
        top =0
    }
    button.style.position ='absolute'
    button.style.top = top + 1 + 'px'
    animationId = requestAnimationFrame(animationLoop)//makes the loop, function calls itself and reloop
}
animationLoop()//call this line one time.  but... will run the code inside because of the requestAnimationFrame

var animationId
function animationCircle(){
    var circle = document.getElementById('cc')
    var width = Number(getComputedStyle(circle).width.replace('px', ''))
    var height = Number(getComputedStyle(circle).height.replace('px', ''))

    if(width>= 600 ) {
        width =300
    }
    else if(height>= 600) {
        height =300
    }
    then ( width<= 600 ) {
        width =300
    }
    circle.style.position ='absolute'
    circle.style.width = width + 1 + 'px'
    circle.style.height = height + 1 + 'px'
    animationId = requestAnimationFrame(animationCircle)//makes the loop, function calls itself and reloop
}
animationCircle()//call this line one time.  but... will run the code inside because of the requestAnimationFrame
