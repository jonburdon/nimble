describe("Nim Game", function() {

describe("Checks Easy Nim game has code", function() {
    it("should exist", function() {
        expect(easyNimGame).toBeDefined();
    });
});

describe("Checks Easy Nim Game increases Nims taken by 1", function() {
    it("should increase nimstaken from 0 to 1", function() {
        easyNimGame();
        var result = nimstaken;
        expect(result).toBe(1);
    });
});


});