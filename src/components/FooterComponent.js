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
            navigation.navigate('Home');
          }}>
          <Icon name="calendar" />
          <Text>Today</Text>
        </Button>
        <Button
          vertival
          //   onPress={() => {
          //     navigation.navigate('Search By Keywords');
          //   }}
        >
          <Icon name="partly-sunny-outline" />
          <Text>Forecast</Text>
        </Button>
        <Button
          vertival
          //   onPress={() => {
          //     navigation.navigate('Search By Keywords');
          //   }}
        >
          <Icon name="shirt-outline" />
          <Text>Style</Text>
        </Button>
        <Button
          vertival
          //   onPress={() => {
          //     navigation.navigate('Search By Keywords');
          //   }}
        >
          <Icon name="person-circle" />
          <Text>Personal</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
