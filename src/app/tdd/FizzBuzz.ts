
export class FizzBuzz {

    generate(number: number) {
        if (number % 3 === 0) 
            return 'Fizz'
        if (number % 5 === 0) 
            return 'Buzz'
        if (number % 15 === 0) 
            return 'FizzBuzz'
        return number.toString()
    }
}

