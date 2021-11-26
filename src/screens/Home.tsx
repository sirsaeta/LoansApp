import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme';
import { AddItem } from '../components/AddItem';
import { Prestamo } from '../interfaces';
import { ListItem } from '../components/ListItem';
import { AuthContext } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';


interface Props extends StackScreenProps<any, any>{};

export const Home = ({navigation}: Props) => {
    const [prestamos, setPrestamos] = useState<Prestamo[]>([]);
    const context = useContext(AuthContext);
    const loanType = useSelector((state: any) => state.loanTypes.selected);
    const dolarPrice = useSelector((state: any) => state.dolarPrice.dolarPrice);
    
    return (
        <View style={{ flex: 1 }}>
            
            <TouchableOpacity onPress={() => context.signOut()}>
                <Text style={[styles.textBase, styles.textH3]}>Cerrar Sesión <Ionicons name="log-out-outline" color="white" size={15} /></Text>
            </TouchableOpacity>
            <Text style={[styles.textBase, styles.textH3]} >
                Precio Dolar:{dolarPrice}
            </Text>
            <Text style={[styles.textBase, styles.textH1]} >
                Crear Prestamo (Tipo:{loanType})
            </Text>
            <AddItem prestamos={prestamos} setPrestamos={setPrestamos} />
            <ListItem prestamos={prestamos} setPrestamos={setPrestamos} accionDetail={(params:Prestamo)=>navigation.navigate("DetailsLoans",params)} />
        </View>
    )
}