import * as R from "ramda";

const pipeP = (...args) => R.pipeWith(R.then)(args);

export default pipeP;
