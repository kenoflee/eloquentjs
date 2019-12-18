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

test('prepending a value to a list brings expected result', () => {
    const list = {value: 10, rest: {value: 20, rest: null}};
    const result = {value: -1, rest: {value: 10, rest: {value: 20, rest: null}}};
    const listToResult = f.prepend(-1, list);
    expect(listToResult.toString()).toBe(result.toString());
});

test('nth with proper postion value will return the element', () => {
    const list = {value: 10, rest: {value: 20, rest: null}};
    expect(f.nth(list, 0)).toBe(10);
    expect(f.nthRecursive(list, 1)).toBe(20);
});

test('nth with postion value of -1 will return null', () => {
    const list = {value: 10, rest: {value: 20, rest: null}};
    expect(f.nth(list, -1)).toBe(null);
    expect(f.nthRecursive(list, -1)).toBe(null);
});

test('nth with postion with out-of-range value will return null', () => {
    const list = {value: 10, rest: {value: 20, rest: null}};
    expect(f.nth(list, 5)).toBe(null);
    expect(f.nthRecursive(list, 5)).toBe(null);
});