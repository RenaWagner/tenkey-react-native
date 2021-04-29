import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Icon,
  Item,
  Label,
  Left,
  ListItem,
  Picker,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import FooterComponent from '../components/FooterComponent';
import {updateProfile} from '../store/user/actions';

export default function UpdateProfile() {
  const dispatch = useDispatch();
  const [type, setType] = useState('');
  const [sensitiveness, setSensitiveness] = useState('');

  return (
    <Container>
      <Content>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 20,
              marginBottom: 20,
              textAlign: 'center',
            }}>
            Update Profile
          </Text>
          <Form>
            <Item picker inlineLabel style={{marginTop: 40}}>
              <Label>Fashion type</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="chevron-down-outline" />}
                style={{width: undefined}}
                placeholder="Choose..."
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={type}
                onValueChange={setType}>
                <Picker.Item label="Women" value="female" />
                <Picker.Item label="Men" value="male" />
              </Picker>
            </Item>
            <Item picker inlineLabel style={{marginTop: 20}}>
              <Label>Sensitivity to temperature:</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="chevron-down-outline" />}
                style={{width: undefined}}
                placeholder="Choose..."
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={sensitiveness}
                onValueChange={setSensitiveness}>
                <Picker.Item label="None" value="none" />
                <Picker.Item label="Heat" value="heat" />
                <Picker.Item label="Cold" value="cold" />
              </Picker>
            </Item>
          </Form>
          <View
            style={{
              margin: 'auto',
              marginTop: 20,
              textAlign: 'center',
            }}>
            <Button
              onPress={() => {
                const data = {
                  type: type,
                  sensitiveness: sensitiveness,
                };
                console.log('data', data);
                dispatch(updateProfile(data));
              }}>
              <Text>Update</Text>
            </Button>
          </View>
        </View>
      </Content>
      <FooterComponent />
    </Container>
  );
}
