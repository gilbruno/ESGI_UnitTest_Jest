import { IAuthenticationData } from "./IAuthenticationData";

export function product(a: number, b: number):number {
    return a*b
}

export function authenticateUser(userName: string, password: string):IAuthenticationData {
    const authenticationStatus = userName === 'deveLOPER' && password === 'dev'

    let user: IAuthenticationData
    user = {
        userNameLowerCase: userName.toLowerCase(),
        userNameCharacters: userName.split(''),
        userDetails: {},
        isAuthenticated: authenticationStatus

    }
    return user

}
