import {StyleSheet} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from './../../../App';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: DEVICE_HEIGHT * 0.03,
  },
  signUptext: {
    color: '#353046',
    fontSize: DEVICE_HEIGHT * 0.025,
    marginTop: DEVICE_HEIGHT * 0.04,
    fontFamily: 'Avenir',
  },
  inputContainer: {
    marginTop: DEVICE_HEIGHT * 0.04,
  },
  inputHeader: {
    color: '#353046',
    fontSize: DEVICE_HEIGHT * 0.015,
    fontFamily: 'Avenir',
    marginBottom: 5,
  },
  input: {
    height: 58,
    borderWidth: 1,
    padding: 10,
    borderColor: '#f36969',
    borderRadius: 8,
    color: '#4A4A4A',
  },
  button: {
    backgroundColor: '#f36969',
    height: 58,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginVertical: DEVICE_HEIGHT * 0.02,
    fontFamily: 'Avenir',
  },

  horizontalLine: {
    width: DEVICE_WIDTH * 0.35,
    backgroundColor: '#9B9B9B',
    height: 1,
  },

  orMargin: {
    marginVertical: DEVICE_HEIGHT * 0.05,
  },

  orText: {
    marginHorizontal: DEVICE_WIDTH * 0.05,
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: '#9B9B9B',
    fontSize: DEVICE_HEIGHT * 0.015,
  },
  googleButton: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fffff',
    height: 58,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f96a68',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
