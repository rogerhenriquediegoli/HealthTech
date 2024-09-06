import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking} from 'react-native';
import {Link} from 'expo-router'
import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';

export default function cadastro3() {
  const [selectedPlans, setSelectedPlans] = useState({});

  const handleCheckBoxChange = (plan) => {
    if (plan === 'Não tenho plano') {
      // Se selecionar "Não tenho plano", desmarcar todos os outros planos
      setSelectedPlans({ 'Não tenho plano': !selectedPlans['Não tenho plano'] });
    } else {
      // Se selecionar outro plano, desmarcar "Não tenho plano"
      setSelectedPlans({ ...selectedPlans, [plan]: !selectedPlans[plan], 'Não tenho plano': false });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../assets/images/Logo.png')} style={styles.imagem} />
        <Text style={styles.titulo}>Para finalizar, qual seu plano de saúde?</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.caption}>Selecione os planos: </Text>
        <View style={styles.boxOptions}>
          {["Sulamerica", "Unimed", "Bradesco", "Amil", "Biosaúde", "Biovida", "Outros", "Não tenho plano"].map((plan) => (
            <CheckBox
              key={plan}
              title={plan}
              checked={selectedPlans[plan] || false}
              onPress={() => handleCheckBoxChange(plan)}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
              checkedColor='#0B3B60' 
              uncheckedColor='#90989F' 
            />
          ))}
        </View>

        <Link href='./cadastro2' style={[styles.button, { backgroundColor: '#90989F' }]}><Text style={styles.buttonText}>Voltar</Text></Link>
        <Link href='/' style={styles.button}><Text style={styles.buttonText}>Cadastrar</Text></Link>
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
    textAlign: 'center',
    marginBottom: 30,
    width: 300
  },
  imagem: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },
  boxOptions: {
    marginBottom: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  formContainer: {
    width: '85%', 
    alignSelf: 'center', 
    justifyContent: 'center',
    marginBottom: 100,
  },
  caption: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#0B3B60",
    textAlign: 'left',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingLeft: 0,
    marginVertical: -5,
  },
  checkboxText: {
    fontSize: 16,
    color: '#0B3B60',
  },
  button: {
    backgroundColor: '#0B3B60',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 15,
    width: '100%',
    textAlign: 'center',
    height: 48
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  }
});
