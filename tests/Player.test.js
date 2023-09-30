const Player = require('../src/Player');
const Gameboard = require('../src/Gameboard');
const Ship = require('../src/Ship');

let player = undefined;
let computer = undefined;

beforeEach(() => {
    const isComputer = true;
    player = new Player(!isComputer);
    computer = new Player(isComputer);
})

describe('test computer makes random plays', () => {
    test('computer makes random plays without repeating coordinates', () => {
        const playerGameboard = new Gameboard();
        const computerGameboard = new Gameboard();

        const carrier = new Ship(5);
        const submarine = new Ship(3);

        playerGameboard.placeShip(carrier, 1, 2, true);
        playerGameboard.placeShip(submarine, 0, 8, false);

        computerGameboard.placeShip(carrier, 4, 3, false);
        computerGameboard.placeShip(submarine, 1, 6, true);

        player.assignEnemyGameboard(computerGameboard);
        computer.assignEnemyGameboard(playerGameboard);

        computer.makeRandomAttack();
        computer.makeRandomAttack();
        computer.makeRandomAttack();
        computer.makeRandomAttack();

        // expect().toBe(true);
    })
})