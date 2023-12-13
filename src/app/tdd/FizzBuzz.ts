
export class FizzBuzz {

    generate(minNumber: number, maxNumber: number) {
        let result = ''
        for (let i=minNumber; i<=maxNumber;i++) {
            result += this.evaluateNumber(i)
        }
        return result
    }

    evaluateNumber(num: number) {
        if (num % 15 === 0) 
            return 'FizzBuzz'
        if (num % 3 === 0) 
            return 'Fizz'
        if (num % 5 === 0) 
            return 'Buzz'
        return num.toString()
    }
}


