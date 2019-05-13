import * as R from "ramda";
import {
  getWeather,
  getWeatherInfo,
  getWeatherIsLoading,
  getCityWeather,
  getCityWeatherInfo,
  getCityIsLoading
} from "./selectors";

const getWeatherMock = { weather: { isLoading: false, weatherInfo: "Works" } };

const getCityWeatherMock = {
  cityWeather: { isLoading: false, cityWeatherInfo: "Works" }
};

describe("Weather selectors", () => {
  it("Correctly grabs info", () => {
    expect(getWeather(getWeatherMock)).toEqual({
      isLoading: false,
      weatherInfo: "Works"
    });
  });
  it("Gets isLoading status", () => {
    expect(getWeatherIsLoading(getWeatherMock)).toEqual(false);
  });
  it("Gets info", () => {
    expect(getWeatherInfo(getWeatherMock)).toEqual("Works");
  });
});

describe("City weather selectors", () => {
  it("Correctly grabs info", () => {
    expect(getCityWeather(getCityWeatherMock)).toEqual({
      isLoading: false,
      cityWeatherInfo: "Works"
    });
  });
  it("Gets isLoading status", () => {
    expect(getCityIsLoading(getCityWeatherMock)).toEqual(false);
  });
  it("Gets info", () => {
    expect(getCityWeatherInfo(getCityWeatherMock)).toEqual("Works");
  });
});
