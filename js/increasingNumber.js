const updateNumber1 = document.querySelector('.number');
const updateNumber2 = document.querySelector('.number2');
const updateNumber3 = document.querySelector('.number3');

let number = 0;
let number2 = 0;
let number3 = 0;

function updateNumber(){
    if (number<3)
    {
        number++;
        updateNumber1.textContent= number + "+" +"";
    }
    if (number2 < 5000){
        number2++;
        updateNumber2.textContent= number2 + "+" +"";
    }
    if (number3 < 5000){
        number3++;
        updateNumber3.textContent= number3 + "+" +"";
    }
}
setInterval(updateNumber,11);