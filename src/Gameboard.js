class Gameboard {
    constructor() {
        let _board = Array.from({length: 10}, () => Array(10).fill(null));

        this.placeShip = function(ship, row, col) {
            const shipLength = ship.getLength();

            for (let i = 0; i < shipLength; i++) {
                _board[row][col + i] = ship;
            }
        };

        this.getShipAt = function(row, col) {
            return _board[row][col];
        };
    }
}
module.exports = Gameboard;