import { View, Text, StyleSheet } from 'react-native'; 

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Perfil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
});