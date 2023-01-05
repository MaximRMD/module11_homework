import { isPrime } from "../../utils/validNum.js";

describe("tests for isPrime function", () => {
    const hardNum = 543;
    const eazyNum = 7;
    const notValue = 1001;

    it("invalid numbers", () => {
        expect(isPrime(hardNum)).toBe("не простое число");
        expect(isPrime(eazyNum)).toBe("простое число");
        expect(isPrime(notValue)).toBe("данные неверны");
    });
});