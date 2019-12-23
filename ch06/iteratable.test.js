const Group = require('./groups');

test('Group is iterable', () => {
    const array = [1, 2, 3];
    const group = Group.from(array);
    for(let i = 0; i < group.length; i++) {
        expect(group[i]).toBe(array[i]);
    }
});