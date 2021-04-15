import React from 'react';
import {View, Image} from 'react-native';
import {
  Container,
  Spinner,
  Text,
  Button,
  Icon,
  List,
  ListItem,
  Content,
} from 'native-base';
import {useSelector} from 'react-redux';
import {selectTodayWeather, selectLoading} from '../store/weather/selectors';
import {useNavigation} from '@react-navigation/core';
import FooterComponent from '../components/FooterComponent';

export default function WeatherToday() {
  const todayWeatherArray = useSelector(selectTodayWeather);
  const todayWeather = todayWeatherArray[0];
  const isLoading = useSelector(selectLoading);
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        {isLoading ? <Spinner color="blue" /> : <></>}
        {todayWeather ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                marginTop: 10,
                textAlign: 'center',
              }}>
              Today's weather
            </Text>
            <Text
              note
              style={{
                textAlign: 'center',
              }}>
              {todayWeather.city_name}
            </Text>
            <Image
              source={{
                uri: `https://www.weatherbit.io/static/img/icons/${todayWeather.weather.icon}.png`,
              }}
              style={{width: 200, height: 200}}
            />
            <List>
              <ListItem>
                <Icon active name="thermometer" />
                <Text> Temperature: {todayWeather.temp}°C</Text>
              </ListItem>
              <ListItem>
                <Icon active name="thermometer-outline" />
                <Text> Feeling Temperature: {todayWeather.app_temp}°C</Text>
              </ListItem>
              <ListItem>
                <Icon active name="rainy-outline" />
                <Text> Rain: {todayWeather.precip.toFixed(1)}mm/hr</Text>
              </ListItem>
              <ListItem>
                <Icon active name="navigate-circle-outline" />
                <Text>
                  {' '}
                  Wind: {todayWeather.wind_cdir}{' '}
                  {todayWeather.wind_spd.toFixed(1)}m/s{' '}
                </Text>
              </ListItem>
            </List>
            <View>
              <Button
                transparent
                onPress={() => navigation.navigate('Forecast')}>
                <Icon active name="partly-sunny-outline" />
                <Text>Weather forecast of this location</Text>
              </Button>
            </View>
          </View>
        ) : (
          <></>
        )}
      </Content>
      <FooterComponent />
    </Container>
  );
}
