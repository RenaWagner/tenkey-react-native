import {Text, View} from 'native-base';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectTodayWeather} from '../store/weather/selectors';

export default function StylePage() {
  const weatherData = useSelector(selectTodayWeather);
  const todayWeather = useSelector(selectTodayWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todayWeather[0]) {
      const temp = Math.round(todayWeather[0].app_temp);
      dispatch(fetchUserStyle(temp));
      dispatch(fetchPublicStyleRating(temp));
    }
  }, [dispatch, todayWeather]);

  return (
    <div>
      {weatherData.length ? (
        <View>
          <Text>
            Today's style recommendation in {todayWeather[0].city_name}
          </Text>
          {/* <StyleCard /> */}
        </View>
      ) : (
        <></>
      )}
    </div>
  );
}
