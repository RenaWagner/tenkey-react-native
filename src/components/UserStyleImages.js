import React, {Component} from 'react';
import {FlatList, Image} from 'react-native';
import {
  Container,
  View,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Icon,
} from 'native-base';

export default function UserStyleImages(props) {
  const userStyleData = props.data;
  return (
    <FlatList
      data={userStyleData}
      keyExtractor={item => item.id}
      renderItem={item => (
        <Card style={{elevation: 3}}>
          <CardItem>
            <Left>
              <Icon name="person-circle-outline" />
              <Body>
                <Text>Your styles</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{height: 300, flex: 1}}
              source={{uri: item.imageUrl}}
            />
          </CardItem>
          <CardItem>
            <Icon name="heart" style={{color: '#ED4A6A'}} />
            <Text>{item.rating} / 5</Text>
          </CardItem>
          <CardItem>
            <Text>{item.comment}</Text>
          </CardItem>
        </Card>
      )}
    />
  );
}
