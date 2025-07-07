const startButton = document.getElementById("startButton");
const timeInput = document.getElementById("timeInput");
const countdownDisplay = document.getElementById("countdownDisplay");

function starttimer(){
    let valueinSeconds = parseInt(timeInput.value)
    
    if(isNaN(valueinSeconds)){
        countdownDisplay.innerText = "please enter a valid number!"
        return
    }

    if(valueinSeconds <= 0){
        countdownDisplay.innerText = "please enter a number > 0."
        return
    }

    const timer = setInterval(function() {
        valueinSeconds--;
        countdownDisplay.innerText = `Time remaining ${valueinSeconds} seconds!`

        if(valueinSeconds <= 0){
            clearInterval(timer);
            countdownDisplay.innerText = `Times Up!! ⏰`
            timeInput.value = '';
        }

    }, 1 * 1000);

    
}


startButton.addEventListener('click', starttimer)

// create a pause and resume button when the countdown is running.