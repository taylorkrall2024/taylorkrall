// LoginScreen.js
import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Using navigation hook to navigate

  async function handleLogin() {
    // Attempt to retrieve the loginData array from AsyncStorage
    const storedLoginData = await AsyncStorage.getItem('loginData');
    const loginData = storedLoginData ? JSON.parse(storedLoginData) : [];

    // Check if username and password match any entry in the loginData array
    const isValidUser = loginData.some(
      (data) => data.username === username && data.password === password
    );

    if (isValidUser) {
      // If valid, navigate to the ToDo screen
      navigation.navigate('ToDo');
    } else {
      // If not valid, show an alert or error message
      Alert.alert('Invalid Credentials', 'Please check your username and password.');
    }
  }

  return (
    <View>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        testID="login-username"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        testID="login-password"
      />
      <Button title="Login" onPress={handleLogin} testID="login-button" />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
        testID="login-register"
      />
    </View>
  );
}

export default LoginScreen;
