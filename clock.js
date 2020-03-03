/*var mark = 49;
if (mark >= 80 && mark <= 100) {
   document.getElementById("abc").innerHTML = "A+";
}
else if (mark >= 70 && mark <= 79) {
    document.getElementById("abc").innerHTML = "A";
}
else if (mark >= 50 && mark <= 69) {
    document.getElementById("abc").innerHTML = "A-";
}

else{
    document.getElementById("abc").innerHTML = "F";
}*/

function clock() {
        var time = new Date(),
            hour = time.getHours(),
            minute = time.getMinutes(),
            second = time.getSeconds(),
            timeDivide = " PM";
        // AM/PM Set
        if (hour < 12) {
            timeDivide =  " AM";
        }
        
        // 00 = 12
        if (hour == 0) {
            hour = 12;
        }

        // Covert 24 hours into 12 hours
        if (hour > 12){
                hour = hour - 12;
        }

        // Adding 0 
        if (hour<10){
            hour = "0" + hour;
        }

        if (minute<10){
            minute = "0" + minute;
        }

        if (second<10){
            second = "0" + second;
        }
        document.getElementById("abc").innerHTML = hour + ":" + minute + ":" + second + timeDivide;
}
setInterval(clock, 1000)

