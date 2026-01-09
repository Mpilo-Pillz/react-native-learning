import React from "react";
import {Text, View, StyleSheet} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text>Current Weather</Text>
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feels}>Feels like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.highLow}>High: 8 </Text>
                    <Text style={styles.highLow}>Low: 6</Text>
                </View>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.description}>Its sunny</Text>
                <Text style={styles.message}>Its perfect t-shirt weather</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: "center"
    },
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    temp: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black'
    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    description: {
        fontSize: 48
    },
    message: {
        fontSize: 30
    }
})
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';
//
// import { useColorScheme } from '@/hooks/use-color-scheme';
//
// export const unstable_settings = {
//   anchor: '(tabs)',
// };
//
// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//
//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }
