import { getPercent } from "../../utils/percentFunc.js";

describe("tests for getPercent function", () => {
    const number = 500;
    const percent = 50;
    const percNotValue = 104;

    it("should operate correctly with simple, complex and invalid number", () => {
        expect(getPercent(number, percent)).toBe(250);
        expect(getPercent(number, percNotValue)).toBe("данные неверны");
    });
});