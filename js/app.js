function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }
    else {
        //console.log('got 3 digit and calling again', pin);
        return getPin();
    }

}

function generatePin() {

    const pin = getPin();
    document.getElementById("display-pin").value = pin;
    //console.log(pin);
}


document.getElementById("key-pad").addEventListener("click", function (event) {
    //console.log(event.target.innerText);
    const number = event.target.innerText;

    const calcInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ' ';
        }

    }
    else {

        //const calcInput = document.getElementById("typed-numbers");
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})



function verifyPin() {
    const pin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById("typed-numbers").value;
    const successMessage = document.getElementById("notify-sucess");
    const failErrors = document.getElementById("notify-fail");
    if (pin == typedNumbers) {
        //console.log('match');
        successMessage.style.display = 'block';
        failErrors.style.display = 'none';


    }
    else {
        failErrors.style.display = 'block';
        successMessage.style.display = 'none';

        //console.log('opps');
    }
    //console.log('verify pin');
}