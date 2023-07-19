function showTime() { //create function for show time on browser
    var date = new Date(); //->get full date and time from local system
    var h = date.getHours(); //->get hours from date function
    var m = date.getMinutes(); //->get minutes from date function
    var s = date.getSeconds(); //->get seconds from date function
    var session = "AM"; //->create session variable for store am and pm time

    if (h == 0) { //->create condition for add am and pm acording to time 
        h = 12;
    }

    if (h > 12) { //-> grater than 12 than using this  session var will be added
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h; //if digit is one than added zero before the digit
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session; //print full time
    document.getElementById("MyClock").innerText = time; //print time using html nad css design


    setTimeout(showTime, 1000); //it will update time after every second

}

showTime(); //finaly execute function