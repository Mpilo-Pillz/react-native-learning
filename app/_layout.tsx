import React, {useState, useEffect} from "react";
import {CurrentWeather} from "@/app/screens/CurrentWeather";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {UpcomingWeather} from "@/app/screens/UpcomingWeather";
import {City} from "@/app/screens/City";

// const Tab = createBottomTabNavigator()
// export default function RootLayout() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name={'Current'} component={CurrentWeather} />
//                 <Tab.Screen name={'Upcoming'} component={UpcomingWeather} />
//                 <Tab.Screen name={'City'} component={City} />
//             </Tab.Navigator>
//         </NavigationContainer>
//
//     )
// }

import {ActivityIndicator, StyleSheet, View} from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import {SafeAreaView} from "react-native-safe-area-context";

import * as Location from 'expo-location';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)
    const [weather, setWeather] = useState<any[]>([])

    const lat = "55.755786" // location.coords.latitude
    const lon = "37.617633" // location.coords.longitude
    const fetchWeather = async () => {
        console.log("EV==> " + process.env.EXPO_WEATHER_API_KEY)
        try {
            const res = await fetch(`http://localhost:4000/api/vi/weather`)
            const data = await res.json();
            setWeather(data)
            setLoading(false)
        } catch(error) {
            setError('could not fetch weather, try again')
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError("Location access denied by user")
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
            await fetchWeather()
            console.log("LOCATION GRANTED")

        })()
    }, [])

    if (location) {
        console.log(location)
    }

    if (weather) {
        console.log("weather ==>", weather)
    }

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <ActivityIndicator style={styles.container} size={'large'} color={'blue'}/>
                </View>

            </SafeAreaView>
        )
    }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
})
