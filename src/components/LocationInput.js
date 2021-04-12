import {Button, Form, FormItem, Label, Text, View} from 'native-base';
import {TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import cities from '../data/cities.json';
import {fetchWeatherLocation, weatherLoading} from '../store/weather/actions';

export default function LocationInput() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [chosenCities, setChosenCities] = useState([]);

  const formSubmit = event => {
    event.preventDefault();
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

  return (
    <View>
      <Form>
        <FormItem floatingLabel>
          <Label>Search by city name:</Label>
          <TextInput
            type="text"
            value={city}
            onChangeText={setCity}
            placeholder="Find the weather"
          />
        </FormItem>
        <Button bordered success>
          <Text>Search</Text>
        </Button>
      </Form>
      {/* {chosenCities.length ? (
        <div style={{width: '100%'}}>
          {chosenCities.map(city => (
            <Link to="weatherToday" smooth={true} key={city.city_id}>
              <button
                className="btn btn-light ml-1 mr-1 mb-1 mt-2"
                style={{height: 37.986}}
                onClick={() => {
                  const location = {
                    lattitude: city.lat.toString(),
                    longtitude: city.lon.toString(),
                  };
                  setChosenCities([]);
                  setCity('');
                  dispatch(weatherLoading());
                  dispatch(fetchWeatherLocation(location));
                }}>
                {city.country_code === 'US' ? (
                  <p>
                    {city.city_name}, {city.state_code}, {city.country_code}
                  </p>
                ) : (
                  <p>
                    {city.city_name}, {city.country_code}
                  </p>
                )}
              </button>
            </Link>
          ))}
        </div>
      ) : (
        <p></p>
      )} */}
    </View>
  );
}
