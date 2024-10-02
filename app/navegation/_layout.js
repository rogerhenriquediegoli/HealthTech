import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { DatabaseProvider } from '../database/DatabaseContext'; // Updated Import

export default function Layout() {
    return (
        <DatabaseProvider>
            <Tabs
                screenOptions={{
                    tabBarStyle: { backgroundColor: '#0B3B60' }, // Background color of the navigation bar
                    tabBarActiveTintColor: '#339CFF', // Active icon color
                    tabBarInactiveTintColor: '#FFFFFF', // Inactive icon color
                }}
            >
                <Tabs.Screen 
                    name='index' 
                    options={{
                        title: 'Início',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name='home' size={24} color={color} />
                        ),
                        tabBarLabel: 'Início',
                        headerShown: false, // Hide the header
                    }}
                />
                <Tabs.Screen 
                    name='consultas' 
                    options={{
                        title: 'Consultas',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name='calendar' size={24} color={color} />
                        ),
                        tabBarLabel: 'Consultas',
                        headerShown: false,
                    }}
                />
                <Tabs.Screen 
                    name='explorar' 
                    options={{
                        title: 'Explorar',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name='search' size={24} color={color} />
                        ),
                        tabBarLabel: 'Explorar',
                        headerShown: false,
                    }}
                    />
                <Tabs.Screen 
                    name='perfil' 
                    options={{
                        title: 'Perfil',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name='user' size={24} color={color} />
                        ),
                        tabBarLabel: 'Perfil',
                        headerShown: false,
                    }}
                />
            </Tabs>
        </DatabaseProvider>
    );
}