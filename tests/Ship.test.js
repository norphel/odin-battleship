const Ship = require('./Ship');

let ship = undefined;
beforeEach( () => {
    ship = new Ship(5)
})

describe('check ship has required properties and methods', () => {

    test('check ship has length property with correct value', () => {
        expect(ship).toHaveProperty('length', 5);
    })

    test('check ship has noOfTimesHit property with value 0 initially', () => {
        expect(ship).toHaveProperty('noOfTimesHit', 0)
    })

    test('check ship has sunk property with value false initially', () => {
        expect(ship).toHaveProperty('sunk', false)
    })

    test('check ship has hit method', () => {
        expect(ship).toHaveProperty('hit')
    })

    test('check ship has isSunk method', () => {
        expect(ship).toHaveProperty('isSunk')
    })
})