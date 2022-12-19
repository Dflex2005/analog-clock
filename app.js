const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins")
const secs = document.querySelector(".secs");
const fakeSecs = document.querySelector(".seconds")





function Time(){
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    const rsec = sec*6;
    secs.style.transform = `rotate(${rsec}deg)`;

    if(sec === 0){
        secs.style.transform = `rotate(360deg)`;
        secs.style.display = "none";
        fakeSecs.style.opacity = 1;
    }else if(sec > 0){
        fakeSecs.style.opacity = 0;
        secs.style.display = "flex";
    }

    let cons = min*60+sec;
    let dm = cons/10;
    mins.style.transform = `rotate(${dm}deg)`;

    let conh = hour*3600+cons;
    let dh = conh/120;
    hours.style.transform = `rotate(${dh}deg)`;
}

function timeFormat(time){
    if(time >12){
        time = time-12;
    }
    return time
}

setInterval(()=>{
 Time()
},1000)