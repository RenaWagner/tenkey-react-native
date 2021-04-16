import {Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from '../store/user/selectors';

export default function ProfileSettingScreen() {
  const userData = useSelector(selectUser);
  return (
    <View>
      <Text>Aloha profile</Text>
    </View>
  );
}
