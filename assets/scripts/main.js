const buttons = document.querySelectorAll(".calc-row-btn");
const CalcDisplay= document.getElementById("calc-screen-inner")


let lastCount = CalcDisplay.innerText.slice(-1);


document.addEventListener("keydown", (evt) => {
    evt.preventDefault();
    let symbol;
        switch (evt.key) {
            case "Enter":
                symbol = "="               
                buttons.forEach(button => {
                    if (button.textContent === symbol) {
                        button.classList.add("active");
                        countNumbers(symbol);

                    setTimeout(() => {
                        button.classList.remove("active");
                    }, 500)}});
                    
                    break;
            case "Backspace":
                symbol = "←"                
                buttons.forEach(button => {
                    if (button.textContent === symbol) {
                        button.classList.add("active");
                        countNumbers(symbol);

                    setTimeout(() => {
                        button.classList.remove("active");
                    }, 500)}});
                    
                    break;
            case "Delete":
                symbol = "C"       

                buttons.forEach(button => {
                    if (button.textContent === symbol) {
                        button.classList.add("active");
                        countNumbers(symbol);

                    setTimeout(() => {
                        button.classList.remove("active");
                    }, 500)}});
                    
                    break;
            case "c":
                symbol = "C"       

                buttons.forEach(button => {
                    if (button.textContent === symbol) {
                        button.classList.add("active");
                        countNumbers(symbol);

                    setTimeout(() => {
                        button.classList.remove("active");
                    }, 500)}});
                    
                    break;
            case "C":
                symbol = "C"       

                buttons.forEach(button => {
                    if (button.textContent === symbol) {
                        button.classList.add("active");
                        countNumbers(symbol);

                    setTimeout(() => {
                        button.classList.remove("active");
                    }, 500)}});
                    
                    break;
            case "/":
                symbol = "÷";           
                
                buttons.forEach(button => {
                    if (button.textContent === symbol) {
                        button.classList.add("active");
                        countNumbers(symbol);

                    setTimeout(() => {
                        button.classList.remove("active");
                    }, 500)}});
                    
                    break;
            default:
                symbol = evt.key
                buttons.forEach(button => {
                    if (button.textContent === symbol) {
                        button.classList.add("active");
                        countNumbers(symbol);

                    setTimeout(() => {
                        button.classList.remove("active");
                    }, 500)}});
                    
                    break;
}})


function countNumbers (variable) {
    switch (variable) {
            case "C":
                CalcScreen.innerText = "0";
                break;

            case "←":
                let buffer = CalcScreen.innerText;
                
                if (buffer.length === 0 || buffer == "Error") {
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
                lastCount = CalcScreen.innerText.slice(-1);
                if (!isNaN(lastCount)) {
                    CalcScreen.innerText += "+";
                } else {
                    CalcScreen.innerText = CalcScreen.innerText.slice(0, -1) + "+";
                }
                break;

            case "-":
                lastCount = CalcScreen.innerText.slice(-1);
                if (!isNaN(lastCount)) {
                    CalcScreen.innerText += "-";
                } else {
                    CalcScreen.innerText = CalcScreen.innerText.slice(0, -1) + "-";
                }
                break;

            case "÷":
                lastCount = CalcScreen.innerText.slice(-1);
                if (!isNaN(lastCount)) {
                    CalcScreen.innerText += "÷";
                } else {
                    CalcScreen.innerText = CalcScreen.innerText.slice(0, -1) + "÷";
                }
                break;

            case "*":
                lastCount = CalcScreen.innerText.slice(-1);
                if (!isNaN(lastCount)) {
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
};