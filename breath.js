let timerIn = document.getElementById('timerIn');

button2.addEventListener('click', function () {
    secondsIn = 1

})

timer = setInterval(function () {

    if(document.getElementById('option1').checked === true){
        if(secondsIn >=1 && secondsIn<6){


        }
        if (secondsIn >=6 && secondsIn<16){

        }
        if (secondsIn >=16){
            secondsIn=1

        }

    }

    if (document.getElementById("option2").checked === true){
        if(secondsIn >=1 && secondsIn<9){

        }
        if (secondsIn >=9 && secondsIn<24){

        }
        if (secondsIn >=24){
            secondsIn=1

        }
    }

    if (document.getElementById("option3").checked === true) {
        if (secondsIn >= 1 && secondsIn < 11) {

        }
        if (secondsIn >= 11 && secondsIn < 31) {

        }
        if (secondsIn >= 31) {
            secondsIn = 1

        }
    }

    let strTimerIn = `${secondsIn}`;
    timerIn.innerHTML = strTimerIn;

    ++secondsIn;

}, 1000)