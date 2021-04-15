// components/HomeScreen.js

import {Container, Content, Root} from 'native-base';
import React from 'react';
import {Text, View, Button, ImageBackground, StyleSheet} from 'react-native';
import FooterComponent from '../components/FooterComponent';
import LocationButton from '../components/LocationBtn';
import LocationInput from '../components/LocationInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 700,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

const image = {
  uri:
    'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
};

export default function WeatherScreen() {
  return (
    <Root>
      <Container>
        <Content>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground source={image} style={styles.image}>
              <View
                style={{
                  backgroundColor: `rgba(128,128,128, 0.4)`,
                  width: '90%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  left: '5%',
                  height: 500,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 50,
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Check Weather
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Find out today's weather at your location
                </Text>
                <LocationButton type={'weather'} />
                <LocationInput type={'weather'} />
              </View>
            </ImageBackground>
          </View>
        </Content>
        <FooterComponent />
      </Container>
    </Root>
  );
}
