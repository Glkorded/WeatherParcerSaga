import { combineReducers } from "redux";
import weather from "./modules/weather/duck";
import cityWeather from "./modules/cityWeather/duck";
import favourites from "./modules/favourites/duck";

export default combineReducers({
  weather,
  cityWeather,
  favourites
});
