import React, {Component} from 'react';
import {FlatList, Image} from 'react-native';
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Icon,
} from 'native-base';

export default function PublicStyleImages(props) {
  const publicStyleData = props.data;
  return (
    <FlatList
      data={publicStyleData}
      keyExtractor={item => item.id}
      renderItem={item => (
        <Card style={{elevation: 3}}>
          <CardItem>
            <Left>
              <Icon name="people-circle-outline" />
              <Body>
                <Text>General styles</Text>
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
            {/* <Text>{item.users?.publicstyleRating.rating} / 5</Text> */}
          </CardItem>
        </Card>
      )}
    />
  );
}
