import { AuthAction, authInitialState, AuthState } from "../interfaces";

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                ...authInitialState,
            }
        case 'login':
            return {
                ...action.payload,
            }
        default:
            return state;
    }
    
}