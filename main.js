let time, hours, minutes, seconds;
let digital_clock = document.getElementById("digital-clock");
getTime();
setInterval(getTime, 1000);

//function that gets current system time
function getTime(){
    let date = new Date();
    hours = date.getHours();
    if(hours < 10){
        hours = '0' + hours;
    }
    minutes = date.getMinutes();
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    seconds = date.getSeconds();
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    digital_clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    xd();
}


function xd(){
    let num;
    let max;
    //show hours on binary clock
    for(i = 0; i < 2; i++){
        //convert each digit to binary
        max = document.getElementById(`col${i}`).children.length;
        num = hours.toString(10).charAt(i);
        for(j = 0; j < max; j++){
            //if the first bit is a 1, light up the "LED"
            if((num & 1) === 1){
                document.getElementById(`col${i}`).children.item(j).style.background = "rgb(218,125,101)";
            }else{
                document.getElementById(`col${i}`).children.item(j).style.background = "rgb(221, 200, 200)";
            }
            num = num >> 1;
        }
    }
    //show minutes on binary clock
    for(i = 2; i < 4; i++){
        //convert each digit to binary
        max = document.getElementById(`col${i}`).children.length;
        num = minutes.toString(10).charAt(i-2);
        for(j = 0; j < max; j++){
            //if the first bit is a 1, light up the "LED"
            if((num & 1) === 1){
                document.getElementById(`col${i}`).children.item(j).style.background = "rgb(218,125,101)";
            }else{
                document.getElementById(`col${i}`).children.item(j).style.background = "rgb(221, 200, 200)";
            }
            num = num >> 1;
        }
    }
    //show seconds on binary clock
    for(i = 4; i < 6; i++){
        //convert each digit to binary
        max = document.getElementById(`col${i}`).children.length;
        num = seconds.toString(10).charAt(i-4);
        for(j = 0; j < max; j++){
            //if the first bit is a 1, light up the "LED"
            if((num & 1) === 1){
                document.getElementById(`col${i}`).children.item(j).style.background = "rgb(218,125,101)";
            }else{
                document.getElementById(`col${i}`).children.item(j).style.background = "rgb(221, 200, 200)";
            }
            num = num >> 1;
        }
    }
}

digital_clock.addEventListener("click", getTime, false);