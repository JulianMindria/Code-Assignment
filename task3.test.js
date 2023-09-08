const sumObject = require("./task3")

describe("sum of object", () => {
    test('first_input should return 6', () => {
        let first_input =
        {
          outer: 2,
          obj: {
            inner: 2,
            otherObj: {
              superInner: 2,
              notANumber: true,
              alsoNotANumber: "yup"
            }
          }
        }
      expect(sumObject(first_input)).toBe(6);
    });

    test('second_input should return 12', () => {
        let second_input = {
            a: 2,
            b: {b: 2, bb: {b: 3, bb: {b: 2}}},
            c: {c: {c: 2}, cc: 'ball', ccc: 5},
            d: 1,
            e: {e: {e: 4}, ee: 'car'}
          };
      expect(sumObject(second_input)).toBe(12);
    });
});