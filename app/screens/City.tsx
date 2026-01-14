import React from 'react';
import {Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {SafeAreaView} from "react-native-safe-area-context";

export const City = () => {
    const {container,
        imageLayout,
        cityName,
        countryName,
        placeText,
        populationText,
        populationWrapper,
        riseSetWrapper,
        riseSetText
    } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground style={imageLayout} source={require('../../assets/city.jpg')}>
                <Text style={[cityName, placeText]}>Jhb</Text>
                <Text style={[countryName, placeText]}>Mzansi</Text>
                <View style={populationWrapper}>
                    <Feather name={'user'} size={50} color={'red'} />
                    <Text style={populationText}>9000</Text>
                </View>
                <View style={riseSetWrapper}>
                    <Feather name={'sunrise'} size={50} color={'white'}/>
                    <Text style={riseSetText}>06:37:49am</Text>
                    <Feather name={'sunset'} size={50} color={'white'}/>
                    <Text style={riseSetText}>19:26:58pm</Text>
                </View>
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
    },
    populationWrapper: {
       flexDirection: "row",
       alignItems: "center",
       justifyContent: "center",
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: "red",
        fontWeight: "bold"
    },
    riseSetWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold"
    }
})