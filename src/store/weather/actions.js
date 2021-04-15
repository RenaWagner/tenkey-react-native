import axios from 'axios';
const API_URL = `https://api.weatherbit.io/v2.0`;
const API_KEY = '05b74c16ea7a4df39d05d7bc4cb2ddf8';

export const fetchWeatherLocation = currentLocation => async (
  dispatch,
  getState,
) => {
  try {
    const res = await axios.get(
      `${API_URL}/current/?lat=${currentLocation.lattitude}&lon=${currentLocation.longtitude}&key=${API_KEY}`,
    );
    dispatch(fetchedWeatherData(res.data.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchedWeatherData = data => ({
  type: 'weather/fetch',
  payload: data,
});

export const fetchForecast = currentLocation => async (dispatch, getState) => {
  dispatch(weatherLoading());
  try {
    const res = await axios.get(
      `${API_URL}/forecast/daily?lat=${currentLocation.lattitude}&lon=${currentLocation.longtitude}&key=${API_KEY}`,
    );
    dispatch(fetchedForecastData(res.data.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchedForecastData = data => ({
  type: 'weatherForecast/fetch',
  payload: data,
});

export const weatherLoading = () => ({
  type: 'weather/loading',
});
