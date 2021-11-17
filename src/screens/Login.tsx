import React, { useContext, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme';
import { ContainerTextInput } from '../components/Form/ContainerTextInput';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any>{};

export const Login = ({navigation}: Props) => {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const context = useContext(AuthContext)
    
    return (
        <ScrollView
            contentInsetAdjustmentBehavior='automatic'
        >
            <View style={{ flex: 1 }}>
                <Text style={[styles.textBase, styles.textH1]} >
                    Login
                </Text>
                <ContainerTextInput
                    label ="Email"
                    onChangeText={onChangeEmail}
                    value={email}
                />
                <ContainerTextInput
                    label ="Contraseña"
                    onChangeText={onChangePassword}
                    value={password}
                />
                <TouchableOpacity onPress={() => context.signIn({ email, password })}>
                    <Text style={[styles.textBase, styles.textH3]}>Iniciar Sesión <Ionicons name="log-in" color="white" size={15} /></Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}