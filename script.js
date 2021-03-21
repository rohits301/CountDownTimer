const startingTime = 10; // in minutes
let time = startingTime * 60;

const countDownEle = document.getElementById('countdown');

var setTime = setInterval(updateCountdown, 10);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10? '0' + seconds : seconds; // handles single 0 in beginning

    countDownEle.innerHTML = minutes + ":" + seconds;

    time == 0? 0 : time--;
}
