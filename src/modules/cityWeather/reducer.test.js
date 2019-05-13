import { isLoading, cityWeatherInfo } from "./reducer";

const mockIsLoadingAction = {
  type: "GET_CITY_WEATHER_REQUEST"
};

describe("Is loading reducer", () => {
  it("Should change state", () => {
    expect(isLoading(false, mockIsLoadingAction)).toEqual(true);
  });
});

const mockWeatherInfoAction = {
  type: "GET_CITY_WEATHER_SUCCESS",
  payload: { a: 1, b: 2 }
};

describe("Weather info reducer", () => {
  it("Should change state", () => {
    expect(cityWeatherInfo([], mockWeatherInfoAction)).toEqual({ a: 1, b: 2 });
  });
});
