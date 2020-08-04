tim_msec = 0; 
tim_sec = 0; 
tim_min =0;
tim_hour= 0;
var nummilsec  = document.getElementById("tim_msec");
var numsec  = document.getElementById("tim_sec");
var nummin  = document.getElementById("tim_min");
var numhour  = document.getElementById("tim_hour");
var interval;
 
function timer (){
    tim_msec++
    nummilsec.innerHTML = tim_msec;
    if (tim_msec>=99){
        tim_sec ++
        numsec.innerHTML = tim_sec
        tim_msec = 0
    }
    else if ( tim_sec>=59){
        tim_min++
        nummin.innerHTML = tim_min;
        tim_sec=0
    }
}
function start () {
 interval = setInterval( timer , 10)
}
 
function pause (){
    clearInterval (interval)
}
function stop(){
    tim_msec = 0;  
tim_sec = 0; 
tim_min =0;
tim_hour= 0;
nummilsec.innerHTML  = tim_msec
numsec.innerHTML  = tim_sec
nummin.innerHTML  = tim_min
pause()
}
