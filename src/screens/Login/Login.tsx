import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {styles} from './LoginStyles';
import {utilityStyles} from '../../../utility/Utility';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from './../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gooogleEmail, setGoogleEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [googleId, setGoogleId] = useState('');

  const signIn = async () => {};

  const handleSubmit = async e => {
    e.preventDefault();
    if (email === '') {
      setErrorMessage('Enter a valid email address');
      return;
    } else if (
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email) === false
    ) {
      setErrorMessage('Enter a valid email address');
      return;
    } else {
      const val = JSON.stringify({
        email,
        password,
      });
      await AsyncStorage.setItem('@storage_Key', val);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View>
        <Text style={styles.signUptext}>Sign up or Login into CryptoApp</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHeader}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="user@test.com"
            value={email}
            placeholderTextColor="rgba(86, 86, 87, 0.3)"
            onChangeText={text => {
              setErrorMessage('');
              setEmail(text);
            }}
          />
          <Text />
          <Text style={styles.inputHeader}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            value={password}
            placeholderTextColor="rgba(86, 86, 87, 0.3)"
            onChangeText={text => {
              setErrorMessage('');
              setPassword(text);
            }}
          />
          <Text style={utilityStyles.errorMessage}>{errorMessage}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text
            style={{
              fontFamily: 'Avenir',
              color: '#FDFEFF',
              fontSize: DEVICE_HEIGHT * 0.015,
            }}>
            Continue
          </Text>
        </TouchableOpacity>
        <View style={[utilityStyles.flexCenterRow, styles.orMargin]}>
          <View style={styles.horizontalLine} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.horizontalLine} />
        </View>

        <TouchableOpacity style={styles.googleButton} onPress={signIn}>
          <Text
            style={{
              color: '#4A4A4A',
              fontFamily: 'Avenir',
            }}>
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
