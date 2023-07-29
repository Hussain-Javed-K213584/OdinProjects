console.log("script executed");
const calculatorDisplay = document.querySelector(".display");
const calculatorButtons = document.querySelectorAll(".calc-btns");
calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.classList[1])
        {
            case "clear-btn":
                clearDisplay();
                break;
            case "divide-btn":
            case "sub-btn":
                console.log("subtraction");
            case "multiply-btn":
            case "add-btn":
            case "equal-btn":
            default:
                calculatorDisplay.textContent += button.textContent;

        }
    });
});

// Clear the display
function clearDisplay(){
    calculatorDisplay.textContent = "";
}