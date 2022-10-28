const startMin = 1;
let time = startMin * 60;

const countdownEl = document.getElementById('countdown');

const start = setInterval(updateCount, 1000);

function updateCount() {
    // console.log(600%60)
    let minutes = Math.floor(time/60);
    let seconds = time % 60 ;

    // console.log(`${minutes}:${seconds}`);

    seconds = seconds < 10 ? '0' + seconds : seconds; // formato de 1:5 para 01:05
    minutes = minutes < startMin ? '0' + minutes : minutes; // formato de 1:5 para 01:05
    
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time -=1;

    if (time == -1) {
        clearInterval(start);
    }
    
}


