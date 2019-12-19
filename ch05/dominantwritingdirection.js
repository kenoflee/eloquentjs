/* 
    Write a function that computes the dominant writing direction in a string of text. 
    Remember that each script object has a direction property that can be "ltr" (left to right), 
    "rtl" (right to left), or "ttb" (top to bottom).

    The dominant direction is the direction of a majority of the characters that have a script associated with them. 
    The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/

//characterScript and countBy definition provided by eloquentjs

const SCRIPTS = require('./SCRIPTS');

// characterScript(121)
// → {name: "Latin", …}
const characterScript = (code) => {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
                return code >= from && code < to;
            })) {
            return script;
        }
    }
    return null;
}

// countBy([1, 2, 3, 4, 5], n => n > 2)
// → [{name: false, count: 2}, {name: true, count: 3}]
const countBy = (items, groupName) => {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({
                name,
                count: 1
            });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

// "Hey, مساء الخير"
// → "rtl"
const dominantDirection = (text) => {
    //split the text to array
    //each character has a code. iterate them into characterScript, get the result back
    //group the result by direction value "ltr, rtl, ttb"

    const scripts = [];

    for(let i = 0; i < text.length; i++) {
        scripts.push(characterScript(text.charCodeAt(i)));
    }

    //bypass the element that is null value
    const getDirection = (element) => {
        if(element) return element.direction;
    }

    const counts = countBy(scripts, getDirection);

    const dominant = {
        name: null,
        count: 0,
    };

    for(const direction of counts) {
        if(direction.count > dominant.count) {
            dominant.count = direction.count;
            dominant.name = direction.name;
        }
    }

    return dominant.name;
}

module.exports = dominantDirection;