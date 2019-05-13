import { combineReducers } from "redux";
import weather from "./weather";
import cityWeather from "./cityWeather";

export default combineReducers({
  weather,
  cityWeather
});
