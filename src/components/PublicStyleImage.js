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
import {SafeAreaView} from 'react-native-safe-area-context';

const Item = ({item}) => (
  <Card style={{elevation: 3}}>
    <CardItem>
      <Left>
        <Icon name="people-circle-outline" />
        <Body>
          <Text>General outfits</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image style={{height: 300, flex: 1}} source={{uri: item.imageUrl}} />
    </CardItem>
    {/* <CardItem>
      <Icon name="heart" style={{color: '#ED4A6A'}} />
      <Text>{item.users?.publicstyleRating.rating} / 5</Text>
    </CardItem> */}
  </Card>
);

export default function PublicStyleImages(props) {
  const publicStyleData = props.data;

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <FlatList
      data={publicStyleData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
