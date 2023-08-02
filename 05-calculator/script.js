console.log("script executed");
const calculatorDisplay = document.querySelector(".display");
const calculatorButtons = document.querySelectorAll(".calc-btns");
let operandStack = [];
let operatorStack = [];
let operatorPrecedence = {
    "÷": 2,
    "×": 2,
    "+": 1,
    "−": 1
};
let expression = [];
let number = "";
calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operandStack.length == 1){
            expression.push(operandStack[0]);
            operandStack.pop();
        }
        switch(button.classList[1])
        {
            case "clear-btn":
                clearDisplay();
                break;
            case "equal-btn":
                expression.push(number);
                number = "";
                if(expression.includes('')){
                    expression.splice(expression.indexOf(''), 1);
                }
                evaluateExpression();
                break;
            case "add-btn":
            case "sub-btn":
            case "divide-btn":
            case "multiply-btn":
                expression.push(number);
                expression.push(button.innerText);
                number = "";
                calculatorDisplay.innerText += button.innerText;
                break;
            default:
                if (button.classList[1] == "dot" && number.indexOf(".") != -1){
                    break;
                }
                number += button.innerText;
                calculatorDisplay.innerText += button.innerText;
        }
    });
});

// Clear the display
function clearDisplay(){
    calculatorDisplay.innerText = "";
    number = "";
    operandStack = [];
}

function evaluationProcess(currentCharacter){
    /*
        This function pops two values from
        the operand stack, pops one operator
        from the operator stack and performs
        the evalutaion based on the switch cases
        provided
    */
    do{
        let num1 = parseFloat(operandStack.pop());
        let num2 = parseFloat(operandStack.pop());
        let operator = operatorStack.pop();
        let operationEvaluation = 0;
        switch(operator)
        {
            case "+":
                operationEvaluation = num2 + num1;
                operandStack.push(operationEvaluation);
                break;
            case "−":
                operationEvaluation = num2 - num1;
                operandStack.push(operationEvaluation);
                break;
            case "÷":
                operationEvaluation = num2 / num1;
                operandStack.push(operationEvaluation);
                break;
            case "×":
                operationEvaluation = num2 * num1;
                operandStack.push(operationEvaluation);
                break;
        }
    }while(operatorPrecedence[currentCharacter] > operatorStack[operatorStack.length - 1]
        || operatorStack.length != 0);
}

function evaluateExpression(){
    for (str of expression){
        switch(str)
        {
            case "+":
            case "−":
            case "÷":
            case "×":
                if (operatorStack.length == 0){
                    operatorStack.push(str);
                }
                else if (operatorStack.length){
                    // If current operator has higher or same precedence than the operator at top of stack, push current operator
                    if (operatorPrecedence[str] >= operatorPrecedence[operatorStack[operatorStack.length-1]]){
                        operatorStack.push(str);
                    }
                    // If current operator has lower precedence than the current operator at top of the stack, perform process
                    else if (operatorPrecedence[str] < operatorPrecedence[operatorStack[operatorStack.length-1]]){
                        evaluationProcess(str);
                        operatorStack.push(str);
                    }
                }
                break;
            default:
                operandStack.push(str);
        }
    }
    let i = 0;
    while(operatorStack.length != 0){
        evaluationProcess(operatorStack[i]);
        i++;
    }
    console.log(operandStack);
    calculatorDisplay.innerText = operandStack[0];
    expression = [];
    
}