let [mili, seconds, minutes, hours] = [0,0,0,0];
let timeref=document.querySelector(".timer-d");
let int = null;

document.getElementById("start-timer").addEventListener("click", 
    ()=>{
            if(int !== null){
                clearInterval(int);
            }
            int = setInterval(displayTimer, 10);
});
document.getElementById("pause-timer").addEventListener("click", 
    ()=>{
        clearInterval(int);
    });

    document.getElementById("reset-timer").addEventListener("click", 
        ()=>{
            clearInterval(int);
            [mili, seconds, minutes, hours]=[0,0,0,0];
            timeref.innerHTML = "00 : 00 : 00 : 000 ";
        });
function displayTimer(){
    mili+=10;
    if(mili == 1000){
        mili = 0;
        seconds++;
        if(seconds ==  60){
            seconds=0;
            minutes++;
            if(minutes==60)
                {
                    minutes=0;
                    hours++;
                }
        }

    }
    let h = hours<10 ? "0" + hours : hours;
    let m = minutes<10 ? "0" + minutes : minutes;
    let s = seconds<10 ? "0" + seconds : seconds;
    let ms = mili<10 ? "00" + mili : mili<100 ? "0" + mili : mili;

    timeref.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}