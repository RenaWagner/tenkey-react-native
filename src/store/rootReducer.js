// src/store/reducer.js
import {combineReducers} from 'redux';
import weatherReducer from './weather/reducer';
// import someFeatureReducer from "./someFeature/reducer";

const reducer = combineReducers({
  weather: weatherReducer,
});

export default reducer;
