import { fetchWeatherSaga } from "./sagas"
import { fetchWeatherData } from "./Manager"
import { call } from "redux-saga/effects"

describe("sagas", () => {
  it("should have effect call", () => {
    const g = fetchWeatherSaga({ payload: 1 })
    expect(g.next(12).value).toEqual(call(fetchWeatherData, 1))
  })
})
