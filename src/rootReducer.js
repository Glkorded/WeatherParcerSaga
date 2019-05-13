import { combineReducers } from "redux";
import weather from "./modules/weather/reducer";
import cityWeather from "./modules/cityWeather/reducer";
import localStorageInfo from "./modules/favourites/reducer";

export default combineReducers({
  weather,
  cityWeather,
  localStorageInfo
});
