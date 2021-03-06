const Vec = require('./vector');

test('Vec is successfully imported', () => {
    const vec = new Vec(1, 2);
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(2);
});

test('Vec successfully returns new Vec with plus method', () => {
    const vec = new Vec(3, 4);
    const vec2 = new Vec(1, 2);
    const newVec = vec.plus(vec2);

    expect(newVec.x).toBe(vec.x + vec2.x);
    expect(newVec.y).toBe(vec.y + vec2.y);

    expect(vec.x).not.toBe(newVec.x);
    expect(vec.y).not.toBe(newVec.y);
});

test('Vec successfully returns new Vec with minus method', () => {
    const vec = new Vec(3, 4);
    const vec2 = new Vec(1, 2);
    const newVec = vec.minus(vec2);

    expect(newVec.x).toBe(vec.x - vec2.x);
    expect(newVec.y).toBe(vec.y - vec2.y);

    expect(vec.x).not.toBe(newVec.x);
    expect(vec.y).not.toBe(newVec.y);
});

test('Vec successfully returns number of distance from origin', () => {
    const vec = new Vec(3, 4);
    expect(vec.distanceFromOrigin).toBe(5);
});