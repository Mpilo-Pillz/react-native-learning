import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from "@expo/vector-icons"

export const IconText = (props) => {
    const {iconName, iconColor, bodyText, bodyTextStyles} = props
const {textTheme} = styles
    return (
        <View>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold'
    }
})