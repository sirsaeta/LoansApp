import React, { createContext, useEffect, useReducer } from 'react';
import { authReducer } from './AuthReducer';
import { login } from "../api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextProps, authInitialState, AuthState, LoginData } from '../interfaces';

export const AuthContext = createContext({} as AuthContextProps)

const storeData = async (value: AuthState) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_AuthState', jsonValue)
    } catch (e) {
        console.log(e);
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_AuthState')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e);
    }
}

export const AuthProvider = ({ children }: any) => {

    const [ authState, dispatch] = useReducer(authReducer, authInitialState);
    useEffect(() => {
        getData().then((data:AuthState)=>dispatch({type:"login", payload: data}))
    }, [])
    const signIn = async (loginData:LoginData) => {
        let data = await login(loginData);
        if (data) {
            await storeData(data);
            dispatch({type:"login", payload: data});
        }
    }
    
    const signOut = async () => {
        await storeData(authInitialState);
        dispatch({type:"logout"});
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}