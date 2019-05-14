import { getCityWeather, getCityWeatherInfo, getCityIsLoading } from "./duck";

const getCityWeatherMock = {
  cityWeather: { isLoading: false, cityWeatherInfo: "Works" }
};

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
