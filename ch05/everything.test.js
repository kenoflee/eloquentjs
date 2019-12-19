const f = require('./everything');

test('every function using a loop works as intended', () => {
    expect(f.every([1, 3, 5], n => n < 10)).toBe(true);
    expect(f.every([1, 3, 5, 100], n => n < 10)).toBe(false);
    expect(f.every([], n => n < 10)).toBe(true);

    expect(f.everySome([1, 3, 5], n => n < 10)).toBe(true);
    expect(f.everySome([1, 3, 5, 100], n => n < 10)).toBe(false);
    expect(f.everySome([], n => n < 10)).toBe(true);
})