import { Tabs } from 'expo-router';
import React, {useState} from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Feather } from "@expo/vector-icons";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


export default function TabLayout() {

    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarStyle: {
                    backgroundColor: 'lightblue',
                },
                headerStyle: {
                    backgroundColor: 'lightBlue'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato'
                }
            }}>
            <Tabs.Screen name="Current" options={{ title: "Current", tabBarIcon: ({focused}) => (
                <Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'}/>
                ) }} />
            <Tabs.Screen
                name="Upcoming"
                options={{ title: "Upcoming", tabBarIcon: ({focused}) => (
                        <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'black'}/>
                    ) }}

            />
            <Tabs.Screen name="City" options={{ title: "City", tabBarIcon: ({focused}) => (
                    <Feather name={'home'} size={25} color={focused ? 'tomato' : 'black'}/>
                ) }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    }
})

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
