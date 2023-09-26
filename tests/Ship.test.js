const Ship = require('./Ship');

let ship = undefined;
beforeEach( () => {
    ship = new Ship(5)
})

//probably redundant but let's keep for now
describe('check ship has required properties and methods', () => {

    test('check ship has length property with correct value', () => {
        expect(ship).toHaveProperty('length', 5);
    })

    test('check ship has numberOfTimesHit property with value 0 initially', () => {
        expect(ship).toHaveProperty('numberOfTimesHit', 0)
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

describe('test hit method', () => {
    test('hit method increments numberOfTimesHit property', () => {
        ship.hit();
        expect(ship.numberOfTimesHit).toBe(1)
    })
    test('hit method increments numberOfTimesHit property multiple times when hit called multiple times', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.numberOfTimesHit).toBe(3)
    })
    test('when ship is hit equal to or greater than its length it should sink', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.sunk).toBe(true)
    })
})

describe('test isSunk method', () => {
    test('isSunk should return false initially', () => {
        expect(ship.isSunk()).toBe(false)
    })
    test('isSunk should return false when numberOfTimesHit is less than length of ship', () => {
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(false)
    })
    test('isSunk should return true when numberOfTimesHit is equal to length of ship', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true)
    })
    test('isSunk should return true when numberOfTimesHit is greater than length of ship', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true)
    })
})