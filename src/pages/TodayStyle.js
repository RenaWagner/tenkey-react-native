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
  }, [dispatch, isLoggedIn, todayWeather]);

  return (
    <div>
      {weatherData.length ? (
        <div>
          <h4 className="mt-3">
            Today's style recommendation in {todayWeather[0].city_name}
          </h4>
          <StyleCard />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
