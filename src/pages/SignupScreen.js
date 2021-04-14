import {
  Button,
  Container,
  Content,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Picker,
  Text,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signup} from '../store/user/actions';

export default function SignupScreen() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          <View>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                marginTop: 20,
                textAlign: 'center',
              }}>
              Sign Up
            </Text>
            <Form>
              <Item floatingLabel>
                <Label>First Name</Label>
                <Input value={firstName} onChangeText={setFirstName} />
              </Item>
              <Item floatingLabel>
                <Label>Last Name</Label>
                <Input value={lastName} onChangeText={setLastName} />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input value={email} onChangeText={setEmail} />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                />
              </Item>
              <Item picker inlineLabel style={{marginTop: 40}}>
                <Label>Fashion type</Label>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
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
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined}}
                  placeholder="Choose..."
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={sensitiveness}
                  onValueChange={setSensitiveness}>
                  <Picker.Item
                    label="I'm not sensitive to heat/cold"
                    value="none"
                  />
                  <Picker.Item label="I'm sensitive to heat" value="heat" />
                  <Picker.Item label="I'm sensitive to cold" value="cold" />
                </Picker>
              </Item>
            </Form>
          </View>
          <View>
            <Button
              primary
              style={{
                margin: 'auto',
                marginTop: 20,
                textAlign: 'center',
              }}
              onPress={() =>
                dispatch(
                  signup(
                    firstName,
                    lastName,
                    email,
                    password,
                    type,
                    sensitiveness,
                  ),
                )
              }>
              <Text> Signup </Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
}
