import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router'

export default function cadastro1() {
    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image source={require('../assets/images/Logo.png')} style={styles.imagem} />
                    <Text style={styles.titulo}>Agora, mais alguns dados sobre você:</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.captionInput}>CEP</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira seu CEP"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text style={styles.captionInput}>Endereço</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira seu endereço"
                        secureTextEntry={true}
                    />
                    <Text style={styles.captionInput}>Número</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira seu número"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text style={styles.captionInput}>Complemento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira seu complemento"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={styles.captionInput}>Telefone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="(00) 00000-0000"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Link href='./cadastro1' style={[styles.button, { backgroundColor: '#90989F' }]}><Text style={styles.buttonText}>Voltar</Text></Link>
                    <Link href='./cadastro3' style={styles.button}><Text style={styles.buttonText}>Avançar</Text></Link>
                </View>

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#6B6E71",
        textAlign: 'center',
        width: 300
    },
    captionInput: {
        color: "#0B3B60",
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: '', // Alinha o texto à esquerda
        marginBottom: 5, // Adiciona um espaço abaixo do texto
        width: '85%', // Certifica-se de que o texto ocupa a largura do input
    },
    imagem: {
        width: 180,
        height: 180,
        marginBottom: 30,
    },
    input: {
        width: '85%',
        height: 47,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 30,
        borderRadius: 5,
        backgroundColor: '#F8F8F8',

        // Estilos de sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // Estilos de sombra para Android
        elevation: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    topContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    formContainer: {
        alignItems: 'center', // Mantém a centralização dos inputs e botões
        justifyContent: 'center',
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#0B3B60',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 15,
        width: '85%',
        textAlign: 'center',
        height: 48
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    linkText: {
        color: '#0B3B60',
        marginTop: 15,
        textDecorationLine: 'underline',
        fontSize: 16,
    },

    linkCadastro: {
        color: '#0B3B60',
        marginTop: 15,
        fontSize: 16,
    }
});