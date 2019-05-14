import { items } from "../favourites/reducer";

const createAction = () => () => null;

describe("createAction", () => {
  it("should return function", () => {
    const typeAction = "typeAction";
    const action = createAction(typeAction);
    expect(action).isFunction();
  });
  // должно принмать строку которая вернутся из метода toString фукцнии которая это вернула
  it("should ", () => {
    const typeAction = "typeAction";
    const action = createAction(typeAction);
    expect(action.toString()).toBe(typeAction);
  });
  // возращенная функцию при вызове должна возращать обект типа {type: 'переданная строка', payload: 'параметр певрой функции' }
  it("", () => {
    const typeAction = "typeAction";
    const action = createAction(typeAction);
    expect(action("payload")).toEqual({ type: typeAction, payload: "payload" });
  });
});
