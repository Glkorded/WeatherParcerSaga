import * as R from "ramda";
import { getWeather, getWeatherInfo, getWeatherIsLoading } from "./selectors";

const getWeatherMock = { weather: { isLoading: false, weatherInfo: "Works" } };

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
