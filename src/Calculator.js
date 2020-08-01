"use strict";

// https://www.codewars.com/kata/5235c913397cbf2508000048/train/javascript

const Calculator = function() {
    this.evaluate = string => {
        const arr = string.split(" ");
        return evaluateExpression(arr);
    }
};

function evaluateExpression(arr) {
    while (arr.indexOf("(") !== -1) {
        const firstParenIndex = arr.indexOf("(");
        const secondParenIndex = arr.indexOf(")");
        const lengthOfParenthentical = secondParenIndex - firstParenIndex;
        arr.splice(firstParenIndex, lengthOfParenthentical, evaluateExpression(arr.slice(firstParenIndex, secondParenIndex)));
    }
    while (arr.indexOf("*") !== -1 || arr.indexOf("/") !== -1) {
        const operandIndex = (arr.indexOf("*") !== -1 && arr.indexOf("/") !== -1)
            ? Math.min(arr.indexOf("*"), arr.indexOf("/"))
            : Math.max(arr.indexOf("*"), arr.indexOf("/"));
        const expression = arr.slice(operandIndex - 1, operandIndex + 2);
        const reducedExpression = (arr[operandIndex] === "*")
            ? multiplyExpression(expression)
            : divideExpression(expression);
        arr.splice(operandIndex - 1, 3, reducedExpression);
    }
    while (arr.length > 1) {
        let expression = arr.slice(0, 3);
        let reducedExpression = (arr[1] === "+") ? addExpression(expression) : subtractExpression(expression);
        arr.splice(0, 3, reducedExpression);
    }
    return +arr[0];
  }

function multiplyExpression(arr) {
    return +arr[0] * +arr[2];
}

function divideExpression(arr) {
    return +arr[0] / +arr[2];
}

function addExpression(arr) {
    return +arr[0] + +arr[2];
}

function subtractExpression(arr) {
    return +arr[0] - +arr[2];
}

var calculate = new Calculator();
console.log(calculate.evaluate('2 / 2 + 3 * 4 - 6'));