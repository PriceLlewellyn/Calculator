const inputValue = document.getElementById("user-input")

//Logic for numbers to concatenate on the screen
const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN") {
            inputValue.innerText = "";
        }
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

//Logic for operations to be used all in one event
document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const operator = e.target.innerHTML.trim();
        const currentText = inputValue.innerText;
        const lastChar = currentText[currentText.length1];

        if (operator === "=") {
            try {
                inputValue.innerText = eval(currentText);
            } catch {
                inputValue.innerHTML = "NaN";
            }
        } else if (operator == "AC") {
            inputValue.innerText = "0";
        } else if (operator == "DEL") {
            let newText = currentText.slice(0 -1);
            inputValue.innerText = newText || "0";
        } else {
            if (["+","-","*","/"]. includes(lastChar)) {
                inputValue.innerText = currentText.slice(0, -1) + operator;
            } else {
                inputValue.innerText += operator;
            }
        }
    });
});

