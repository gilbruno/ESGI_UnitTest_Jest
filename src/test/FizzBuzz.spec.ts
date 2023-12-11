import { FizzBuzz } from "../app/tdd/FizzBuzz"

describe("FizzBuzz Test", () => {

    let fizzBuzz: FizzBuzz

    beforeEach(() => {
        fizzBuzz = new FizzBuzz()
    })

    it("should return 1 if 1 is passed", () => {
        const generatedNumber = fizzBuzz.generate(1)
        expect(generatedNumber).toEqual('1')
    })

    it("should return 2 if 2 is passed", () => {
        const generatedNumber = fizzBuzz.generate(2)
        expect(generatedNumber).toEqual('2')
    })

    it("should return 'Fizz' if 3 is passed", () => {
        const generatedNumber = fizzBuzz.generate(3)
        expect(generatedNumber).toEqual('Fizz')
    })

    it("should return 'Fizz' if 6 is passed", () => {
        const generatedNumber = fizzBuzz.generate(6)
        expect(generatedNumber).toEqual('Fizz')
    })

    it("should return 'Buzz' if 5 is passed", () => {
        const generatedNumber = fizzBuzz.generate(5)
        expect(generatedNumber).toEqual('Buzz')
    })

    it("should return 'Buzz' if 10 is passed", () => {
        const generatedNumber = fizzBuzz.generate(10)
        expect(generatedNumber).toEqual('Buzz')
    })

})


