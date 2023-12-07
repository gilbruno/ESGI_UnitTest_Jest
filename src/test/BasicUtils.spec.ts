import { authenticateUser, product } from "../app/BasicUtils"

describe.only('BasicUtils Test Suite', () => {
    it.skip('Should return the product of 3 and 2', () => {
        //Arrange
        const input1 = 3
        const input2 = 2
        const expected = 6
        const testProduct = product
        //Act
        const actual = testProduct(input1, input2)
        //Assert
        expect(actual).toBe(expected)
    })

    it.skip.each([
        [2, 2, 4],
        [5, 3, 15],
        [10, 10, 100]
    ])('Should return the product of %i  and %j by using array', (a, b, expected) => {
        //Arrange
        const testProduct = product
        //Act
        const actual = testProduct(a, b)
        //Assert
        expect(actual).toBe(expected)
    })

    it.each([
        {a: 2, b: 2, expected: 4},
        {a: 5, b: 3, expected: 15},
        {a: 10, b: 10, expected: 100}
    ])('Should return the product of $a and $b by using object', ({a, b, expected}) => {
        //Arrange
        const testProduct = product
        //Act
        const actual = testProduct(a, b)
        //Assert
        expect(actual).toBe(expected)
    })

    describe('Authentication Test Suite', () => {

        let userNameInput: string
        let pwdInput: string
        let testAuth: any
        beforeEach(() => {
            userNameInput = 'DEVELOPER'
            pwdInput      = 'test'
            testAuth = authenticateUser
        })

        it('Should test username', () => {
            //Arrange
            const userNameExpected = 'developer'
            //Act
            const userNameActual = testAuth(userNameInput, pwdInput).userNameLowerCase
            //Assert
            expect(userNameActual).toBe(userNameExpected)
        })
    
        it('Should test array of username characters', () => {
            //Arrange : test array of characters
            const charArrayInput = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R']
            //Act
            const charArrayActual = testAuth(userNameInput, pwdInput).userNameCharacters
            //Assert
            expect(charArrayActual).toEqual(charArrayInput)
        })

        it('Should contain a correct letter', () => {
            //Arrange
            const userNameLetter = 'D'
            //Act
            const charArrayActual = testAuth(userNameInput, pwdInput).userNameCharacters    
            //Assert
            expect(charArrayActual).toContain(userNameLetter)
        })

        it('Should test array of username characters - Whatever the sort of letters', () => {
            //Arrange : test array of characters
            const charArrayInput = ['L', 'O', 'P', 'E', 'R', 'D', 'E', 'V', 'E']
            //Act
            const charArrayActual = testAuth(userNameInput, pwdInput).userNameCharacters
            //Assert
            expect(charArrayActual).toEqual(
                expect.arrayContaining(charArrayInput)
            )
        })

        it('Should test returned user is a valid user', () => {
            //Arrange
            
            //Act
            const userActual = testAuth(userNameInput, pwdInput)
            //Assert
            expect(userActual).not.toBeUndefined()
        })

        it('Should return a correct bool if user is authenticated', () => {
            //Arrange

            //Act
            const userActual = testAuth(userNameInput, pwdInput)
            //Assert
            expect(userActual.isAuthenticated).toBeTruthy()
        })

        it('Should throw an error if userName or password is incorrect', () => {
            //Arrange
            pwdInput = 'test2'
            //Act
            const userActual = () => testAuth(userNameInput, pwdInput)
            //Assert
            expect(userActual).toThrow('Invalid userName or password')
        })

        it.todo('Should test feature Z')

    })
})


