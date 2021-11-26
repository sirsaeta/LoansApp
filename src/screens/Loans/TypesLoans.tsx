import React, { useEffect } from 'react';
import { Text, View, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../theme';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoanType, loadLoanTypes } from '../../store/actions/typeLoan.action';

interface Props extends StackScreenProps<any, "TypesLoans"> { };

export const TypesLoans = ({ navigation }: Props) => {
    const dispatch = useDispatch();
    const loanTypes = useSelector((state: any) => state.loanTypes.loanTypes);
    
    const handleSelectCategory = (value:string) => {
      dispatch(selectLoanType(value));
    };

    useEffect(() => {
        dispatch(loadLoanTypes([{ label: "1", value: "1" }]));
    }, [])

    return (
        <View style={{ flex: 1, marginHorizontal:5 }}>
            <Text style={[styles.textBase, styles.textH1]} >
                TypesLoans
            </Text>
            <View>
                <FlatList
                    data={loanTypes}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSelectCategory(item.value)}>
                            <Text style={[styles.textBase, styles.textH2]}>{item.label}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <Button title='Load' onPress={() => dispatch(loadLoanTypes([{ label: "1", value: "1" },{ label: "2", value: "2" }]))} />
            <Button title='Ir Atras' onPress={() => navigation.canGoBack() && navigation.goBack()} />
        </View>
    )
}