import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking} from 'react-native';
import {Link} from 'expo-router'

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../assets/images/Logo.png')} style={styles.imagem} />
        <Text style={styles.titulo}>Faça login em sua conta</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.captionInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu endereço de email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.captionInput}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a sua senha"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Esqueci minha senha!')}>
          <Text style={styles.linkText}>Esqueceu sua Senha?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
          <Text style={styles.linkCadastro}>
            <Text>Ainda não tem conta? </Text>
            <Text style={[styles.linkText, { color: '#339CFF', fontWeight: 'bold' }]}>
              <Link href='/cadastro1'>Faça seu cadastro!</Link>
            </Text>
          </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#6B6E71",
    marginBottom: 20,
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
    marginBottom: 55,
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
    marginTop: 90,
  },
  formContainer: {
    alignItems: 'center', // Mantém a centralização dos inputs e botões
    justifyContent: 'center',
    marginBottom: 30,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 70,
  },
  button: {
    backgroundColor: '#0B3B60',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '85%',
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