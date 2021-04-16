import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TodayWeather from '../pages/TodayWeather';
import StyleScreen from '../pages/StyleScreen';
import WeatherScreen from '../pages/WeatherScreen';
import TodayStyle from '../pages/TodayStyle';
import ForecastScreen from '../pages/ForecastScreen';
import PersonalScreen from '../pages/PersonalScreen';
import UpdateStyle from '../pages/UpdateStyle';
import UploadOutfitScreen from '../pages/UploadOutfitScreen';
import ProfileSettingScreen from '../pages/ProfileSettingScreen';

const Stack = createStackNavigator();

export default function LoggedInNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Style"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#45b5fe',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Style" component={StyleScreen} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
      <Stack.Screen name="Forecast" component={ForecastScreen} />
      <Stack.Screen name="TodayWeather" component={TodayWeather} />
      <Stack.Screen name="TodayStyle" component={TodayStyle} />
      <Stack.Screen name="Personal" component={PersonalScreen} />
      <Stack.Screen name="UpdateStyle" component={UpdateStyle} />
      <Stack.Screen name="Upload" component={UploadOutfitScreen} />
      <Stack.Screen name="Profile" component={ProfileSettingScreen} />
    </Stack.Navigator>
  );
}
