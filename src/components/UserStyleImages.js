import React from 'react';
import {FlatList, Image} from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Icon,
  Right,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';

export default function UserStyleImages(props) {
  const userStyleData = props.data;
  const navigation = useNavigation();

  const Item = ({item}) => (
    <Card style={{elevation: 3}}>
      <CardItem>
        <Left>
          <Icon name="person-circle-outline" />
          <Body>
            <Text>Your outfit</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image style={{height: 300, flex: 1}} source={{uri: item.imageUrl}} />
      </CardItem>
      <CardItem>
        <Left>
          <Icon name="heart" style={{color: '#ED4A6A'}} />
          <Text>{item.rating} / 5</Text>
        </Left>
        <Right>
          <Button
            small
            bordered
            success
            onPress={() => {
              navigation.navigate('UpdateStyle', item.id);
            }}>
            <Text>Update</Text>
          </Button>
        </Right>
      </CardItem>
      <CardItem>
        <Text>{item.comment}</Text>
      </CardItem>
    </Card>
  );

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <FlatList
      data={userStyleData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
