import { combineReducers } from "redux";
import weather from "./modules/weather/reducer";
import cityWeather from "./modules/cityWeather/duck";
import favourites from "./modules/favourites/reducer";

export default combineReducers({
  weather,
  cityWeather,
  favourites
});
