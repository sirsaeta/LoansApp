import React, { createContext, useState } from 'react';

export interface ColorsState {
    primary: string;
    secondary: string;
}

export const colorsInitialState: ColorsState = {
    primary: "#000",
    secondary: "#121212",
}

export interface ColorsContextProps {
    colorsState: ColorsState;
    prevColorsState: ColorsState;
    setMainColors: (colors: ColorsState) => void;
    setPrevMainColors: (colors: ColorsState) => void;
}

export const GradientContext = createContext({} as ColorsContextProps)

export const GradientProvider = ({ children }: any) => {

    const [ colorsState, setColorsState] = useState<ColorsState>(colorsInitialState);
    const [ prevColorsState, setPrevColorsState] = useState<ColorsState>(colorsInitialState);
    const setMainColors = (colors: ColorsState) => {
        setColorsState(colors);
    }

    const setPrevMainColors = (colors: ColorsState) => {
        setPrevColorsState(colors);
    }

    return (
        <GradientContext.Provider value={{
            colorsState,
            prevColorsState,
            setMainColors,
            setPrevMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}