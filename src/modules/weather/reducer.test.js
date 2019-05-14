import {
  isLoading,
  weatherInfo,
  getWeatherRequest,
  getWeatherSuccess
} from "./duck";

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
