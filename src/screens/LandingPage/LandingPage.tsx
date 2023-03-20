import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {DEVICE_HEIGHT, DEVICE_WIDTH} from './../../../App';

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <Text style={styles.logo}>JobPort</Text>
        <Text style={styles.browse}>Browse Jobs</Text>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./../../../assets/undraw_Location_search_re_ttoj.png')}
          style={{
            width: DEVICE_WIDTH * 1,
            height: DEVICE_HEIGHT * 0.6,
            resizeMode: 'contain',
          }}
        />
        <Text style={styles.letsMoveText}>Lets move forward</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
          }}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpBTN}>
            <Text style={styles.signupText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  browse: {
    // fontWeight: 'bold',
    marginTop: 10,
    fontSize: 14,
    alignItems: 'center',
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '45%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  signUpBTN: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fb5b5a',
  },
  loginText: {
    color: 'white',
  },
  letsMoveText: {
    color: '#003f5c',
    fontSize: 30,
  },
  signupText: {
    color: '#003f5c',
  },
});

export default LandingPage;
