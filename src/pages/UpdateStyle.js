import {
  Container,
  Content,
  Form,
  Label,
  Text,
  Textarea,
  Picker,
  Item,
  Icon,
  Button,
} from 'native-base';
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FooterComponent from '../components/FooterComponent';
import {selectUserStyleWithId} from '../store/recommendation/selector';
import {updateRatingUserStyle} from '../store/recommendation/actions';
import {updateCommentUserStyle} from '../store/recommendation/actions';

export default function UpdateStyle({route}) {
  const id = route.params;
  const dispatch = useDispatch();
  const styleToUpdate = useSelector(selectUserStyleWithId(parseInt(id)));
  const [rating, setRating] = useState(null || styleToUpdate?.rating);
  const [comment, setComment] = useState('' || styleToUpdate?.comment);

  const submitUpdate = () => {
    const num_id = parseInt(id);
    dispatch(updateRatingUserStyle(num_id, rating));
    dispatch(updateCommentUserStyle(num_id, comment));
  };

  return (
    <Container>
      <Content>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 15,
              textAlign: 'center',
              width: 300,
            }}>
            Update your outfit
          </Text>
          <Image
            style={{
              resizeMode: 'cover',
              marginTop: 15,
              width: '60%',
              height: 350,
            }}
            source={{uri: styleToUpdate.imageUrl}}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Form
              floatingLabel
              style={{
                fontSize: 25,
                marginTop: 15,
                textAlign: 'center',
                width: 300,
              }}>
              <Label>Comment: </Label>
              <Textarea
                rowSpan={2}
                bordered
                value={comment}
                onChangeText={setComment}
              />
            </Form>
            <Item picker inlineLabel style={{marginTop: 15, width: 200}}>
              <Label>Rating</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Choose..."
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={rating}
                onValueChange={setRating}>
                <Picker.Item label="1" value="1"></Picker.Item>
                <Picker.Item label="2" value="2"></Picker.Item>
                <Picker.Item label="3" value="3"></Picker.Item>
                <Picker.Item label="4" value="4"></Picker.Item>
                <Picker.Item label="5" value="5"></Picker.Item>
              </Picker>
            </Item>
          </View>
          <View>
            <Button
              success
              style={{
                marginTop: 20,
                textAlign: 'center',
              }}
              onPress={submitUpdate}>
              <Text>Submit</Text>
            </Button>
          </View>
        </View>
      </Content>
      <FooterComponent />
    </Container>
  );
}
