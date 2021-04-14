import {Footer, FooterTab, Button, Icon, Text} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function FooterComponent() {
  const navigation = useNavigation();
  return (
    <Footer>
      <FooterTab>
        <Button
          vertival
          onPress={() => {
            navigation.navigate('Style');
          }}>
          <Icon name="shirt-outline" />
          <Text>Style</Text>
        </Button>
        <Button
          vertival
          onPress={() => {
            navigation.navigate('Weather');
          }}>
          <Icon name="partly-sunny-outline" />
          <Text>Weather</Text>
        </Button>
        <Button
          vertival
          onPress={() => {
            navigation.navigate('Personal');
          }}>
          <Icon name="person-circle" />
          <Text>Personal</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
