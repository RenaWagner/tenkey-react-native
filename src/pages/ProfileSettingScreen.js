import {useNavigation} from '@react-navigation/core';
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Left,
  List,
  ListItem,
  Text,
} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import FooterComponent from '../components/FooterComponent';
import {selectUser} from '../store/user/selectors';

export default function ProfileSettingScreen() {
  const navigation = useNavigation();
  const userData = useSelector(selectUser);

  return (
    <Container>
      <Content>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                marginTop: 20,
                marginBottom: 20,
                textAlign: 'center',
                width: 370,
              }}>
              Your Profile
            </Text>
            <List>
              <ListItem>
                <Left>
                  <Text>First Name:</Text>
                </Left>
                <Body>
                  <Text>{userData?.firstName}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Last Name:</Text>
                </Left>
                <Body>
                  <Text>{userData?.lastName}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Email:</Text>
                </Left>
                <Body>
                  <Text>{userData?.email}</Text>
                </Body>
              </ListItem>
              <Form>
                <ListItem picker>
                  <Left>
                    <Text>Sensitivity:</Text>
                  </Left>
                  <Body>
                    <Text>{userData?.sensitiveness}</Text>
                  </Body>
                </ListItem>
              </Form>
              <Form>
                <ListItem picker>
                  <Left>
                    <Text>Fashion Type:</Text>
                  </Left>
                  <Body>
                    <Text>{userData?.clothingType}</Text>
                  </Body>
                </ListItem>
              </Form>
            </List>
          </View>
          <View
            style={{
              margin: 'auto',
              marginTop: 20,
              textAlign: 'center',
            }}>
            <Button
              success
              onPress={() => {
                navigation.navigate('UpdateProfile');
              }}>
              <Text>Update Profile</Text>
            </Button>
          </View>
        </View>
      </Content>
      <FooterComponent />
    </Container>
  );
}
