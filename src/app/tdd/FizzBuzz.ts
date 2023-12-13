
export class FizzBuzz {

    generate(minNumber: number, maxNumber: number) {
        let result = ''

        if (minNumber % 15 === 0) 
            result += 'FizzBuzz'
        else if (minNumber % 3 === 0) 
            result += 'Fizz'
        else if (minNumber % 5 === 0) 
            result += 'Buzz'
        else 
            result += minNumber

        if (minNumber < maxNumber) {
            if (maxNumber % 15 === 0) 
            result += 'FizzBuzz'
        else if (maxNumber % 3 === 0) 
            result += 'Fizz'
        else if (maxNumber % 5 === 0) 
            result += 'Buzz'
        else 
            result += maxNumber
        }
        return result
    }
}


