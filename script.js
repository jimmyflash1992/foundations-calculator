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

    return answer;

}

console.log((operate('/',6,5)));