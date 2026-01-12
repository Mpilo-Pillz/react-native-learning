import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, Text, FlatList} from 'react-native';

const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: "Clear"
            }
        ]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: "Clouds"
            }
        ]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: "Rain"
            }
        ]
    }
];

export const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.container} >
<Text>Upcoming Weather</Text>
            <FlatList data={DATA} renderItem={} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})