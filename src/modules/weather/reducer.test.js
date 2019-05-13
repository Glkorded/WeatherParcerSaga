import { isLoading, weatherInfo } from "./reducer";
import { GET_WEATHER_REQUEST } from "./actions";

describe("Reducers", () => {
  it("Should change state", () => {
    expect(isLoading(false, GET_WEATHER_REQUEST)).toEqual(true);
  });
});
