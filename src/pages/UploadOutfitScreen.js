import {Button, Container, Content, Text} from 'native-base';
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function UploadOutfitScreen() {
  const [photo, setPhoto] = useState('');
  const selectPhotoTapped = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      // Use launchCamera to use camera
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response.uri;
        const type = response.type;
        const name = response.fileName;
        const source = {
          uri,
          type,
          name,
        };
        // You can also display the image using data:
        // const source = {uri: 'data:image/jpeg;base64,' + response.data};
        cloudinaryUpload(source);
      }
    });
  };

  const cloudinaryUpload = async photo => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'mo1urvni');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/rswagner/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );

    const file = await res.json();
    console.log('file', file);
    const url = file.url;
    setPhoto(url);
  };

  console.log(photo);

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
              marginTop: 20,
              marginBottom: 20,
              textAlign: 'center',
            }}>
            Upload your outfit
          </Text>
        </View>
        <View>
          {/* <Image
            style={{resizeMode: 'cover', width: '100%', height: '100%'}}
            source={{
              uri:
                'https://res.cloudinary.com/rswagner/image/upload/v1619709436/mobile-upload/oauzu5i5krsz7t1qasrp.jpg',
            }}
          /> */}
          <Image
            style={{resizeMode: 'cover', width: '100%', height: '100%'}}
            source={{
              uri: photo,
            }}
          />
          <View>
            <Button onPress={selectPhotoTapped}>
              <Text>Upload from Image Gallery</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
}
