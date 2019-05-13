import { combineReducers } from "redux";
import weather from "./modules/weather/reducer";
import cityWeather from "./modules/cityWeather/reducer";

export default combineReducers({
  weather,
  cityWeather
});
