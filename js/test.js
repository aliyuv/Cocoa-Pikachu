import cssStr from './style'
const content = document.querySelector("#content");
const content2 = document.querySelector("#content2");
const stop = document.querySelector(".stop");
const play = document.querySelector(".play");
const slow = document.querySelector(".slow");
const normal = document.querySelector(".normal");
const fast = document.querySelector(".fast");

const string = cssStr;
let n = 1;
let time = 100;
content.innerText = string.substring(0, n);
content2.innerHTML= string.substring(0, n);
const run = () => {
    n += 1;
    if (n >= string.length) {
        window.clearInterval(id);
        return;
    }
    content.innerText = string.substring(0, n);
    content2.innerHTML= string.substring(0, n);
    content.scrollTop = content.scrollHeight;
}

const playRun = ()=>{
    return setInterval(run,time);
}
let id = playRun();
const pause = ()=>{
    window.clearInterval(id);
}
stop.addEventListener("click",()=>{
    pause();
})
play.addEventListener("click",()=>{
    id =  playRun();
})

slow.addEventListener("click",()=>{
    pause();
    time = 300;
    id =  playRun();
})

normal.addEventListener("click",()=>{
    pause();
    time = 150;
    id =  playRun();
})

fast.addEventListener("click",()=>{
    pause();
    time = 0;
    id =  playRun();
})