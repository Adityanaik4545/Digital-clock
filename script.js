let hours = document.querySelector("#hrs span");
let minutes = document.querySelector("#mns span");
let seconds = document.querySelector("#secs span");
let session=document.getElementById("ap");
let year=document.getElementById("yrs");

// let textHrs=document.createElement("p");
// textHrs.textContent="Hrs"
// hours.appendChild(textHrs)

function updateClock() {
    let dates = new Date();

    let currentHour = dates.getHours();
    let currentMinute = dates.getMinutes();
    let currentSecond = dates.getSeconds();
    let currentYear=dates.getFullYear()
    
    function timeFormat(unit) {
        return unit<10?`0${unit}`: unit;
    }
    if (currentHour===0) {
        currentHour=12;
        session.textContent="am";
        
    } else if(currentHour===12){
            session.textContent="pm"
        }
        else if(currentHour>12){
            currentHour=currentHour-12;
            session.textContent="pm"
        }
        else{
            session.textContent="am"
        }
        currentSecond=timeFormat(currentSecond);
        currentMinute=timeFormat(currentMinute);
        currentHour=timeFormat(currentHour);

    // hours.innerHTML = `${currentHour}<p>hrs</p>`;
    hours.textContent = currentHour;
    minutes.textContent = currentMinute;
    seconds.textContent = currentSecond;
    year.textContent=currentYear;
    
    let Day = document.getElementById("days");
    let Month = document.getElementById("months");
    let myDate = document.getElementById("dates");

    
    let currentDay = dates.getDay();
    let currentMonth = dates.getMonth();
    let currentDate = dates.getDate();
    
    let allDays = ["Sunday", "Monday", "tuesday", "wednesday", "thursday", "friday", "Saturday"];
    let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    Day.textContent = allDays[currentDay];
    Month.textContent = allMonths[currentMonth];
    myDate.textContent = currentDate;
    
}
setInterval(updateClock, 1000)
