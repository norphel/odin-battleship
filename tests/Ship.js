class Ship {
    constructor(length) {
        this.length = length;
        this.numberOfTimesHit = 0;
        this.sunk = false;
    }
    hit() {
        this.numberOfTimesHit += 1;
        if (this.numberOfTimesHit >= this.length) {
            this.sunk = true
        }
    }
    isSunk() {
        return this.numberOfTimesHit >= this.length ? true : false;
    }
}
module.exports = Ship;