// App.js

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ForecastScreen from './src/pages/ForecastScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import HomeScreen from './src/pages/HomeScreen';
import {Root} from 'native-base';
import TodayWeather from './src/pages/TodayWeather';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#45b5fe',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Forecast" component={ForecastScreen} />
            <Stack.Screen name="Today's Weather" component={TodayWeather} />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </Provider>
  );
}
export default App;
