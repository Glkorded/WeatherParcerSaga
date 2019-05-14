import { combineReducers } from "redux";
import weather from "./weather/duck";
import cityWeather from "./cityWeather/duck";
import favourites from "./favourites/duck";

export default combineReducers({
  weather,
  cityWeather,
  favourites
});
