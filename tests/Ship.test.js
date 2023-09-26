const Ship = require('./Ship');

test('check ship has length property', () => {
    expect(new Ship(5)).toHaveProperty('length');
})
test('check length property is correctly initialized', () => {
    expect((new Ship(4)).length).toBe(4);
})