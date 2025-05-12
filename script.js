function operate(operator, num1, num2) {
    let answer;

    switch (operator) {

        case '+':
            answer = num1 + num2;
            break;

        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
    }

}

console.log(operate('*',6,5));