import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Articulo } from '../interfaces';
import { AddItem } from '../components/AddItem';
import { ListItem } from '../components/ListItem/index';
import { useHome } from '../hooks/useHome';

interface Props extends StackScreenProps<any, any>{};

export const Home = (props: Props) => {
    const {articulos, setArticulos} = useHome();
    
    return (
        <SafeAreaView style={{
            marginHorizontal: 20,flex:1,}}
        >
            <AddItem setArticulos={setArticulos} articulos={articulos} />
            <ListItem articulos={articulos} setArticulos={setArticulos} />
        </SafeAreaView>
    )
}