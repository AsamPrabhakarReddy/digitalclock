const h1=document.getElementById("hour");
const m1=document.getElementById("min");
const s1=document.getElementById("sec");
const ampm1=document.getElementById("ampm");
function updateClock(){
    let h= new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="PM";
    if(h>12){
        h=h-12;
        ampm="AM";
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    h1.innerText=h;
    m1.innerText=m;
    s1.innerText=s;
    ampm1,(innerText=ampm);
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock();