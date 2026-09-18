const display = document.getElementById("display");
const buttons = document.querySelectorAll("[data-value]");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.dataset.value;
    });
});

clearButton.addEventListener("click", () => {
    display.value = "";
});

deleteButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

equalsButton.addEventListener("click", () => {
    if (display.value === "") {
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});