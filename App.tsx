import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './src/screens/Login/Login';
import Market from './src/screens/Market/Market';
import Chart from './src/screens/Chart/Chart';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LandingPage from './src/screens/LandingPage/LandingPage';
// import Chart from './src/screens/Chart/Chart';

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;

function HomeScreen() {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Market} />
          <Stack.Screen name="Chart" component={Chart} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
