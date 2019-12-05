const triangle = require('./looptriangle');

let outputData = "";
const storeLog = (inputs) => outputData + inputs;

test('print triangles base of 2', () => {
    const printArray = [];
    //expect(triangle(2)).toBe(undefined);
    console["log"] = jest.fn(storeLog);
    console.log(console["log"])
    //expect(outputData).toBe("#");
})