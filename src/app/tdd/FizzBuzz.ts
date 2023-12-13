
export class FizzBuzz {

    generate(minNumber: number, maxNumber: number) {
        let result = ''

        result += this.evaluateNumber(minNumber)
        if (minNumber < maxNumber) {
            result += this.evaluateNumber(maxNumber)
        }
        return result
    }

    evaluateNumber(num: number) {
        let result: string
        if (num % 15 === 0) 
            result = 'FizzBuzz'
        else if (num % 3 === 0) 
            result = 'Fizz'
        else if (num % 5 === 0) 
            result = 'Buzz'
        else {
            result = num.toString()
        }
        return result
    }
}


