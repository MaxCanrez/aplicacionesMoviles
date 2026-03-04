import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^.{6,}$/;

    if (!email || !password) {
      setMessage('Todos los campos son obligatorios');
    }
    else if (!emailRegex.test(email)) {
      setMessage('Email no válido');
    }
    else if (!passwordRegex.test(password)) {
      setMessage('El password debe tener mínimo 6 caracteres');
    }
    else {

      setIsLoading(true);
      setMessage('Validando...');

      setTimeout(() => {

        if (email === 'admin@test.com' && password === '123456') {
          setMessage('Bienvenido');
        } else {
          setMessage('Credenciales incorrectas');
        }

        setIsLoading(false);

      }, 2000);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {isLoading ? 'Cargando...' : 'Login'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.message}>{message}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  message: {
    marginTop: 20,
    fontSize: 16,
  }

});