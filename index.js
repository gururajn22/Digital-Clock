const hourE=document.getElementById("hours");
const minutesE=document.getElementById("mintues");
const secondsE=document.getElementById("seconds");
const ampmE=document.getElementById("ampm");
 
function updateClockGuru(){
    let h =new Date().getHours();
    let m =new Date().getMinutes();
    let s =new Date().getSeconds();
    let ampm= "AM";

    if(h>12){
        h = h-12;
        ampm="pm";
    }

    h=h<10 ? "0" + h : h;
    m=m<10 ? "0" + m : m;
    s=s<10 ? "0" + s : s;

    hourE.innerText= h;
    minutesE.innerText= m;
    secondsE.innerText= s;
    ampmE.innerText=ampm;
    setTimeout(()=>{
        updateClockGuru();
    },1000)
}
updateClockGuru();



