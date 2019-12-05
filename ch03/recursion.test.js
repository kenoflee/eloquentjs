const isEven = require('./recursion');

test('odd integer returns false', () => {
    const even = isEven(1);
    expect(even).toBe(false);
});

test('even integer returns true', () => {
    const even = isEven(2);
    expect(even).toBe(true);
});

test('decimal number returns null', () => {
    const integer = isEven(2.5);
    expect(integer).toBe(null);
});

test('negative number returns null', () => {
    const integer = isEven(-2.5);
    expect(integer).toBe(null);
});