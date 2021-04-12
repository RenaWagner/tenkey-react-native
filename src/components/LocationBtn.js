import React, {useEffect, useState} from 'react';
import {Button, Icon} from 'native-base';
import {Text, StyleSheet, View} from 'react-native';

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

export default function LocationButton() {
  //   const dispatch = useDispatch();
  //   const [currentLocation, setCurrentLocation] = useState({
  //     lattitude: "",
  //     longtitude: "",
  //   });

  //   const clickedPlace = () => {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       const lat = position.coords.latitude.toFixed(3);
  //       const long = position.coords.longitude.toFixed(3);
  //       setCurrentLocation({ lattitude: lat, longtitude: long });
  //     });
  //   };

  //   useEffect(() => {
  //     if (currentLocation.lattitude && currentLocation.longtitude) {
  //       dispatch(fetchWeatherLocation(currentLocation));
  //     }
  //   }, [currentLocation, dispatch]);

  return (
    <View>
      <Button iconLeft success style={styles.button}>
        <Icon name="partly-sunny-outline" />
        <Text style={styles.text}>My location</Text>
      </Button>
    </View>
  );
}
