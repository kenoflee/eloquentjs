const Group = require('./groups');

test('make sure Group.from is returning new Group', () => {
    const values = [10, 20];
    const group = Group.from(values);

    for(let i = 0; i < values.length; i++) {
        expect(group.values[i]).toBe(values[i]);
    }
});

test('throw error when array is not a parameter', () => {
    console.error = jest.fn();
    const group = Group.from(10);
    expect(console.error).toHaveBeenCalledWith('Please enter an Array as the parameter');
});

test('append 10 to the group and test the "has" method', () => {
    const group = Group.from([1, 2, 3]);
    group.add(99);
    expect(group.values[group.values.length - 1]).toBe(99);
    expect(group.has(99)).toBe(true);
    expect(group.has(-1)).toBe(false);
});

test('remove al1 10s from the Group', () => {
    const group = Group.from([1, 2, 3, 10, 10, 9]);
    group.delete(10);
    expect(group.has(10)).toBe(false);
});