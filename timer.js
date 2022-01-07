let button2 = document.getElementById('button');
let timerShow1 = document.getElementById('timer');
let timerShow2 = document.getElementById('timer3');

button2.addEventListener('click', function () {

    if(document.getElementById('option4').checked ===true){
        timeMin = 5 * 60
    }
    if(document.getElementById('option5').checked ===true){
        timeMin = 10 * 60
    }
    if(document.getElementById('option6').checked ===true){
        timeMin = 15 * 60
    }

})

timer = setInterval(function () {
    seconds = timeMin%60
    minutes = timeMin/60%60

    if (timeMin<=0){
        clearInterval(timer);
        timerShow1.innerHTML = '--'
        timerShow2.innerHTML = '--'
    } else {
        let timerfinish1 = `${Math.trunc(minutes)}`;
        let timerfinish2 = `${seconds}`;

        if (timerfinish1 >=0 && timerfinish1<=9){
            timerShow1.innerHTML = '0' + timerfinish1;
        } else {
            timerShow1.innerHTML = timerfinish1;
        }

        if (timerfinish2>=0 && timerfinish2<=9){
            timerShow2.innerHTML = "0" + timerfinish2;
        } else {
            timerShow2.innerHTML= timerfinish2;
        }
    }
    --timeMin;
}, 1000)