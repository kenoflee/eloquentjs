const f = require('./loop');

test('console log decrementing value', () => {
    const condition = n => n > 0;
    const update = n => n - 1;

    console.log = jest.fn();
    f.loop(3, condition, update, console.log);

    expect(console.log).toHaveBeenCalledWith(3);
    expect(console.log).toHaveBeenCalledWith(2);
    expect(console.log).toHaveBeenCalledWith(1);
});

test('console log incrementing value from 0 to 2', () => {
    const condition = n => n < 3;
    const update = n => n + 1;

    console.log = jest.fn();
    f.loop(0, condition, update, console.log);

    expect(console.log).toHaveBeenCalledWith(0);
    expect(console.log).toHaveBeenCalledWith(1);
    expect(console.log).toHaveBeenCalledWith(2);
});