(function () {

  "use strict"

  describe("jasmine testing", function () {
    it("can pass a test", function () {
      expect(1).toBe(1);
    });
  });


  describe("Reversing Factorials function", function functionName() {
    it("can return 0 when passed 1", function () {
      expect(reverseFactorial(0)).toBe(1);
    });
    it("can return 1! when passed 1", function () {
      expect(reverseFactorial(1)).toBe(1);
    });
    it("can return 2! when passed 2", function () {
      expect(reverseFactorial(2)).toBe(2);
    });
    it("can return 3! when passed 6", function () {
      expect(reverseFactorial(6)).toBe(3);
    });
    it("can return 4! when passed 24", function () {
      expect(reverseFactorial(24)).toBe(4);
    });
    it("can return 5! when passed 120", function () {
      expect(reverseFactorial(120)).toBe(5);
    });
    it("can return NONE when passed 3", function () {
      expect(reverseFactorial(3)).toBe("NONE");
    });
    it("can return NONE when passed 4", function () {
      expect(reverseFactorial(4)).toBe("NONE");
    });
    it("can return NONE when passed 18", function () {
      expect(reverseFactorial(18)).toBe("NONE");
    });
    it("can return 10 when passed 3628800", function () {
      expect(reverseFactorial(3628800)).toBe(10);
    });
    it("can return 12 when passed 479001600", function () {
      expect(reverseFactorial(479001600)).toBe(12);
    });



  });


}());
