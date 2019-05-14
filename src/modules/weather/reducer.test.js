import { isLoading, weatherInfo } from "./duck";

const mockIsLoadingAction = {
  type: "GET_WEATHER_REQUEST"
};

describe("Is loading reducer", () => {
  it("Should change state", () => {
    expect(isLoading(false, mockIsLoadingAction)).toEqual(true);
  });
});

const mockWeatherInfoAction = {
  type: "GET_WEATHER_SUCCESS",
  payload: { a: 1, b: 2 }
};

describe("Weather info reducer", () => {
  it("Should change state", () => {
    expect(weatherInfo([], mockWeatherInfoAction)).toEqual({ a: 1, b: 2 });
  });
});
