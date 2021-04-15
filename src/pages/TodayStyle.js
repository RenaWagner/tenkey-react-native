import {Container, Content, Text, View} from 'native-base';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FooterComponent from '../components/FooterComponent';
import StyleCard from '../components/StyleCard';
import {
  fetchPublicStyleRating,
  fetchUserStyle,
} from '../store/recommendation/actions';
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
    <Container>
      <Content>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {weatherData.length ? (
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
                Today's style recommendation in {todayWeather[0].city_name}
              </Text>
              <StyleCard />
            </View>
          ) : (
            <></>
          )}
        </View>
      </Content>
      <FooterComponent />
    </Container>
  );
}
