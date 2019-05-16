import {
  fetchWeather,
  fetchWeatherInfo,
  fetchWeatherIsLoading,
  isLoading,
  weatherInfo,
  fetchWeatherRequest,
  setWeather
} from "./duck"

const fetchWeatherMock = { weather: { isLoading: false, weatherInfo: "Works" } }

describe("Weather selectors", () => {
  it("Correctly grabs info", () => {
    expect(fetchWeather(fetchWeatherMock)).toEqual({
      isLoading: false,
      weatherInfo: "Works"
    })
  })
  it("Gets isLoading status", () => {
    expect(fetchWeatherIsLoading(fetchWeatherMock)).toEqual(false)
  })
  it("Gets info", () => {
    expect(fetchWeatherInfo(fetchWeatherMock)).toEqual("Works")
  })
})

describe("is loading reducer", () => {
  it("should change state", () => {
    expect(isLoading(false, fetchWeatherRequest())).toEqual(true)
  })
})

describe("weather info reducer", () => {
  it("should change state", () => {
    expect(weatherInfo([], setWeather({ a: 1, b: 2 }))).toEqual({
      a: 1,
      b: 2
    })
  })
})
