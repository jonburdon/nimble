describe("Nim Game", function() {

describe("Checks increaseCountersTaken has code", function() {
    it("should exist", function() {
        expect(increaseCountersTaken).toBeDefined();
    });
});

describe("Checks increaseCountersTaken increases Nims taken by 1", function() {
    it("should increase counters from 0 to 1", function() {
        var result = increaseCountersTaken(0);
        expect(result).toBe(1);
    });
});


describe("Checks decreaseOverallCounters has code", function() {
    it("should exist", function() {
        expect(decreaseOverallCounters).toBeDefined();
    });
});

describe("Checks decreaseOverallCounters increases Nims taken by 1", function() {
    it("should decrease value from by one", function() {
        var result = decreaseOverallCounters(21);
        expect(result).toBe(20);
    });
});

describe("Checks decideToPassTurn has code", function() {
    it("should exist", function() {
        expect(decreaseOverallCounters).toBeDefined();
    });
});

describe("Checks decideToPassTurn increases ", function() {
    it("should decrease value from by one", function() {
        var result = decreaseOverallCounters(21);
        expect(result).toBe(20);
    });
});

describe("Checks reportScore has code", function() {
    it("should exist", function() {
        expect(reportScore).toBeDefined();
    });
});

describe("Checks checkPassTurn has code", function() {
    it("should exist", function() {
        expect(checkPassTurn).toBeDefined();
    });
});

describe("Checks checkPassTurn has code", function() {
    it("should return true if given a value of 3", function() {
        var result = checkPassTurn(3);
        expect(result).toBe(true);
    });
});

});