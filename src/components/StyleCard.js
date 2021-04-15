import React from 'react';
import {Spinner, Text, View} from 'native-base';
import {useSelector} from 'react-redux';
import {
  selectPublicStylesWithRating,
  selectStyleLoading,
  selectUserStyles,
} from '../store/recommendation/selector';
import UserStyleImages from './UserStyleImages';
import PublicStyleImages from './PublicStyleImage';
import {ScrollView} from 'react-native';

export default function StyleCard() {
  const userStyles = useSelector(selectUserStyles);
  const publicStyleWithRating = useSelector(selectPublicStylesWithRating);
  const isLoading = useSelector(selectStyleLoading);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        {isLoading ? <Spinner color="green"></Spinner> : <></>}
        <View style={{width: 300}}>
          {userStyles.length && publicStyleWithRating.length ? (
            <View>
              <UserStyleImages data={userStyles} />
              <PublicStyleImages data={publicStyleWithRating} />
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
