import { getCityWeather, getCityWeatherInfo, getCityIsLoading } from "./duck";

const getCityWeatherMock = {
  cityWeather: { isLoading: false, cityWeatherInfo: "works" }
};

describe("city weather selectors", () => {
  it("correctly grabs info", () => {
    expect(getCityWeather(getCityWeatherMock)).toEqual({
      isLoading: false,
      cityWeatherInfo: "works"
    });
  });
  it("gets isLoading status", () => {
    expect(getCityIsLoading(getCityWeatherMock)).toEqual(false);
  });
  it("gets info", () => {
    expect(getCityWeatherInfo(getCityWeatherMock)).toEqual("works");
  });
});
