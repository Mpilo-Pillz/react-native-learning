import React from 'react';
import {Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {IconText} from "@/app/components/IconText"

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
                    <IconText
                    iconName={'user'}
                    iconColor={'red'}
                    bodyText={7000}
                    bodyTextStyles={populationText}
                    />

                </View>
                <View style={riseSetWrapper}>
                    <IconText
                        iconName={'sunrise'}
                        iconColor={'white'}
                        bodyText={'06:37:49am'}
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName={'sunset'}
                        iconColor={'white'}
                        bodyText={'19:26:58pm'}
                        bodyTextStyles={riseSetText}
                    />
                    {/*<Feather name={'sunset'} size={50} color={'white'}/>*/}
                    {/*<Text style={riseSetText}>19:26:58pm</Text>*/}
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
    }
})