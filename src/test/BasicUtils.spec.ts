import { authenticateUser, product } from "../app/BasicUtils"

describe('BasicUtils Test Suite', () => {
    it('Should return the product of 3 and 2', () => {
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


    describe.only('Authentication Test Suite', () => {
        it('Should test username', () => {
            //Arrange
            const testAuth = authenticateUser
            const userNameInput = 'DEVELOPER'
            const pwdInput      = 'test'
            const userNameExpected = 'developer'
            let userNameActual
            
            //Act
            userNameActual = testAuth(userNameInput, pwdInput).userNameLowerCase
            
            //Assert
            expect(userNameActual).toBe(userNameExpected)
        })
    
        it('Should test array of username characters', () => {
            //Arrange
            const testAuth = authenticateUser
            const userNameInput = 'DEVELOPER'
            const pwdInput      = 'test'
            let charArrayActual
            //test array of characters
            const charArrayInput = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R']
    
            //Act
            charArrayActual = testAuth(userNameInput, pwdInput).userNameCharacters
    
            //Assert
            expect(charArrayActual).toEqual(charArrayInput)
        })

        it('Should contain a correct letter', () => {
            //Arrange
            const testAuth = authenticateUser
            const userNameInput  = 'DEVELOPER'
            const userNameLetter = 'D'
            const pwdInput       = 'test'

            let charArrayActual
    
            //Act
            charArrayActual = testAuth(userNameInput, pwdInput).userNameCharacters
    
            //Assert
            expect(charArrayActual).toContain(userNameLetter)
        })

        it('Should test array of username characters - Whatever the sort of letters', () => {
            //Arrange
            const testAuth = authenticateUser
            const userNameInput = 'DEVELOPER'
            const pwdInput      = 'test'
            let charArrayActual
            //test array of characters
            const charArrayInput = ['L', 'O', 'P', 'E', 'R', 'D', 'E', 'V', 'E']
    
            //Act
            charArrayActual = testAuth(userNameInput, pwdInput).userNameCharacters
    
            //Assert
            expect(charArrayActual).toEqual(
                expect.arrayContaining(charArrayInput)
            )
        })

        it('Should test returned user is a valid user', () => {
            //Arrange
            const testAuth = authenticateUser
            const userNameInput = 'DEVELOPER'
            const pwdInput      = 'test'
            let userActual

            //Act
            userActual = testAuth(userNameInput, pwdInput)
    
            //Assert
            expect(userActual).not.toBeUndefined()
        })
    })
})


