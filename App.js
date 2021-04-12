// App.js

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ForecastScreen from './src/pages/ForecastScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import HomeScreen from './src/pages/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
