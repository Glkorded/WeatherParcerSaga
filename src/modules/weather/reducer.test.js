import { isLoading, weatherInfo } from "./reducer";

const mockAction = {
  type: "GET_WEATHER_REQUEST"
};

describe("Is loading reducer", () => {
  it("Should change state", () => {
    expect(isLoading(false, mockAction)).toEqual(true);
  });
});
