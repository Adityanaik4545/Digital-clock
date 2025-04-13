let hours= document.getElementById("hrs");
let minutes=document.getElementById("mns");
let seconds=document.getElementById("secs");
function updateClock() {
    let dates= new Date();
    
    let currentHour= dates.getHours();
    let currentMinute= dates.getMinutes();
    let currentSecond= dates.getSeconds();
    
    hours.textContent=currentHour;
    minutes.textContent=currentMinute;
    seconds.textContent=currentSecond;

    let Day=document.getElementById("days");
    let Month=document.getElementById("months");
    let myDate=document.getElementById("dates");


    let currentDay= dates.getDay();
    let currentMonth= dates.getMonth();
    let currentDate= dates.getDate();

    Day.textContent=currentDay;
    Month.textContent=currentMonth;
    myDate.textContent=currentDate;
}
setInterval(updateClock,1000)
