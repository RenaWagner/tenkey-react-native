import {
  Button,
  Container,
  Form,
  Item as FormItem,
  Input,
  Label,
  Text,
  View,
  Content,
} from 'native-base';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import cities from '../data/cities.json';
import {fetchWeatherLocation, weatherLoading} from '../store/weather/actions';
import {useNavigation} from '@react-navigation/native';

export default function LocationInput(props) {
  const type = props.type;
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [chosenCities, setChosenCities] = useState([]);
  const navigation = useNavigation();

  const formSubmit = () => {
    if (city === '') {
      Alert.alert('Please type city.');
    }
    const cityNames = cities.filter(item => {
      return item.city_name.toLowerCase().indexOf(city.toLowerCase()) >= 0;
    });

    if (!cityNames.length) {
      alert('Cannot find the match with the typed city name');
    } else {
      setChosenCities(cityNames);
    }
    setCity('');
  };

  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View style={{width: 300}}>
        <Form>
          <FormItem floatingLabel>
            <Label style={{color: 'white'}}>Search by city name:</Label>
            <Input
              value={city}
              onChangeText={setCity}
              placeholder="Find the weather"
            />
          </FormItem>
        </Form>
      </View>
      <View style={{marginTop: 10}}>
        <Button warning onPress={formSubmit}>
          <Text>Search</Text>
        </Button>
      </View>
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
                type === 'weather'
                  ? navigation.navigate('TodayWeather')
                  : navigation.navigate('TodayStyle');
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
    </View>
  );
}
