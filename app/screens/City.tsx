import React from 'react';
import {Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

export const City = () => {
    const {container, imageLayout, cityName, countryName, placeText} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground style={imageLayout} source={require('../../assets/city.jpg')}>
                <Text style={[cityName, placeText]}>Jhb</Text>
                <Text style={[countryName, placeText]}>Mzansi</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    placeText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
})