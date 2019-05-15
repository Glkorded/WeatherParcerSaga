import { combineReducers } from "redux";
import weather from "./weather";
import cityWeather from "./cityWeather";
import favourites from "./favourites";

export default combineReducers({
  weather,
  cityWeather,
  favourites
});
