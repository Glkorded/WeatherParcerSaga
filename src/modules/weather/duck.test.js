import {
  getWeather,
  getWeatherInfo,
  getWeatherIsLoading,
  isLoading,
  weatherInfo,
  getWeatherRequest,
  getWeatherSuccess
} from "./duck";

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

describe("is loading reducer", () => {
  it("should change state", () => {
    expect(isLoading(false, getWeatherRequest())).toEqual(true);
  });
});

describe("weather info reducer", () => {
  it("should change state", () => {
    expect(weatherInfo([], getWeatherSuccess({ a: 1, b: 2 }))).toEqual({
      a: 1,
      b: 2
    });
  });
});
