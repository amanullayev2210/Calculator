const CalcScreen = document.getElementById("calc-screen-inner");
const Calcbuttons = document.querySelectorAll(".calc-btn");

let previousNum;


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
                } else if (buffer.length === 1) {
                    buffer = "0";
                } else {
                    let count = [...buffer];
                    count.splice(-1, 1);
                    buffer = count.join("");
                }
                CalcScreen.innerText = buffer;
                break;

            case "+":
                CalcScreen.innerText += "+";
                break;

            case "-":
                CalcScreen.innerText += "-";
                break;

            case "÷":
                CalcScreen.innerText += "÷";
                break;

            case "*":
                CalcScreen.innerText += "*";
                break;
            case "=":
                try {
                    let result = CalcScreen.innerText.replace(/÷/g, "/");
                    CalcScreen.innerText = eval(result);
                } catch (e) {
                    CalcScreen.innerText = "Error";
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



