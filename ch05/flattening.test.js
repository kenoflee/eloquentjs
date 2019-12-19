const flatten = require('./flattening');

test('introducing array of [[1, 2, 3], [4, 5], [6]] will return flattened value', () => {
    const arrays = [[1, 2, 3], [4, 5], [6]];
    const result = [1, 2, 3, 4, 5, 6];
    const flattened = flatten(arrays);

    for(let i = 0; i < result.length; i++) {
        expect(result[i]).toBe(flattened[i]);
    }

});