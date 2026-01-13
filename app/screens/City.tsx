import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

export const City = () => {
    const {container} = styles
    return (
        <SafeAreaView style={container}>
            <Text>this is a city</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})