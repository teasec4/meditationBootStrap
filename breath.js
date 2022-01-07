let timerIn = document.getElementById('timerIn');

colorinhale = '#198754';
colorexhale = '#dc3545' ;

button2.addEventListener('click', function () {
    secondsIn = 1

})

timer = setInterval(function () {

    if(document.getElementById('option1').checked === true){
        if(secondsIn >=1 && secondsIn<6){
        timerIn.style.color = colorinhale

        }
        if (secondsIn >=6 && secondsIn<16){
            timerIn.style.color = colorexhale
        }
        if (secondsIn >=16){
            secondsIn=1
            timerIn.style.color = colorinhale
        }

    }

    if (document.getElementById("option2").checked === true){
        if(secondsIn >=1 && secondsIn<9){
            timerIn.style.color = colorinhale
        }
        if (secondsIn >=9 && secondsIn<24){
            timerIn.style.color = colorexhale
        }
        if (secondsIn >=24){
            secondsIn=1
            timerIn.style.color = colorinhale
        }
    }

    if (document.getElementById("option3").checked === true) {
        if (secondsIn >= 1 && secondsIn < 11) {
            timerIn.style.color = colorinhale
        }
        if (secondsIn >= 11 && secondsIn < 31) {
            timerIn.style.color = colorexhale
        }
        if (secondsIn >= 31) {
            secondsIn = 1
            timerIn.style.color = colorinhale
        }
    }

    let strTimerIn = `${secondsIn}`;
    timerIn.innerHTML = strTimerIn;

    ++secondsIn;

}, 1000)