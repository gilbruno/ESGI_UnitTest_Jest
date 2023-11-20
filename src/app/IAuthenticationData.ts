export interface IAuthenticationData {
    userNameLowerCase: string
    userNameCharacters: Array<string>
    userDetails : Object | undefined
    isAuthenticated: boolean
}