import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../pages/LoginScreen';
import WelcomeScreen from '../pages/WelcomeScreen';
import SignupScreen from '../pages/SignupScreen';

const authStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <authStack.Navigator initialRouteName="Welcome">
      <authStack.Screen name="Welcome" component={WelcomeScreen} />
      <authStack.Screen name="Login" component={LoginScreen} />
      <authStack.Screen name="Signup" component={SignupScreen} />
    </authStack.Navigator>
  );
}
