/* 
Write a function deepEqual that takes two values and returns true only if they are the same value or 
are objects with the same properties, where the values of the properties are equal when compared with a 
recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) 
or have their properties compared, you can use the typeof operator. 
If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: because of a historical accident, 
typeof null also produces "object".
*/

let o1 = {
    object: 2,
    here: {
        is: "an"
    }, 
    
};

let o2 = {
    here: 1, 
    object: 2
}


const deepEqual = (obj1, obj2) => {
    const bothAreObjects = (obj1 !== null && 
                            obj2 !== null && 
                            typeof obj1 === 'object' && 
                            typeof obj2 === 'object');

    if(bothAreObjects) {
        const obj1Keys = Object.keys(obj1);
        const obj2Keys = Object.keys(obj2);
    }
}

deepEqual(o1, o2);
//deepEqual({}, {});
//deepEqual(null, null);