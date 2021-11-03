import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { PropsItem } from "../../interfaces";
import { styles } from "../../theme";

export const Item = ({item, accion}: PropsItem) => {
    return (
    <View style={{
        flexDirection:"row",
        marginVertical: 5,
    }}>
        <View style={{
            flex:1,
        }}>
            <Text style={[styles.textBase,styles.textH3]}>{item.value}</Text>
        </View>
        <TouchableOpacity
            onPress={accion}
            style={{backgroundColor:"tomato", borderRadius: 50}}
        >
            <Text style={[styles.textBase,styles.textH3]}>x</Text>
        </TouchableOpacity>
    </View>)
}