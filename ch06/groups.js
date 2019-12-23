/* 
    Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. 
    Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), 
    delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating 
    whether its argument is a member of the group.

    Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

    Give the class a static from method that takes an iterable object as argument and creates a group that 
    contains all the values produced by iterating over it.
*/

class Group {
    constructor() {
        this.values = [];
    }

    static from(values) {
        if(!(values instanceof Array)) {
            console.error('Please enter an Array as the parameter');
            return;
        }

        let newGroup = new Group();
        newGroup.values = values;
        return newGroup;
    }

    has(value) {
        return this.values.indexOf(value) > -1 ? true : false;
    }

    add(value) {
        this.values.push(value);
    }

    delete(value) {
        this.values = this.values.filter( element => value !== element );
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.current = 0;
        this.group = group;
    }

    next() {
        if(this.current === this.group.values.length) return {done: true};
        const iteration = {value: this.group.values[this.current] , done: false};
        this.current++;
        return iteration;
    }
}

module.exports = Group;