import {Button, Text, View} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../store/user/actions';

export default function PersonalScreen() {
  const dispatch = useDispatch();

  return (
    <View>
      <Button onPress={() => dispatch(logout)}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
}
