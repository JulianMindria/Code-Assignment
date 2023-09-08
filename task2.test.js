const subArray = require('./task2');

describe("sum of sub array", () => {
    test('subArray function with array value of [100, 200, 300, 400] and index of 2 should return "700"', () => {
      let arr = [100, 200, 300, 400];
      let index  = 2;
      expect(subArray(arr, index)).toBe(700);
    });

    test('subArray function with array value of [1, 4, 2, 10, 23, 3, 1, 0, 20] and index of 4 should return "39"', () => {
        let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
        let index  = 4;
        expect(subArray(arr, index)).toBe(39);
    });

    test('subArray function with array value of [-3, 4, 0, -2, 6, -1] and index of 2 should return "5"', () => {
        let arr = [-3, 4, 0, -2, 6, -1];
        let index  = 2;
        expect(subArray(arr, index)).toBe(5);
    });

});