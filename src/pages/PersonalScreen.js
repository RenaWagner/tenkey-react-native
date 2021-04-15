import {Button, Container, Content, Text, View} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import FooterComponent from '../components/FooterComponent';
import {logout} from '../store/user/actions';

export default function PersonalScreen() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View>
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
