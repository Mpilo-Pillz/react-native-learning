import React from "react";
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

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

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
