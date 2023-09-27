class Ship {
    constructor(length) {
        let _length = length;
        let _numberOfTimesHit = 0;
        let _sunk = false;
    
        this.hit = function() {
            _numberOfTimesHit += 1;
            if (_numberOfTimesHit >= _length) {
                _sunk = true
            }
        };
        this.isSunk = function() {
            return _numberOfTimesHit >= _length;
        };
        this.getNumberOfHits = function() {
            return _numberOfTimesHit;
        };
        this.getLength = function() {
            return _length;
        }
    }
}
module.exports = Ship;