const { runSaga } = require("redux-saga");

function generator(action) {
  throw "error";
}
function errorFunction(error) {
  console.log("err", error);
}

const handlerError = errorFn => generatorFn =>
  function* (...args) {
    let data;
    try {
      data = yield* generatorFn(...args);
    } catch (err) {
      yield* errorFn(err);
    }
  };
runSaga({}, handlerError(errorFunction)(generator), { sadf: 123 });
