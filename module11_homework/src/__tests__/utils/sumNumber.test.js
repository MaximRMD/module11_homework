import { sum } from "../../utils/sumNumber.js";

describe("tests for isPrime function", () => {
    let x = 3;
    let n = 5;

    it("invalid sum", () => {
        expect(sum(x, n)).toBe(15);
    });
});