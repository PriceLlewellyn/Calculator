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

//Logic for operations to be used
const calculate = document
    .querySelectorAll(".operations")
    .forEach(function (item) {
        item.addEventListener("click", function (e) {
            console.log(e.target.innerHTML);
        });
    });