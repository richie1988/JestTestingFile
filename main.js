function stringLength(string) {
    const length = string.length;

    if (length > 10) {
        throw new Error('String must not exceed 10 characters.');
    }

    return length;
}

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero.');
        }
        return a / b;
    }
}

module.exports = {
    stringLength: stringLength,
    Calculator: Calculator
};