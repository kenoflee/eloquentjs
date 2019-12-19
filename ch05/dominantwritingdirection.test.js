const dominantDirection = require('./dominantwritingdirection');

test('find writing direction of dominant english sentence', () => {
    expect(dominantDirection("Hey listen!")).toBe('ltr');
});

test('find writing direction of dominant arabic sentence', () => {
    expect(dominantDirection("Hey, مساء الخير")).toBe('rtl');
});

