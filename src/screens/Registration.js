// src/screens/Registration.js
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Registration = ({navigation}) => {
  const [name, setName] = useState('');
  const [aadhaar, setAadhaar] = useState('');

  const handleRegister = () => {
    // You would save the data and move to the next screen
    navigation.navigate('FaceRecognition');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Aadhaar number"
        value={aadhaar}
        onChangeText={setAadhaar}
        keyboardType="numeric"
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  title: {fontSize: 24, textAlign: 'center', marginBottom: 20},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default Registration;
