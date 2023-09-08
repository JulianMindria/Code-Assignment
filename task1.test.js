const sorting = require("./task1")

describe("define sorting", () => {
    test('sorting should result [25, 21, 6, 3, 2, 1]', () => {
      expect(sorting).toEqual([25, 21, 6, 3, 2, 1]);
    });
});