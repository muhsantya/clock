"use strict";

function clock() {
    const Time = new Date();

    // time
    const hours = Time.getHours();
    const minutes = addZero(Time.getMinutes());
    const seconds = addZero(Time.getSeconds());

    // Date
    day.textContent = addZero(Time.getDate());
    month.textContent = monthName[Time.getMonth()];
    year.textContent = Time.getFullYear();

    if (clockFormat === "12") {
        timeInterface.textContent = timeFormat12(hours, minutes, seconds);
    } else {
        timeInterface.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

function timeFormat12(hours, minutes, seconds) {
    if (hours > 12) {
        return `${addZero(hours - 12)}:${minutes}:${seconds} PM`;
    } else {
        return `${addZero(hours)}:${minutes}:${seconds} AM`;
    }
}

function addZero(num) {
    return num < 10 ? "0" + num : num;
}

// clock format 12 or 24
let clockFormat = "12";
const loop = setInterval(clock);

// Html Object
const timeInterface = document.querySelector(".time");
const powerButtonParent = document.querySelector(".power");
const [day, month, year] = document.querySelector("ul.container").children;

// Month
const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

// Run function
clock();
