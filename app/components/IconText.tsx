import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from "@expo/vector-icons"

export const IconText = (props) => {
    const {iconName, iconColor, bodyText, bodyTextStyles, container} = props
const {textTheme} = styles
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textTheme: {
        fontWeight: 'bold'
    }
})