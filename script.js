"use strict"

function clock(){
    "use strict"

    let Time = new Date()

    let hours = addZero(Time.getHours())
    let minutes = addZero(Time.getMinutes())
    let seconds = addZero(Time.getSeconds())


    if(clockFormat === "12"){
        timeInterface.textContent = timeFormat12(hours, minutes, seconds)
    } else {
        timeInterface.textContent = `${hours}:${minutes}:${seconds}`
    }
} 


function toggleClock() {
    if(loop){
        clearInterval(loop)
        loop = false
    } else {
        loop = setInterval(clock, 500)
    }
}


function timeFormat12(hours, minutes, seconds){
    if ((hours * minutes * seconds) > (12 * 60 * 60)){
        return `${hours - 12}:${minutes}:${seconds} PM`
    } else {
        return `${hours}:${minutes}:${seconds} AM`
    }
}


function addZero(num) {
    return num < 10 ? "0" + num : num
}


// clock format 12 or 24
let clockFormat = "12"
let loop = setInterval(clock, 500)

// Html Object
let timeInterface = document.querySelector(".time")
let powerButtonParent = document.querySelector(".power")
let powerButton = document.querySelector(".powerButton")




// Run function
clock()


powerButtonParent.addEventListener("click", function(){
    if(loop){
        powerButton.classList.add("powerOff")
        toggleClock()
    } else {
        powerButton.classList.remove("powerOff")
        toggleClock()
    }
})





    

