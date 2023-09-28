const Gameboard = require('../src/Gameboard');
const Ship = require('../src/Ship');

let gameboard = undefined;
beforeEach(() => {
    gameboard = new Gameboard();
})

describe('test placeShip method', () => {

    test('placeShip should place a ship at specific coordinates and should consider orientation', () => {
        const ship = new Ship(4);
        const row = 0;
        const col = 0;
        const isHorizontal = false;

        gameboard.placeShip(ship, row, col, isHorizontal);
        
        expect(gameboard.getShipAt(0, 0)).toBe(ship);
        expect(gameboard.getShipAt(1, 0)).toBe(ship);
        expect(gameboard.getShipAt(2, 0)).toBe(ship);
        expect(gameboard.getShipAt(3, 0)).toBe(ship);
        expect(gameboard.getShipAt(4, 0)).toBe(null);
        expect(gameboard.getShipAt(0, 1)).toBe(null);
    })

    test('placeShip should place a ship at specific coordinates and should consider orientation', () => {
        const ship = new Ship(4);
        const row = 0;
        const col = 0;
        const isHorizontal = true;

        gameboard.placeShip(ship, row, col, isHorizontal);
        
        expect(gameboard.getShipAt(0, 0)).toBe(ship);
        expect(gameboard.getShipAt(0, 1)).toBe(ship);
        expect(gameboard.getShipAt(0, 2)).toBe(ship);
        expect(gameboard.getShipAt(0, 3)).toBe(ship);
        expect(gameboard.getShipAt(0, 4)).toBe(null);
        expect(gameboard.getShipAt(1, 0)).toBe(null);
    })

    test('placeShip should throw error when ships overlap', () => {
        const carrier = new Ship(5);
        const submarine = new Ship(3);

        gameboard.placeShip(carrier, 0, 0, false); //5 rows of first column is now occupied
        expect(() => gameboard.placeShip(submarine, 0, 0, true)).toThrow();
        expect(() => gameboard.placeShip(submarine, 1, 0, true)).toThrow();
        expect(() => gameboard.placeShip(submarine, 2, 0, true)).toThrow();
        expect(() => gameboard.placeShip(submarine, 3, 0, true)).toThrow();
        expect(() => gameboard.placeShip(submarine, 4, 0, true)).toThrow();
        // expect(() => gameboard.placeShip(submarine, 5, 0, true)).toThrow(); //should fail
    })

    test('test placeShip for out of bounds for horizontal orientation', () => {
        const carrier = new Ship(5);

        expect(() => gameboard.placeShip(carrier, 0, -1, true)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 0, 10, true)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 0, 9, true)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 0, 8, true)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 0, 7, true)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 0, 6, true)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 0, 5, true)).not.toThrow('Out of bounds'); 
    })

    test('test placeShip for out of bounds for vertical orientation', () => {
        const carrier = new Ship(5);

        expect(() => gameboard.placeShip(carrier, -1, 0, false)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 10, 0, false)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 9, 0, false)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 8, 0, false)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 7, 0, false)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 6, 0, false)).toThrow('Out of bounds');
        expect(() => gameboard.placeShip(carrier, 5, 0, false)).not.toThrow('Out of bounds'); 
    })
})

describe('test receiveAttack method', () => {
    test('attack missed', () => {
        
        const patrolBoat = new Ship(2);
        gameboard.placeShip(patrolBoat, 0, 0, true);

        expect(gameboard.receiveAttack(0, 0)).not.toBe('Missed');
        expect(gameboard.receiveAttack(0, 1)).not.toBe('Missed');
        expect(gameboard.receiveAttack(0,2)).toBe('Missed');
        expect(gameboard.receiveAttack(1, 0)).toBe('Missed');
    })

    test('receiveAttack sends the hit function to the correct ship', () => {
        const battleship = new Ship(4);
        const submarine = new Ship(3);

        gameboard.placeShip(battleship, 1, 1, false);
        gameboard.placeShip(submarine, 8, 6, true);

        expect(battleship.getNumberOfHits()).toBe(0);
        expect(submarine.getNumberOfHits()).toBe(0);

        gameboard.receiveAttack(1, 1);
        gameboard.receiveAttack(4, 1);
        gameboard.receiveAttack(8, 7);
        gameboard.receiveAttack(3, 3); //missed
    
        expect(battleship.getNumberOfHits()).toBe(2);
        expect(submarine.getNumberOfHits()).toBe(1);
    })

    test('test receiveAttack for when ship is sunk', () => {
        const carrier = new Ship(5);

        gameboard.placeShip(carrier, 0, 0, true);
        
        expect(carrier.isSunk()).toBe(false);

        gameboard.receiveAttack(0, 0);
        gameboard.receiveAttack(0, 1);
        gameboard.receiveAttack(0, 2);
        gameboard.receiveAttack(0, 3);
        gameboard.receiveAttack(0, 4);

        expect(carrier.isSunk()).toBe(true);
    })
})
