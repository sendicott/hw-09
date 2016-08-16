window.addEventListener('load', function () {
    let operator = null;

    let firstent = document.getElementById('firstEntry');
    firstent.addEventListener('input', function () {
        numberone = firstent.value;
    })

    let secondent = document.getElementById('secondEntry');
    secondent.addEventListener('input', function () {
        numbertwo = secondent.value;
    })

    let plusbutt = document.getElementById('add');
    plusbutt.addEventListener('click', function () {
        operator = "+";
    })

    let minusbutt = document.getElementById('minus');
    minusbutt.addEventListener('click', function () {
        operator = "-";
    })

    let multibutt = document.getElementById('multiply');
    multibutt.addEventListener('click', function () {
        operator = "*";
    })

    let divibutt = document.getElementById('divide');
    divibutt.addEventListener('click', function () {
        operator = "/";
    })

    let calcubutt = document.getElementById('calculate');
    calcubutt.addEventListener('click', function () {
        let calculation = null;
        if (operator === "+") {
            calculation = numberone + numbertwo;
        } else if (operator === "-") {
            calculation = numberone - numbertwo;
        } else if (operator === "*") {
            calculation = numberone * numbertwo;
        } else if (operator === "/") {
            calculation = numberone / numbertwo;
        }
            let answer = document.getElementById('answer')
            answer.textContent = "Answer: " + calculation;
    })
})