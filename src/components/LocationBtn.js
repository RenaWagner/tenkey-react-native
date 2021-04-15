import React from 'react';
import {Button, Icon} from 'native-base';
import {Text, StyleSheet, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {fetchWeatherLocation, weatherLoading} from '../store/weather/actions';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  button: {
    margin: 'auto',
    marginTop: 20,
  },
  text: {
    color: 'white',
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default function LocationButton(props) {
  const type = props.type;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const clickedPlace = () => {
    dispatch(weatherLoading());
    Geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude.toFixed(3);
      const long = position.coords.longitude.toFixed(3);
      const location = {
        lattitude: lat,
        longtitude: long,
      };
      dispatch(fetchWeatherLocation(location));
      type === 'weather'
        ? navigation.navigate('TodayWeather')
        : navigation.navigate('TodayStyle');
    });
  };

  return (
    <View>
      <Button iconLeft success style={styles.button} onPress={clickedPlace}>
        <Icon name="partly-sunny-outline" />
        <Text style={styles.text}>My location</Text>
      </Button>
    </View>
  );
}
