import { product } from "../app/BasicUtils"

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
})
