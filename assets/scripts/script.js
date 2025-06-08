const CalcScreen = document.getElementById("calc-screen-inner");
const Calcbuttons = document.querySelectorAll(".calc-btn");

let previousNum;
let lastSymbol = CalcScreen.innerText.slice(-1);


Calcbuttons.forEach(button => {
    button.addEventListener("click", (evt) => {
        evt.preventDefault();
        countNumbers(button.innerText);
});

function countNumbers (variable) {
    switch (variable) {
            case "C":
                CalcScreen.innerText = "0";
                break;

            case "←":
                let buffer = CalcScreen.innerText;

                if (buffer.length === 0) {
                    return;
                } else if (buffer.length === 1 || buffer == "Error") {
                    buffer = "0";
                } else {
                    let count = [...buffer];
                    count.splice(-1, 1);
                    buffer = count.join("");
                }
                CalcScreen.innerText = buffer;
                break;

            case "+":
                lastSymbol = CalcScreen.innerText.slice(-1);
                if (!isNaN(lastSymbol)) {
                    CalcScreen.innerText += "+";
                } else {
                    CalcScreen.innerText = CalcScreen.innerText.slice(0, -1) + "+";
                }
                break;

            case "-":
                lastSymbol = CalcScreen.innerText.slice(-1);
                if (!isNaN(lastSymbol)) {
                    CalcScreen.innerText += "-";
                } else {
                    CalcScreen.innerText = CalcScreen.innerText.slice(0, -1) + "-";
                }
                break;

            case "÷":
                lastSymbol = CalcScreen.innerText.slice(-1);
                if (!isNaN(lastSymbol)) {
                    CalcScreen.innerText += "÷";
                } else {
                    CalcScreen.innerText = CalcScreen.innerText.slice(0, -1) + "÷";
                }
                break;

            case "*":
                lastSymbol = CalcScreen.innerText.slice(-1);
                if (!isNaN(lastSymbol)) {
                    CalcScreen.innerText += "*";
                } else {
                    CalcScreen.innerText = CalcScreen.innerText.slice(0, -1) + "*";
                }
                break;
                
            case "=":
                try {
                    let result = CalcScreen.innerText.replace(/÷/g, "/");
                    result = eval(result);
                    if (!isNaN(result)) {
                        CalcScreen.innerText = result;
                    } else {
                        CalcScreen.innerText = "0";
                    }
                } catch (e) {
                    const calcScreenInterval = setInterval(() => {
                    CalcScreen.innerText = "Error";
                    }, 1);

                    setTimeout(() => {
                        CalcScreen.innerText = "0";
                        clearInterval(calcScreenInterval);
                    }, 5000);
                }
                break;

            case "9":
                previousNum = "9";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;

            case "8":
                previousNum = "8";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;

            case "7":
                previousNum = "7";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;

            case "6":
                previousNum = "6";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;

            case "5":
                previousNum = "5";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;

            case "4":
                previousNum = "4";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;

            case "3":
                previousNum = "3";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;

            case "2":
                previousNum = "2";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;

            case "1":
                previousNum = "1";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;

            case "0":
                previousNum = "0";
                if (CalcScreen.innerText === "0") {
                    CalcScreen.innerText = previousNum;
                } else {
                    CalcScreen.innerText += previousNum;
                }
                break;
        }
}});



