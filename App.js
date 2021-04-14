// App.js

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ForecastScreen from './src/pages/ForecastScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import {Root} from 'native-base';
import TodayWeather from './src/pages/TodayWeather';
import StyleScreen from './src/pages/StyleScreen';
import WeatherScreen from './src/pages/WeatherScreen';
import TodayStyle from './src/pages/TodayStyle';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer>
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
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </Provider>
  );
}
export default App;
