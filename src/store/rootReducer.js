// src/store/reducer.js
import {combineReducers} from 'redux';
import weatherReducer from './weather/reducer';
import recommendationReducer from './recommendation/reducer';
// import someFeatureReducer from "./someFeature/reducer";

const reducer = combineReducers({
  weather: weatherReducer,
  recommendation: recommendationReducer,
});

export default reducer;
