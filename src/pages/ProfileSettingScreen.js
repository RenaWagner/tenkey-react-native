import {
  Body,
  Container,
  Content,
  Form,
  Icon,
  Left,
  List,
  ListItem,
  Picker,
  Right,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FooterComponent from '../components/FooterComponent';
import {updateProfile} from '../store/user/actions';
import {selectUser, selectUserToken} from '../store/user/selectors';

export default function ProfileSettingScreen() {
  const userData = useSelector(selectUser);
  const token = useSelector(selectUserToken);

  console.log(token);
  const dispatch = useDispatch();
  const [type, setType] = useState(userData?.clothingType || ' ');
  const [sensitiveness, setSensitiveness] = useState(
    userData?.sensitiveness || ' ',
  );

  console.log('userData', userData);

  useEffect(() => {
    const data = {
      type: type,
      sensitiveness: sensitiveness,
    };
    dispatch(updateProfile(data));
  }, [dispatch, type, sensitiveness]);

  return (
    <Container>
      <Content>
        {userData ? (
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
                    <Text>{userData.firstName}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Last Name:</Text>
                  </Left>
                  <Body>
                    <Text>{userData.lastName}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Email:</Text>
                  </Left>
                  <Body>
                    <Text>{userData.email}</Text>
                  </Body>
                </ListItem>
                <Form>
                  <ListItem picker>
                    <Left>
                      <Text>Sensitivity:</Text>
                    </Left>
                    <Body>
                      <Picker
                        mode="dropdown"
                        placeholderStyle={{color: '#bfc6ea'}}
                        placeholderIconColor="#007aff"
                        selectedValue={sensitiveness}
                        onValueChange={setSensitiveness}>
                        <Picker.Item label="Heat" value="heat" />
                        <Picker.Item label="Cold" value="cold" />
                        <Picker.Item label="None" value="none" />
                      </Picker>
                    </Body>
                    <Right>
                      <Icon name="chevron-down" />
                    </Right>
                  </ListItem>
                </Form>
                <Form>
                  <ListItem picker>
                    <Left>
                      <Text>Fashion Type:</Text>
                    </Left>
                    <Body>
                      <Picker
                        mode="dropdown"
                        placeholderStyle={{color: '#bfc6ea'}}
                        placeholderIconColor="#007aff"
                        selectedValue={type}
                        onValueChange={setType}>
                        <Picker.Item label="Women" value="female" />
                        <Picker.Item label="Men" value="male" />
                      </Picker>
                    </Body>
                    <Right>
                      <Icon name="chevron-down" />
                    </Right>
                  </ListItem>
                </Form>
              </List>
            </View>
          </View>
        ) : (
          <></>
        )}
      </Content>
      <FooterComponent />
    </Container>
  );
}
