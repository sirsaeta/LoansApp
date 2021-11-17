export type Articulo = {
    id: number;
    value: string;
}

export interface Prestamo {
    id: number;
    value: string;
}

export interface PropsItem {
    item: Prestamo;
    accion: ()=>void;
    accionDetail: (params:Prestamo)=>void;
}

export interface AuthState {
    email?: string;
    name?: string;
    surname?: string;
    accessToken?: string;
    expiresIn?: string;
    roles?: string[];
}

export interface AuthContextProps {
    authState: AuthState;
    signIn: (payload: LoginData) => void;
    signOut: () => void;
}

export type LoginData = {
    email:      string;
    password:   string;
}

export const authInitialState: AuthState = {
    accessToken: undefined,
}

export type AuthAction = {
    type: 'logout'
} | {
    type: 'login',
    payload: AuthState
};