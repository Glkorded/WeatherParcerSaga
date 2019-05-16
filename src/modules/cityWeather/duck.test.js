import {
  isLoading,
  cityWeatherInfo,
  getCityWeather,
  getCityWeatherInfo,
  getCityIsLoading,
  getCityWeatherRequest,
  getCityWeatherSuccess
} from "./duck"

describe("Is loading reducer", () => {
  it("Should change state", () => {
    expect(isLoading(false, getCityWeatherRequest())).toEqual(true)
  })
})

describe("Weather info reducer", () => {
  it("Should change state", () => {
    expect(cityWeatherInfo([], getCityWeatherSuccess({ a: 1, b: 2 }))).toEqual({
      a: 1,
      b: 2
    })
  })
})

const getCityWeatherMock = {
  cityWeather: { isLoading: false, cityWeatherInfo: "works" }
}

describe("city weather selectors", () => {
  it("correctly grabs info", () => {
    expect(getCityWeather(getCityWeatherMock)).toEqual({
      isLoading: false,
      cityWeatherInfo: "works"
    })
  })
  it("gets isLoading status", () => {
    expect(getCityIsLoading(getCityWeatherMock)).toEqual(false)
  })
  it("gets info", () => {
    expect(getCityWeatherInfo(getCityWeatherMock)).toEqual("works")
  })
})
