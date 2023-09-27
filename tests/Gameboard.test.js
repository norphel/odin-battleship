const Gameboard = require('../src/Gameboard');
const Ship = require('../src/Ship');

let gameboard = undefined;
beforeEach(() => {
    gameboard = new Gameboard();
})

describe('test placeShip method', () => {
    test('placeShip should place a ship at specific coordinates', () => {
        const ship = new Ship(4);
        const row = 0;
        const col = 0;

        gameboard.placeShip(ship, row, col);
        
        expect(gameboard.getShipAt(0, 0)).toBe(ship);
    })
})
