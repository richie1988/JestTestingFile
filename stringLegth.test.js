const reverseString = require('./stringLength');

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});
