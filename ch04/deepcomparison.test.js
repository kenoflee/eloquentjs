const deepEqual = require('./deepcomparison');

test('two null values should equal to eachother', () => {
    expect(deepEqual(null, null)).toBe(true);
});

test('null and object value is not equal to eachother', () => {
    const obj = { here: 1, object: 2 };
    expect(deepEqual(null, obj)).toBe(false);
});

test('objects with different values should return false', () => {
    const obj1 = { here: 1, object: 2 };
    const obj2 = {
        object: 2,
        here: {
            is: "an"
        }, 
        
    };

    expect(deepEqual(obj1, obj2)).toBe(false);
});

test('two objects with equal values should return true', () => {
    const obj1 = {
        object: 2,
        here: {
            is: "an"
        }, 
        
    };

    const obj2 = {
        object: 2,
        here: {
            is: "an"
        }, 
        
    };

    expect(deepEqual(obj1, obj2)).toBe(true);
});
