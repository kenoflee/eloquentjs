const f = require('./everything');

test('test', () => {
    expect(f.every()).toBe(true);
    expect(f.everySome()).toBe(true);
})