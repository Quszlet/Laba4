let timer_v = document.getElementById("timer_textbox");
let button = document.getElementById("button_page1");


function Timer(){
    if(timer_v.value == ""){
        creating_page2();
        return;
    }

    if(/\D/g.test(timer_v.value)){
        alert("Время не может быть отрицательным")
        return;
    } else {
        creating_page2();
        let timer_show = document.getElementById("timer");
        let timeMinuts = parseInt(timer_v.value) * 60;
        let timer = setInterval(function () {
            let seconds = timeMinuts%60
            let minutes = timeMinuts/60%60
            let hour = timeMinuts/60/60%60
            if (timeMinuts <= 0) {
                clearInterval(timer);
                complete();
                alert("Время закончилось");
            } else {
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                timer_show.innerHTML = strTimer;

            }
            --timeMinuts;
        }, 1000)
    }
}