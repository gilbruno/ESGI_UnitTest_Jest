import { FizzBuzz } from "../app/tdd/FizzBuzz"

describe("FizzBuzz Test", () => {

    let fizzBuzz: FizzBuzz

    beforeEach(() => {
        fizzBuzz = new FizzBuzz()
    })

    it("should return 1 if 1 is passed", () => {
        const generatedNumber = fizzBuzz.generate(1, 1)
        expect(generatedNumber).toEqual('1')
    })

    it("should return 2 if 2 is passed", () => {
        const generatedNumber = fizzBuzz.generate(2, 2)
        expect(generatedNumber).toEqual('2')
    })

    it("should return 'Fizz' if 3 is passed", () => {
        const generatedNumber = fizzBuzz.generate(3, 3)
        expect(generatedNumber).toEqual('Fizz')
    })

    it("should return 'Fizz' if 6 is passed", () => {
        const generatedNumber = fizzBuzz.generate(6, 6)
        expect(generatedNumber).toEqual('Fizz')
    })

    it("should return 'Buzz' if 5 is passed", () => {
        const generatedNumber = fizzBuzz.generate(5, 5)
        expect(generatedNumber).toEqual('Buzz')
    })

    it("should return 'Buzz' if 10 is passed", () => {
        const generatedNumber = fizzBuzz.generate(10, 10)
        expect(generatedNumber).toEqual('Buzz')
    })

    it("should return 'FizzBuzz' if 15 is passed", () => {
        const generatedNumber = fizzBuzz.generate(15, 15)
        expect(generatedNumber).toEqual('FizzBuzz')
    })

    it("should return 'FizzBuzz' if 30 is passed", () => {
        const generatedNumber = fizzBuzz.generate(30, 30)
        expect(generatedNumber).toEqual('FizzBuzz')
    })

    it("should return '12' if 1 and 2 are passed", () => {
        const generatedString = fizzBuzz.generate(1, 2)
        expect(generatedString).toEqual('12')
    })

    it("should return '12Fizz' if our interval is from 1 to 3", () => {
        const generatedString = fizzBuzz.generate(1, 3)
        expect(generatedString).toEqual('12Fizz')
    })

    it("should return '12Fizz4BuzzFizz' if our interval is from 1 to 6", () => {
        const generatedString = fizzBuzz.generate(1, 6)
        expect(generatedString).toEqual('12Fizz4BuzzFizz')
    })

    it("should return '12Fizz4BuzzFizz78FizzBuzz' if our interval is from 1 to 10", () => {
        const generatedString = fizzBuzz.generate(1, 10)
        expect(generatedString).toEqual('12Fizz4BuzzFizz78FizzBuzz')
    })

    it("should return '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz' if our interval is from 1 to 15", () => {
        const generatedString = fizzBuzz.generate(1, 15)
        expect(generatedString).toEqual('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz')
    })

})


