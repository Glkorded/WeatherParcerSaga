import { getWeatherSaga } from "./sagas";
import { getWeatherData } from "./Manager";
import { call } from "redux-saga/effects";

describe("sagas", () => {
  it("should have effect call", () => {
    const g = getWeatherSaga({ payload: 1 });
    expect(g.next(12).value).toEqual(call(getWeatherData, 1));
  });
});
