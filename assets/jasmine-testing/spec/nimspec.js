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

describe("Checks checkPassTurn ", function() {
    it("should return true if given a value of 3", function() {
        var result = checkPassTurn(3);
        expect(result).toBe(true);
    });
});

describe("Checks checkPassTurn ", function() {
    it("should return false if given a value above 3", function() {
        var result = checkPassTurn(4);
        expect(result).toBe(false);
    });
});

describe("Checks checkPassTurn ", function() {
    it("should return false if given a value below 3", function() {
        var result = checkPassTurn(2);
        expect(result).toBe(false);
    });
});

describe("Checks switchPlayer has code", function() {
    it("should exist", function() {
        expect(switchPlayer).toBeDefined();
    });
});

describe("Checks switchPlayer toggles player from p1 to p2 ", function() {
    it("should return 2", function() {
        var result = switchPlayer(1);
        expect(result).toBe(2);
    });
});

describe("Checks switchPlayer toggles player from p2 to p1 ", function() {
    it("should return 1", function() {
        var result = switchPlayer(2);
        expect(result).toBe(1);
    });
});

describe("Checks checkForWin has code", function() {
    it("should exist", function() {
        expect(checkForWin).toBeDefined();
    });
});

describe("Checks switchPlayer toggles player from p2 to p1 ", function() {
    it("should return true", function() {
        var result = checkForWin(0);
        expect(result).toBe(true);
    });
});

describe("Checks respondToWin has code", function() {
    it("should exist", function() {
        expect(respondToWin).toBeDefined();
    });
});

});