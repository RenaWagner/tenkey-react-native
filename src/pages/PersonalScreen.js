import {useNavigation} from '@react-navigation/core';
import {
  Button,
  Container,
  Content,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  View,
} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import FooterComponent from '../components/FooterComponent';
import {logout} from '../store/user/actions';

export default function PersonalScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <View>
          <View>
            <List>
              <ListItem button onPress={() => navigation.navigate('Upload')}>
                <Left>
                  <Text>Upload your own outfit</Text>
                </Left>
                <Right>
                  <Icon name="chevron-forward" />
                </Right>
              </ListItem>
              <ListItem button onPress={() => navigation.navigate('Profile')}>
                <Left>
                  <Text>Update profile setting</Text>
                </Left>
                <Right>
                  <Icon name="chevron-forward" />
                </Right>
              </ListItem>
            </List>
          </View>
          <View
            style={{
              marginTop: 15,
            }}>
            <Button onPress={() => dispatch(logout)} style={{marginTop: 30}}>
              <Text>Log out</Text>
            </Button>
          </View>
        </View>
      </Content>
      <FooterComponent />
    </Container>
  );
}
