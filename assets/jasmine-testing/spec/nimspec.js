describe("Nim Game", function() {

describe("Checks Easy Nim game has code", function() {
    it("should exist", function() {
        expect(increaseCountersTaken).toBeDefined();
    });
});

describe("Checks Easy Nim Game increases Nims taken by 1", function() {
    it("should increase nimstaken from 0 to 1", function() {
        var result = increaseCountersTaken(0);
        
        expect(result).toBe(1);
    });
});


});