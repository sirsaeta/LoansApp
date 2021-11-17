import { AuthState, LoginData } from "../interfaces";

export const login = (loginData:LoginData) => {
    let authState: AuthState = {
        accessToken: loginData.email,
        email: loginData.email,
        name: loginData.email,
    };
    return authState;
}