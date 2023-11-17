import { product } from "../app/BasicUtils"

describe('BasicUtils Test Suite', () => {
    it('Should return the product of 3 and 2', () => {
        const actual = product(3, 2)
        const expected = 6
        expect(actual).toBe(expected)
    })
})