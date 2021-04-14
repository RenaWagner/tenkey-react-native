import {Container, Footer} from 'native-base';
import React from 'react';
import {Text, View} from 'react-native';
import FooterComponent from '../components/FooterComponent';

export default function ForecastScreen({navigation}) {
  return (
    <Container>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
          }}>
          Forecast screen!
        </Text>
      </View>
    </Container>
  );
}
