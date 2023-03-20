import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {LineChart, CandlestickChart} from 'react-native-wagmi-charts';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import IconB from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const Chart = ({navigation, route}) => {
  console.log(route.params.id, 'route');

  const currency = 'INR';
  const days = '30';
  const {id, image, name, current_price, price_change_percentage_24h} =
    route.params.id;

  // console.log(name);
  const [chart, setChart] = useState([]);
  const [loader, setLoader] = useState(false);
  const data = [
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
  ];
  const getChart = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`,
      )
      .then(res => {
        console.log(res.data);
        setChart(res.data);
        setLoader(false);
      });
  };

  useEffect(() => {
    // getChart();
  }, []);

  return (
    <View>
      {loader ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Pressable
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <IconB name="arrow-back" size={30} color="black" />
            <Text style={styles.marketText3}>Market</Text>
          </Pressable>

          <Pressable style={styles.coinCointainer}>
            <View style={styles.coinSymbol}>
              <Text style={{color: '#000'}}>{name}</Text>
              <Text style={{color: '#000'}}>{current_price} INR</Text>
            </View>
            <View style={styles.coinMarket}>
              <Text style={{color: '#000'}}>Daily Change</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {price_change_percentage_24h > 1 ? (
                  <Icon name="caretup" size={15} color="green" />
                ) : (
                  <Icon name="caretdown" size={15} color="red" />
                )}

                <Text style={{color: '#000'}}>
                  {Number(price_change_percentage_24h).toFixed(2)}%
                </Text>
              </View>
            </View>
          </Pressable>
          <View style={{}}>
            <CandlestickChart.Provider data={data}>
              <CandlestickChart>
                <CandlestickChart.Candles />
              </CandlestickChart>
            </CandlestickChart.Provider>
          </View>

          <Pressable style={styles.coinCointainer1}>
            <View style={styles.coinSymbol1}>
              <Text style={{color: '#000'}}>{name}</Text>
              <Image
                source={{
                  uri: `${image}`,
                  width: 50,
                  height: 50,
                }}
              />
            </View>
            <View style={styles.coinMarket}>
              <Text style={{color: '#000'}}>No coins yet</Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

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
  coinCointainer1: {
    height: height * 0.1,
    backgroundColor: '#fff',
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 12,
  },
  coinSymbol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 40,
    gap: 10,
    textAlign: 'center',
  },
  coinSymbol1: {
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

export default Chart;
