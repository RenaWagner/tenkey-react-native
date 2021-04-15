import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './src/store';
import {Root} from 'native-base';
import {bootstrapLoginState} from './src/store/user/actions';
import {selectUserToken} from './src/store/user/selectors';
import LoggedInNavigator from './src/navigators/LoggedInNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';

const Stack = createStackNavigator();

function BeforeApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectUserToken);

  return (
    <NavigationContainer>
      {isLoggedIn ? <LoggedInNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Root>
        <BeforeApp />
      </Root>
    </Provider>
  );
}
