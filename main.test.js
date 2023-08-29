const { stringLength, Calculator } = require('./main.js');

describe('stringLength', () => {
    test('returns correct length of string', () => {
        expect(stringLength('hello')).toBe(5);
        expect(stringLength('')).toBe(0);
    });

    test('throws error for string exceeding 10 characters', () => {
        expect(() => {
            stringLength('this is a very long string');
        }).toThrow('String must not exceed 10 characters.');
    });
});

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });
    
        test('adds a positive and a negative number', () => {
            expect(calculator.add(5, -3)).toBe(2);
        });
    
        test('adds two negative numbers', () => {
            expect(calculator.add(-7, -3)).toBe(-10);
        });
    });

    describe('subtract', () => {
        // Add test cases for subtract method
        test('subtracts two positive numbers', () => {
            expect(calculator.subtract(8, 3)).toBe(5);
        });
    
        test('subtracts a positive and a negative number', () => {
            expect(calculator.subtract(5, -3)).toBe(8);
        });
    
        test('subtracts two negative numbers', () => {
            expect(calculator.subtract(-7, -3)).toBe(-4);
        });
        
    });

    describe('multiply', () => {
        // Add test cases for multiply method
        test('multiplies two positive numbers', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });
    
        test('multiplies a positive and a negative number', () => {
            expect(calculator.multiply(5, -3)).toBe(-15);
        });
    
        test('multiplies two negative numbers', () => {
            expect(calculator.multiply(-7, -3)).toBe(21);
        });
    });

    describe('divide', () => {
        // Add test cases for divide method
        test('divides two positive numbers', () => {
            expect(calculator.divide(10, 2)).toBe(5);
        });
    
        test('divides a positive number by a negative number', () => {
            expect(calculator.divide(15, -3)).toBe(-5);
        });
    
        test('throws an error when dividing by zero', () => {
            expect(() => {
                calculator.divide(10, 0);
            }).toThrow('Cannot divide by zero.');
        });
    });
});