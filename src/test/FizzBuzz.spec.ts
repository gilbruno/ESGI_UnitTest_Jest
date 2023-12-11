import { FizzBuzz } from "../app/tdd/FizzBuzz"

describe("FizzBuzz Test", () => {

    let fizzBuzz: FizzBuzz

    beforeEach(() => {
        fizzBuzz = new FizzBuzz()
    })

    it("should return 1 if 1 is passed", () => {
        const generatedNumber = fizzBuzz.generate()
        expect(generatedNumber).toEqual(1)
    })

    it("should return 2 if 2 is passed", () => {
        const generatedNumber = fizzBuzz.generate()
        expect(generatedNumber).toEqual(2)
    })

})

