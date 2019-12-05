const beancounting = require('./beancounting');

test('Counts every Bs in string', () => {
    const str = "BBBB";
    const count = beancounting(str);
    expect(count).toBe(4);
})

test('Counts specified character in a string', () => {
    const str = "ABBaaAaaCa";
    const count = beancounting(str, 'a');
    expect(count).toBe(5);
});