const f = require('./reversearray');

test('reverseArray creates a new array with reversed orders', () => {
    const array = [1,2,3,4,5];
    const newArray = f.reverseArray(array);

    //convert to string because array is being compared by address
    expect(array.toString()).not.toBe(newArray.toString());
    expect(array.toString()).toBe(newArray.reverse().toString());
});


test('reverseArrayinPlace overwrites the origina value to a reversed order', () => {
    const array = [1,2,3,4,5];
    const firstElement = array[0];
    const lastElement = array[array.length - 1];
    f.reverseArrayInPlace(array);

    const newFirstElement = array[0];
    const newLastElement = array[array.length - 1];
    
    expect(firstElement).not.toBe(newFirstElement);
    expect(lastElement).not.toBe(newLastElement);

    expect(firstElement).toBe(newLastElement);
    expect(lastElement).toBe(newFirstElement);
});