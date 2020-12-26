"use strict"

function clock(){

    let Time = new Date()
    
    let hours = Time.getHours()
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
    if (hours > 12){
        return `${addZero(hours - 12)}:${minutes}:${seconds} PM`
    } else {
        return `${addZero(hours)}:${minutes}:${seconds} AM`
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





    

