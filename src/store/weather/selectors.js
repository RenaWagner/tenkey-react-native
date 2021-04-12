export const selectTodayWeather = reduxState => reduxState.weather.todayWeather;

export const selectLocation = reduxState => reduxState.weather.location;

export const selectForecast = reduxState => reduxState.weather.forecast;

export const selectLoading = reduxState => reduxState.weather.loading;

export const selectSpecificForecast = date => reduxState => {
  const clonedForecast = [...reduxState.weather.forecast];
  const specificDateForecast = clonedForecast.filter(forecast => {
    return forecast.datetime === date;
  });
  return specificDateForecast;
};
