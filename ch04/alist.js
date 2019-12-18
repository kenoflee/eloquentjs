/* 
    Write a function arrayToList that builds up a list structure 
    like the one shown when given [1, 2, 3] as argument. 
    
    Also write a listToArray function that produces an array from a list. 

    Then add a helper function prepend, which takes an element and a list 
    and creates a new list that adds the element to the front of the input list, 
    and nth, which takes a list and a number and returns the element at the given 
    position in the list (with zero referring to the first element) or undefined 
    when there is no such element.

    If you haven’t already, also write a recursive version of nth
*/

const f = {
    //array = [10, 20]
    //returns {value: 10, rest: {value: 20, rest: null}}
    arrayToList: (array) => {
        const reverse = array.reverse();
        let list = {value: reverse[0], rest: null};
        for(let i = 0; i < reverse.length; i++) {
            if(i === 0) continue;
            list = {value: reverse[i], rest: list};
        }
        return list;
    },
    //list {value: 10, rest: {value: 20, rest: null}}
    //returns [10, 20]
    listToArray: (list) => {
        const array = [];
        const goIndepth = (list) => {
            array.push(list.value);
            if(!list.rest) {
                return;
            }
            goIndepth(list.rest);
        }
        goIndepth(list);
        return array;
    },
    //element: -1
    //list: (value: 10, rest: {value: 20, rest: null}}
    //returns {value: -1, rest: (value: 10, rest: {value: 20, rest: null}}}
    prepend: (element, list) => ({value: element, rest: list}),
    //list: (value: 10, rest: {value: 20, rest: null}}
    //position: 0
    //returns 10
    nth: (list, position) => {
        for(let i = 0; i < position; i++) {
            list = list.rest;
        }
    },
    nthRecursive: (list, position) => {
        const goIndepth = (list, depth) => {
            if(position === depth) {
                return list.value;
            }
            return goIndepth(list.rest, depth + 1);
        }
        return goIndepth(list, 0);
    }
}

module.exports = f;