class Gameboard {
    constructor() {
        let _board = Array.from({length: 10}, () => Array(10).fill(null));

        this.getBoard = function() {
            return _board;
        };

        this.placeShip = function(ship, row, col, isHorizontal) {
            const shipLength = ship.getLength();

            if (this.isOverlapping(ship, row, col, isHorizontal)) {
                throw new Error('Overlapping');
            }

            if (isHorizontal) {
                for (let i = 0; i < shipLength; i++) {
                    _board[row][col + i] = ship;
                }
            } else {
                for (let i = 0; i < shipLength; i++) {
                    _board[row + i][col] = ship;
                }
            }
        };

        this.getShipAt = function(row, col) {
            return _board[row][col];
        };

        this.isOverlapping = function(ship, row, col, isHorizontal) {
            const shipLength = ship.getLength();
            
            if (isHorizontal) {
                for (let i = 0; i < shipLength; i++) {
                    if (_board[row][col + i] !== null) {
                        return true; 
                    }
                }
            } else {
                for (let i = 0; i < shipLength; i++) {
                    if (_board[row + i][col] !== null) {
                        return true;
                    }
                }
            }
            
            return false; 
        }

    }
}
module.exports = Gameboard;