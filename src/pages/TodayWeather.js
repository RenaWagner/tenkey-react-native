import React from 'react';
import {View} from 'react-native';
import {
  Container,
  Content,
  Spinner,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Body,
  Image,
  Left,
  Right,
  Thumbnail,
  List,
  ListItem,
} from 'native-base';
import {useSelector} from 'react-redux';
import {selectTodayWeather, selectLoading} from '../store/weather/selectors';

export default function WeatherToday() {
  const todayWeatherArray = useSelector(selectTodayWeather);
  const todayWeather = todayWeatherArray[0];
  const isLoading = useSelector(selectLoading);

  return (
    <Container>
      {isLoading ? <Spinner color="blue" /> : <></>}
      {todayWeather ? (
        <View>
          <Text>Today's weather</Text>
          <Text note>{todayWeather.city_name}</Text>
          {/* <Image
            source={{
              uri: `https://www.weatherbit.io/static/img/icons/${todayWeather.weather.icon}.png`,
            }}
            style={{height: 200, width: null, flex: 1}}
          /> */}
          <List>
            <ListItem>
              <Icon active name="chatbubbles" />
              <Text> Temperature: {todayWeather.temp}°C</Text>
            </ListItem>
            <ListItem>
              <Icon active name="chatbubbles" />
              <Text> Feeling Temperature: {todayWeather.app_temp}°C</Text>
            </ListItem>
            <ListItem>
              <Icon active name="chatbubbles" />
              <Text> Rain: {todayWeather.precip.toFixed(1)}mm/hr</Text>
            </ListItem>
            <ListItem>
              <Icon active name="chatbubbles" />
              <Text>
                {' '}
                Wind: {todayWeather.wind_cdir}{' '}
                {todayWeather.wind_spd.toFixed(1)}m/s{' '}
              </Text>
            </ListItem>
          </List>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>Weather forecast of this location</Text>
          </Button>
        </View>
      ) : (
        <></>
      )}
    </Container>
  );
}
