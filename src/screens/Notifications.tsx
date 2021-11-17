import React from 'react';
import { Text, View, useWindowDimensions, ScrollView } from 'react-native';
import { styles, colors } from '../theme';

export const Notifications = () => {
    const { height, width } = useWindowDimensions()
    
    return (
    <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={{}}
    >
        <View style={{ flex: 1 }}>
            <Text style={[styles.textBase]} >
                Notifications
            </Text>
        </View>
    </ScrollView>
    )
}