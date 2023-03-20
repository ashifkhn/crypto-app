import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {LineChart} from 'react-native-wagmi-charts';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

const avg_market = 1.8;

export default function Market({navigation}) {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const getCoins = async () => {
    await axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=3&page=1&sparkline=false',
      )
      .then(res => {
        console.log(res);
        setCoins(res.data);
        setLoader(false);
      });
  };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key');
  //     if (value !== null) {
  //       // value previously stored
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <View>
      <View style={styles.screenHeading}>
        <Text style={styles.marketText3}>Market</Text>
        <View>
          <Text style={styles.marketText}>Avr. 24 hr. Change </Text>
          <View style={styles.coinMarket}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {avg_market > 1 ? (
                <Icon name="caretup" size={15} color="green" />
              ) : (
                <Icon name="caretdown" size={15} color="red" />
              )}

              <Text style={{color: '#000'}}>
                {Number(avg_market).toFixed(2)}%
              </Text>
            </View>
          </View>
        </View>
      </View>
      {loader ? (
        <ActivityIndicator />
      ) : (
        <View style={{display: 'flex', backgroundColor: ''}}>
          {coins.map(coin => {
            return (
              <Pressable
                style={styles.coinCointainer}
                onPress={() => {
                  navigation.navigate('Chart', {
                    id: coin,
                  });
                }}>
                <View style={styles.coinSymbol}>
                  <Text style={{color: '#000'}}>{coin.name}</Text>
                  <Image
                    source={{
                      uri: `${coin.image}`,
                      width: 50,
                      height: 50,
                    }}
                  />
                </View>
                {/* <View style={styles.coinGraph}>
                  <LineChart.Provider data={data}>r
                    <LineChart width={100} height={100}>
                      <LineChart.Path />
                    </LineChart>
                  </LineChart.Provider>
                </View> */}
                <View style={styles.coinMarket}>
                  <Text style={{color: '#000'}}>{coin.current_price} INR</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {coin.price_change_percentage_24h > 1 ? (
                      <Icon name="caretup" size={15} color="green" />
                    ) : (
                      <Icon name="caretdown" size={15} color="red" />
                    )}

                    <Text style={{color: '#000'}}>
                      {Number(coin.price_change_percentage_24h).toFixed(2)}%
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
      <Button title="btn" onPress={getData} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  marketText: {
    fontSize: 15,
    color: '#000',
  },
  marketText2: {
    fontSize: 12,
    color: '#000',
  },
  marketText3: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },

  coinCointainer: {
    height: height * 0.2,
    backgroundColor: '#fff',

    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 12,
  },
  coinSymbol: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 40,
    gap: 10,
    textAlign: 'center',
  },
  coinGraph: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  coinMarket: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
