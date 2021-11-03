import React, { useState } from 'react';
import { View,  TextInput, Button } from 'react-native';
import { Articulo } from '../../interfaces';

type Props = {
    setArticulos: React.Dispatch<React.SetStateAction<Articulo[]>>;
    articulos: Articulo[];
}

export const AddItem = ({setArticulos, articulos}:Props) => {
    const [text, onChangeText] = useState("");
    
    return (
    <View style={{flexDirection:"row"}}>
        <TextInput 
            style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: "80%",
                marginRight: 10,
                color: "white",
            }}
            onChangeText={onChangeText}
            placeholder="Articulo a buscar"
            value={text}
        />
        <Button title="ADD" onPress={()=> setArticulos([...articulos,{
            id: articulos.length+1,
            value: text
        }]) } />
    </View>
    )
}