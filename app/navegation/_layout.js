import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: { backgroundColor: '#0B3B60' }, // Cor de fundo da barra de navegação
                tabBarActiveTintColor: '#339CFF', // Cor do ícone ativo
                tabBarInactiveTintColor: '#FFFFFF', // Cor do ícone inativo
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
                    headerShown: false, // Esconde a barra de título
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
    );
}
