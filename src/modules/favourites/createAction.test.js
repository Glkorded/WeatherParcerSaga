const createAction = type => {
  const action = payload => {
    return { type: type, payload: payload };
  };
  action.toString = () => type;
  return action;
};

const action = createAction("typeAction");
console.log({ [action]: 10 });

describe("createAction", () => {
  it("should return function", () => {
    const typeAction = "typeAction";
    const action = createAction(typeAction);
    expect(typeof action).toBe("function");
    //expect(action).isFunction();
  });

  // должна принимать строку, которая вернётся из метода toString функции, которая это вернула
  it("should receive string, ", () => {
    const typeAction = "typeAction";
    const action = createAction(typeAction);
    console.log({ [action]: 10 });
    expect(action.toString()).toBe(typeAction);
  });

  it("returned functions must return object itself", () => {
    const typeAction = "typeAction";
    const action = createAction(typeAction);
    expect(action("payload")).toEqual({
      type: typeAction,
      payload: "payload"
    });
  });
});
