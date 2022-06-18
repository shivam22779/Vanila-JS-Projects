console.log("Shivam");
// let date = new Date();
// let date = new Date(year, month, date, hours, minutes, seconds, milliseconds);
// let date = new Date('2025/05/20 04:05:08');
// let date = new Date('2025-Aug-20');
// console.log(date);
// console.log(date.getFullYear())
// console.log(date.getSeconds().toString())
// console.log(Date.now())
// console.log(date.setM(0))
// console.log(date)

function updateClock(){
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    // Adding 0 before min and sec as it is diplayed in single digit for < 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds
    
    
    let decideAmPm = currentHours < 12 ? "AM" : "PM";

    // Convert 24 hours in 12AM and 12PM format
    currentHours = (currentHours > 12) ? (currentHours - 12) : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    currentHours = (currentHours < 10 ? "0" : "") + currentHours

    let timeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + decideAmPm;
    document.getElementById("clock").innerText = timeStr;
}
    