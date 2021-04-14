import React, {useState} from 'react';
import {
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
  Content,
  Container,
  View,
  Root,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../store/user/actions';
import {selectUserToken} from '../store/user/selectors';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

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
                width: 300,
              }}>
              Log In
            </Text>

            <Form>
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
              onPress={() => dispatch(login(email, password))}>
              <Text> Login </Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
}
