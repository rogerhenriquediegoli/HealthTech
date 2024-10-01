import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function Cadastro() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    phone: '',
    selectedPlans: {},
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckBoxChange = (plan: string) => {
    const updatedPlans = { ...formData.selectedPlans };

    if (plan === 'Não tenho plano') {
      // If "Não tenho plano" is selected, unselect all other plans
      updatedPlans['Não tenho plano'] = !updatedPlans['Não tenho plano'];
      if (updatedPlans['Não tenho plano']) {
        Object.keys(updatedPlans).forEach(key => {
          if (key !== 'Não tenho plano') updatedPlans[key] = false;
        });
      }
    } else {
      // If any other plan is selected, unselect "Não tenho plano"
      updatedPlans[plan] = !updatedPlans[plan];
      if (updatedPlans[plan]) {
        updatedPlans['Não tenho plano'] = false;
      }
    }

    setFormData({ ...formData, selectedPlans: updatedPlans });
  };

  const validateStep1 = () => {
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const { cep, address, number, phone } = formData;
    if (!cep || !address || !number || !phone) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    return true;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.formContainer}>
            <Text style={styles.titulo}>Insira alguns dados básicos:</Text>
            <Text style={styles.captionInput}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome completo"
              keyboardType="default"
              autoCapitalize="none"
              value={formData.name}
              onChangeText={(value) => handleInputChange('name', value)}
            />
            <Text style={styles.captionInput}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
            />
            <Text style={styles.captionInput}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira sua senha"
              secureTextEntry
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)}
            />
            <Text style={styles.captionInput}>Repita a senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira sua senha"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(value) => handleInputChange('confirmPassword', value)}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
              if (validateStep1()) setStep(2);
            }}>
              <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <View style={styles.formContainer}>
            <Text style={styles.titulo}>Agora, mais alguns dados sobre você:</Text>
            <Text style={styles.captionInput}>CEP</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira seu CEP"
              value={formData.cep}
              onChangeText={(value) => handleInputChange('cep', value)}
            />
            <Text style={styles.captionInput}>Endereço</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira seu endereço"
              value={formData.address}
              onChangeText={(value) => handleInputChange('address', value)}
            />
            <Text style={styles.captionInput}>Número</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira seu número"
              value={formData.number}
              onChangeText={(value) => handleInputChange('number', value)}
            />
            <Text style={styles.captionInput}>Complemento</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira seu complemento"
              value={formData.complement}
              onChangeText={(value) => handleInputChange('complement', value)}
            />
            <Text style={styles.captionInput}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
            />
            <TouchableOpacity style={[styles.button, { backgroundColor: '#90989F' }]} onPress={() => setStep(1)}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              if (validateStep2()) setStep(3);
            }}>
              <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
          </View>
        );
      case 3:
        return (
          <View style={styles.formContainer}>
            <Text style={styles.titulo}>Para finalizar, qual seu plano de saúde?</Text>
            <Text style={styles.captionInput}>Selecione os planos:</Text>
            {["Sulamerica", "Unimed", "Bradesco", "Amil", "Biosaúde", "Biovida", "Outros", "Não tenho plano"].map((plan) => (
              <CheckBox
                key={plan}
                title={plan}
                checked={formData.selectedPlans[plan] || false}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
                checkedColor='#0B3B60' 
                uncheckedColor='#90989F' 
                onPress={() => handleCheckBoxChange(plan)}
              />
            ))}
            <TouchableOpacity style={[styles.button, { backgroundColor: '#90989F' }]} onPress={() => setStep(2)}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log(formData)}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <Image source={require('../assets/images/Logo.png')} style={styles.imagem} />
      {renderStep()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#6B6E71",
    textAlign: 'center',
    width: 300,
    marginBottom: 20,
  },
  captionInput: {
    color: "#0B3B60",
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    width: '85%',
  },
  imagem: {
    width: 180,
    height: 180,
    marginBottom: 30,
    marginTop: 20,
    alignSelf: 'center',
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

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#0B3B60',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '85%', // Adjusted width for better layout
    textAlign: 'center',
    height: 48
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingLeft: 0,
    marginVertical: -5,
    alignItems: 'flex-start', // Align checkbox to the left
    width: '85%',
  },
  checkboxText: {
    fontSize: 16,
    color: '#0B3B60',
    textAlign: 'left', // Align checkbox text to the left
  }
});