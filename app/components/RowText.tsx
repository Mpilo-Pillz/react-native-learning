import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export const RowText = (props) => {
    const {containerStyles, messageOneStyles, messageTwoStyles } = styles
    const {messageOne, messageTwo} = props
    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bodyWrapper {

    }
})