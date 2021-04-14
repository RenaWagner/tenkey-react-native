import {useNavigation} from '@react-navigation/core';
import {Button, Container, Content, Icon, Root, Text} from 'native-base';
import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 800,
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
    'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
};

export default function WelcomeScreen() {
  const navigation = useNavigation();
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
                  Comfort Style
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Find the perfet style that matches the weather and temperature
                </Text>
                <View>
                  <Button
                    iconLeft
                    success
                    style={{
                      margin: 'auto',
                      marginTop: 20,
                    }}
                    onPress={() => navigation.navigate('Login')}>
                    <Icon name="key-outline" />
                    <Text
                      style={{
                        color: 'white',
                        paddingRight: 20,
                        paddingLeft: 20,
                      }}>
                      Log In
                    </Text>
                  </Button>
                </View>
                <View>
                  <Button
                    iconLeft
                    info
                    style={{
                      margin: 'auto',
                      marginTop: 20,
                    }}
                    onPress={() => navigation.navigate('Signup')}>
                    <Icon name="person-add-outline" />
                    <Text
                      style={{
                        color: 'white',
                        paddingRight: 20,
                        paddingLeft: 20,
                      }}>
                      Signup
                    </Text>
                  </Button>
                </View>
              </View>
            </ImageBackground>
          </View>
        </Content>
      </Container>
    </Root>
  );
}
