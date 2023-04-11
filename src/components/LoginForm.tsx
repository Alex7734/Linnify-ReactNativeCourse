import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, Pressable, Image } from 'react-native';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      return Alert.alert(`Email: ${email}\nPassword: ${password}`);
    } 
    Alert.alert('Please enter both email and password');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  //TODO UX - Add validation for email
  const handleEmailChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={handleEmailChange}
        value={email}
        onBlur={() => {
          if (email && !isEmailValid(email)) {
            Alert.alert('Please enter a valid email address');
          }
        }}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={handlePasswordChange}
          value={password}
        />
        <Pressable style={styles.toggleButton} onPress={toggleShowPassword}>
            <Image style={styles.icon} source={require('../assets/eye.png')} />
        </Pressable>
      </View>
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
  },
  toggleButton: {
    padding: 10,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginText: {
    color: 'grey',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    icon: {
        width: 30,
        height: 30,
        marginBottom: 20,
        marginLeft: 5
    }
});

function alert(arg0: string) {
    throw new Error('Function not implemented.');
}
