import {
  Button,
  Container,
  Form,
  Item as FormItem,
  Input,
  Label,
  Text,
  View,
} from 'native-base';
import {TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import cities from '../data/cities.json';
import {fetchWeatherLocation, weatherLoading} from '../store/weather/actions';
import {useNavigation} from '@react-navigation/native';

export default function LocationInput() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [chosenCities, setChosenCities] = useState([]);
  const navigation = useNavigation();

  const formSubmit = () => {
    const cityNames = cities.filter(item => {
      return item.city_name.toLowerCase().indexOf(city.toLowerCase()) >= 0;
    });

    if (!cityNames.length) {
      alert('Cannot find the match with the typed city name');
    } else if (cityNames.length === 1) {
      const location = {
        lattitude: cityNames[0].lat.toString(),
        longtitude: cityNames[0].lon.toString(),
      };
      dispatch(fetchWeatherLocation(location));
    } else {
      setChosenCities(cityNames);
    }
    setCity('');
  };

  console.log(chosenCities);

  return (
    <Container style={{width: '100%', marginTop: 20}}>
      <Form>
        <FormItem floatingLabel>
          <Label>Search by city name:</Label>
          <Input
            value={city}
            onChangeText={setCity}
            placeholder="Find the weather"
          />
        </FormItem>
        <Button bordered success onPress={formSubmit}>
          <Text>Search</Text>
        </Button>
      </Form>
      {chosenCities.length ? (
        <View style={{width: '100%'}}>
          {chosenCities.map(city => (
            <Button
              key={city.city_id}
              onPress={() => {
                const location = {
                  lattitude: city.lat.toString(),
                  longtitude: city.lon.toString(),
                };
                setChosenCities([]);
                setCity('');
                dispatch(weatherLoading());
                dispatch(fetchWeatherLocation(location));
                navigation.navigate('TodayWeather');
              }}>
              {city.country_code === 'US' ? (
                <Text>
                  {city.city_name}, {city.state_code}, {city.country_code}
                </Text>
              ) : (
                <Text>
                  {city.city_name}, {city.country_code}
                </Text>
              )}
            </Button>
          ))}
        </View>
      ) : (
        <></>
      )}
    </Container>
  );
}
