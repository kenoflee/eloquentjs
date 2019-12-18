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

const deepEqual = (obj1, obj2) => {
    if(obj1 === null && obj1 !== obj2) {
        return false;
    } else if(obj1 === null && obj1 === obj2) {
        //if both values are null, do nothing and proceed
    } else {
        const bothAreObjects = (object1, object2) => (object1 !== null && 
            object2 !== null && 
            typeof object1 === 'object' && 
            typeof object2 === 'object');

        const objKeys1 = Object.keys(obj1);
        const objKeys2 = Object.keys(obj2);

        if(objKeys1.length !== objKeys2.length) return false;

        for(let i = 0; i < objKeys1.length; i++) {
            if(bothAreObjects(obj1[objKeys1[i]], obj2[objKeys1[i]])) {
                deepEqual(obj1[objKeys1[i]], obj2[objKeys1[i]]);
            } else if(obj1[objKeys1[i]] !== obj2[objKeys1[i]]) {
                return false;
            }
        }
    }

    //if no false is detected, then return true
    return true;
}

module.exports = deepEqual;