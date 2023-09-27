const Gameboard = require('../src/Gameboard');
const Ship = require('../src/Ship');

let gameboard = undefined;
beforeEach(() => {
    gameboard = new Gameboard();
})

describe('test placeShip method', () => {
    // test('placeShip should place a ship at specific coordinates', () => {
    //     const ship = new Ship(4);
    //     const row = 0;
    //     const col = 0;

    //     gameboard.placeShip(ship, row, col);
    //     console.log(gameboard.getBoard())
    //     expect(gameboard.getShipAt(0, 0)).toBe(ship);
    // })

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
})