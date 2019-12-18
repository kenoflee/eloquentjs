const f = require('./alist');

test('convert array [10, 20] to {value: 10, rest: {value: 20, rest: null}}', () => {
    const original = {value: 10, rest: {value: 20, rest: null}}
    const list = f.arrayToList([10, 20]);
    expect(original.toString()).toBe(list.toString());
});

test('convert list {value: 10, rest: {value: 20, rest: null}} to [10, 20]', () => {
    const list = {value: 10, rest: {value: 20, rest: null}};
    const array = f.listToArray(list);
    expect(array.toString()).toBe([10, 20].toString());
});

test('prepend', () => {

});