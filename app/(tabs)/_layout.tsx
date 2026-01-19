import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Feather } from "@expo/vector-icons";


export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                headerShown: false,
                tabBarButton: HapticTab,
            }}>
            <Tabs.Screen name="current" options={{ title: "Current", tabBarIcon: ({focused}) => (
                <Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'}/>
                ) }} />
            <Tabs.Screen
                name="upcoming"
                options={{ title: "Upcoming", tabBarIcon: ({focused}) => (
                        <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'black'}/>
                    ) }}

            />
            <Tabs.Screen name="city" options={{ title: "City", tabBarIcon: ({focused}) => (
                    <Feather name={'home'} size={25} color={focused ? 'tomato' : 'black'}/>
                ) }} />
        </Tabs>
    );
}

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
